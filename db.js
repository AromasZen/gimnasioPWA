const SUPABASE_URL = 'https://wodiqfovmlzvnghlxvzp.supabase.co'; // REEMPLAZAR
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZGlxZm92bWx6dm5naGx4dnpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1MDczNDMsImV4cCI6MjA5MzA4MzM0M30.supc7WqNBj-YCL9oP_a6Zw2HQbku5sio39sCd81VROg'; // REEMPLAZAR

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

// Auth State Change
supabase.auth.onAuthStateChange((event, session) => {
  currentUser = session?.user || null;
  // Si estamos en dashboard y cambia la sesión, recargamos
  if (typeof currentPage !== 'undefined' && currentPage === 'dashboard') {
    renderDashboard();
  }
});

// ==== AUTH FUNCIONES ====
async function loginDB(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function registerDB(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

async function logoutDB() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// ==== RUTINAS ====
async function saveRoutineDB(routineData, ejercicios) {
  if (!currentUser) throw new Error("Debes iniciar sesión para guardar rutinas.");

  // 1. Guardar en 'routines'
  const { data: routine, error: rError } = await supabase
    .from('routines')
    .insert([{
      user_id: currentUser.id,
      name: routineData.nombre,
      goal: routineData.objetivo,
      level: routineData.nivel,
      days_per_week: routineData.dias
    }])
    .select()
    .single();

  if (rError) throw rError;

  // 2. Guardar en 'routine_exercises'
  const routineExercises = ejercicios.map(ej => ({
    routine_id: routine.id,
    exercise_id: ej.id,
    day_number: ej.dia,
    sets: ej.series,
    reps: ej.reps,
    order_num: ej.orden
  }));

  const { error: eError } = await supabase
    .from('routine_exercises')
    .insert(routineExercises);

  if (eError) throw eError;

  return routine;
}

async function getRoutinesDB() {
  if (!currentUser) return [];
  const { data, error } = await supabase
    .from('routines')
    .select(`
      *,
      routine_exercises (
        *,
        exercises (*)
      )
    `)
    .eq('user_id', currentUser.id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

async function deleteRoutineDB(routineId) {
  if (!currentUser) return;
  const { error } = await supabase
    .from('routines')
    .delete()
    .eq('id', routineId)
    .eq('user_id', currentUser.id);
  if (error) throw error;
}

// ==== PROGRESO (WORKOUTS) ====
async function saveProgressDB(ejercicio_id, peso, reps) {
  if (!currentUser) throw new Error("Debes iniciar sesión para guardar progreso.");

  const today = new Date().toISOString().split('T')[0];

  // 1. Buscar si ya hay un workout hoy
  let { data: workout, error: wError } = await supabase
    .from('workouts')
    .select('*')
    .eq('user_id', currentUser.id)
    .eq('date', today)
    .maybeSingle();

  if (wError) throw wError;

  // 2. Si no hay, crearlo
  if (!workout) {
    const { data: newWorkout, error: createError } = await supabase
      .from('workouts')
      .insert([{ user_id: currentUser.id, date: today, notes: '' }])
      .select()
      .single();
    if (createError) throw createError;
    workout = newWorkout;
  }

  // 3. Insertar el set
  const { error: setError } = await supabase
    .from('workout_sets')
    .insert([{
      workout_id: workout.id,
      exercise_id: ejercicio_id,
      weight: peso,
      reps: reps
    }]);

  if (setError) throw setError;
}

async function getProgressHistoryDB() {
  if (!currentUser) return [];
  
  const { data, error } = await supabase
    .from('workout_sets')
    .select(`
      *,
      workouts!inner(date, user_id),
      exercises(*)
    `)
    .eq('workouts.user_id', currentUser.id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

// ==== RECORDS ====
async function checkAndSavePRDB(ejercicio_id, peso) {
  if (!currentUser) return;

  const { data: existing, error: searchError } = await supabase
    .from('records')
    .select('*')
    .eq('user_id', currentUser.id)
    .eq('exercise_id', ejercicio_id)
    .maybeSingle();

  if (searchError) throw searchError;

  if (!existing) {
    const { error } = await supabase
      .from('records')
      .insert([{
        user_id: currentUser.id,
        exercise_id: ejercicio_id,
        max_weight: peso,
        date: new Date().toISOString().split('T')[0]
      }]);
    if (error) throw error;
  } else if (peso > existing.max_weight) {
    const { error } = await supabase
      .from('records')
      .update({ max_weight: peso, date: new Date().toISOString().split('T')[0] })
      .eq('id', existing.id);
    if (error) throw error;
  }
}

async function getRecordsDB() {
  if (!currentUser) return [];
  const { data, error } = await supabase
    .from('records')
    .select('*, exercises(*)')
    .eq('user_id', currentUser.id)
    .order('max_weight', { ascending: false });
  if (error) throw error;
  return data;
}

// ==== SYNC LOCAL -> DB (BONUS) ====
async function syncLocalDataToSupabase() {
  if (!currentUser) return;

  try {
    const localRoutines = JSON.parse(localStorage.getItem('fitgym_routines') || '[]');
    const localProgress = JSON.parse(localStorage.getItem('fitgym_progress') || '[]');
    const localRecords = JSON.parse(localStorage.getItem('fitgym_records') || '[]');

    let synced = false;

    // Sincronizar Rutinas
    for (const r of localRoutines) {
      await saveRoutineDB(r, r.ejercicios);
      synced = true;
    }

    // Sincronizar Progreso
    for (const p of localProgress) {
      await saveProgressDB(p.ejercicio_id, p.peso, p.reps);
      synced = true;
    }

    // Sincronizar Records
    for (const rec of localRecords) {
      await checkAndSavePRDB(rec.ejercicio_id, rec.peso_max);
      synced = true;
    }

    if (synced) {
      localStorage.removeItem('fitgym_routines');
      localStorage.removeItem('fitgym_progress');
      localStorage.removeItem('fitgym_records');
      showToast('Datos locales sincronizados con la nube', 'success');
    }
  } catch (err) {
    console.error("Error sincronizando:", err);
    showToast('Error sincronizando datos locales', 'error');
  }
}
