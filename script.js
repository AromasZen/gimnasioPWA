/* ===================================================================
   FitGym - Single Page Application (Vanilla JS)
   =================================================================== */

// ===== EXERCISE DATABASE (46 exercises) =====
const EJERCICIOS = [
  { id: 1, nombre: 'Press de Banca', grupo_muscular: 'pecho', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 2, nombre: 'Press Inclinado con Mancuernas', grupo_muscular: 'pecho', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 3, nombre: 'Aperturas con Mancuernas', grupo_muscular: 'pecho', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 4, nombre: 'Fondos en Paralelas', grupo_muscular: 'pecho', nivel: 'avanzado', tipo_objetivo: 'fuerza' },
  { id: 5, nombre: 'Crossover en Polea', grupo_muscular: 'pecho', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 6, nombre: 'Dominadas', grupo_muscular: 'espalda', nivel: 'intermedio', tipo_objetivo: 'fuerza' },
  { id: 7, nombre: 'Remo con Barra', grupo_muscular: 'espalda', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 8, nombre: 'Jalón al Pecho', grupo_muscular: 'espalda', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 9, nombre: 'Remo con Mancuerna', grupo_muscular: 'espalda', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 10, nombre: 'Peso Muerto', grupo_muscular: 'espalda', nivel: 'avanzado', tipo_objetivo: 'fuerza' },
  { id: 11, nombre: 'Sentadilla con Barra', grupo_muscular: 'piernas', nivel: 'intermedio', tipo_objetivo: 'fuerza' },
  { id: 12, nombre: 'Prensa de Piernas', grupo_muscular: 'piernas', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 13, nombre: 'Extensión de Cuádriceps', grupo_muscular: 'piernas', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 14, nombre: 'Curl de Isquiotibiales', grupo_muscular: 'piernas', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 15, nombre: 'Sentadilla Búlgara', grupo_muscular: 'piernas', nivel: 'avanzado', tipo_objetivo: 'fuerza' },
  { id: 16, nombre: 'Zancadas con Mancuernas', grupo_muscular: 'piernas', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 17, nombre: 'Elevación de Gemelos', grupo_muscular: 'piernas', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 18, nombre: 'Press Militar', grupo_muscular: 'hombros', nivel: 'intermedio', tipo_objetivo: 'fuerza' },
  { id: 19, nombre: 'Elevaciones Laterales', grupo_muscular: 'hombros', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 20, nombre: 'Elevaciones Frontales', grupo_muscular: 'hombros', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 21, nombre: 'Pájaros', grupo_muscular: 'hombros', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 22, nombre: 'Press Arnold', grupo_muscular: 'hombros', nivel: 'avanzado', tipo_objetivo: 'hipertrofia' },
  { id: 23, nombre: 'Curl de Bíceps con Barra', grupo_muscular: 'brazos', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 24, nombre: 'Curl Martillo', grupo_muscular: 'brazos', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 25, nombre: 'Curl Concentrado', grupo_muscular: 'brazos', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 26, nombre: 'Extensión de Tríceps en Polea', grupo_muscular: 'brazos', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 27, nombre: 'Press Francés', grupo_muscular: 'brazos', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 28, nombre: 'Fondos en Banco', grupo_muscular: 'brazos', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 29, nombre: 'Curl con Barra Z', grupo_muscular: 'brazos', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 30, nombre: 'Plancha', grupo_muscular: 'core', nivel: 'principiante', tipo_objetivo: 'salud' },
  { id: 31, nombre: 'Crunch Abdominal', grupo_muscular: 'core', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 32, nombre: 'Elevación de Piernas', grupo_muscular: 'core', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 33, nombre: 'Russian Twist', grupo_muscular: 'core', nivel: 'intermedio', tipo_objetivo: 'salud' },
  { id: 34, nombre: 'Ab Wheel', grupo_muscular: 'core', nivel: 'avanzado', tipo_objetivo: 'fuerza' },
  { id: 35, nombre: 'Cinta / Correr', grupo_muscular: 'cardio', nivel: 'principiante', tipo_objetivo: 'bajar_grasa' },
  { id: 36, nombre: 'Bicicleta Estática', grupo_muscular: 'cardio', nivel: 'principiante', tipo_objetivo: 'bajar_grasa' },
  { id: 37, nombre: 'Elíptica', grupo_muscular: 'cardio', nivel: 'principiante', tipo_objetivo: 'salud' },
  { id: 38, nombre: 'Remo Ergómetro', grupo_muscular: 'cardio', nivel: 'intermedio', tipo_objetivo: 'bajar_grasa' },
  { id: 39, nombre: 'Saltar la Soga', grupo_muscular: 'cardio', nivel: 'intermedio', tipo_objetivo: 'bajar_grasa' },
  { id: 40, nombre: 'HIIT Burpees', grupo_muscular: 'cardio', nivel: 'avanzado', tipo_objetivo: 'bajar_grasa' },
  { id: 41, nombre: 'Hip Thrust', grupo_muscular: 'piernas', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 42, nombre: 'Face Pull', grupo_muscular: 'hombros', nivel: 'principiante', tipo_objetivo: 'salud' },
  { id: 43, nombre: 'Pullover con Mancuerna', grupo_muscular: 'pecho', nivel: 'intermedio', tipo_objetivo: 'hipertrofia' },
  { id: 44, nombre: 'Encogimientos de Hombros', grupo_muscular: 'espalda', nivel: 'principiante', tipo_objetivo: 'hipertrofia' },
  { id: 45, nombre: 'Sentadilla Goblet', grupo_muscular: 'piernas', nivel: 'principiante', tipo_objetivo: 'salud' },
  { id: 46, nombre: 'Mountain Climbers', grupo_muscular: 'cardio', nivel: 'principiante', tipo_objetivo: 'bajar_grasa' },
];

const DIA_LABELS = { 1: 'Lunes', 2: 'Martes', 3: 'Miércoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sábado', 7: 'Domingo' };
const OBJ_LABELS = { hipertrofia: 'Hipertrofia', bajar_grasa: 'Bajar Grasa', fuerza: 'Fuerza', salud: 'Salud General' };
const ZONAS = ['pecho', 'espalda', 'piernas', 'hombros', 'brazos', 'core', 'cardio'];

// ===== STATE =====
let currentPage = 'home';
let surveyStep = 0;
let surveyData = { edad: 25, experiencia: '', objetivo: '', dias_entrenamiento: 3, tipo_entrenamiento: '', zonas_especificas: [] };
let generatedRoutine = null;
let generatedDias = 0;
let activeCalc = 'imc';

// Saved routines (now local cache from DB)
let savedRoutines = [];
let savedProgress = [];
let savedRecords = [];

async function reloadDataFromDB() {
  if (!currentUser) {
    savedRoutines = [];
    savedProgress = [];
    savedRecords = [];
    return;
  }
  try {
    savedRoutines = await getRoutinesDB();
    savedProgress = await getProgressHistoryDB();
    savedRecords = await getRecordsDB();
  } catch (err) {
    console.error("Error loading data from DB", err);
  }
}

// ===== NAVIGATION =====
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  // Update nav active state
  document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  // Close mobile nav
  document.getElementById('mobileNav').classList.remove('open');

  // Scroll to top
  window.scrollTo(0, 0);

  // Render page content
  if (page === 'encuesta') renderSurvey();
  if (page === 'calculadora') renderCalculator();
  if (page === 'rutina') renderRoutineResult();
  if (page === 'dashboard') renderDashboard();
  if (page === 'entrenador') renderTrainer();
}

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// Setup nav links
document.querySelectorAll('.header-nav a, .mobile-nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    navigate(a.dataset.page);
  });
});

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== SURVEY =====
function renderSurvey() {
  const container = document.getElementById('surveyContainer');
  const steps = ['edad', 'experiencia', 'objetivo', 'dias', 'tipo'];

  let html = '';

  // Progress bar
  html += '<div class="progress-bar">';
  for (let i = 0; i < 5; i++) {
    html += `<div class="progress-segment ${i <= surveyStep ? 'active' : ''}"></div>`;
  }
  html += '</div>';
  html += `<div class="step-label">Paso ${surveyStep + 1} de 5</div>`;

  // Step content
  html += '<div class="survey-card">';

  if (surveyStep === 0) {
    html += `
      <h2><span class="icon">👤</span> ¿Cuántos años tenés?</h2>
      <div class="range-wrap">
        <input type="range" min="14" max="80" value="${surveyData.edad}" oninput="updateSurveyAge(this.value)" />
        <div class="range-value" id="ageValue">${surveyData.edad}</div>
      </div>
      <div class="range-label">Edad: ${surveyData.edad} años</div>
    `;
  } else if (surveyStep === 1) {
    const exps = [
      { value: 'principiante', label: 'Principiante', desc: 'Menos de 6 meses', emoji: '🌱' },
      { value: 'intermedio', label: 'Intermedio', desc: '6 meses a 2 años', emoji: '💪' },
      { value: 'avanzado', label: 'Avanzado', desc: 'Más de 2 años', emoji: '🔥' },
    ];
    html += '<h2><span class="icon">🎯</span> ¿Cuál es tu experiencia?</h2>';
    html += '<div class="option-grid">';
    exps.forEach(e => {
      html += `<div class="option-card ${surveyData.experiencia === e.value ? 'selected' : ''}" onclick="updateSurvey('experiencia','${e.value}')">
        <div class="emoji">${e.emoji}</div>
        <div><div class="label">${e.label}</div><div class="desc">${e.desc}</div></div>
      </div>`;
    });
    html += '</div>';
  } else if (surveyStep === 2) {
    const objs = [
      { value: 'hipertrofia', label: 'Hipertrofia', desc: 'Ganar masa muscular', icon: '🏋️' },
      { value: 'bajar_grasa', label: 'Bajar Grasa', desc: 'Perder peso y definir', icon: '🔥' },
      { value: 'fuerza', label: 'Fuerza', desc: 'Aumentar fuerza máxima', icon: '🛡️' },
      { value: 'salud', label: 'Salud General', desc: 'Mejorar bienestar', icon: '❤️' },
    ];
    html += '<h2><span class="icon">🎯</span> ¿Cuál es tu objetivo?</h2>';
    html += '<div class="option-grid cols-2">';
    objs.forEach(o => {
      html += `<div class="option-card option-card-center ${surveyData.objetivo === o.value ? 'selected' : ''}" onclick="updateSurvey('objetivo','${o.value}')">
        <div class="icon-wrap ${surveyData.objetivo === o.value ? 'sel' : ''}">${o.icon}</div>
        <div class="label">${o.label}</div>
        <div class="desc">${o.desc}</div>
      </div>`;
    });
    html += '</div>';
  } else if (surveyStep === 3) {
    html += '<h2><span class="icon">📅</span> ¿Cuántos días entrenás?</h2>';
    html += '<div class="day-btns">';
    for (let d = 1; d <= 7; d++) {
      html += `<button class="day-btn ${surveyData.dias_entrenamiento === d ? 'selected' : ''}" onclick="updateSurvey('dias_entrenamiento',${d})">${d}</button>`;
    }
    html += '</div>';
    html += `<div class="range-label text-center mt-2">${surveyData.dias_entrenamiento} días por semana</div>`;
  } else if (surveyStep === 4) {
    html += '<h2><span class="icon">📦</span> ¿Cómo querés entrenar?</h2>';
    html += '<div class="option-grid cols-2">';
    html += `<div class="option-card option-card-center ${surveyData.tipo_entrenamiento === 'fullbody' ? 'selected' : ''}" onclick="updateSurvey('tipo_entrenamiento','fullbody')">
      <div class="emoji">🏋️</div>
      <div class="label">Cuerpo Completo</div>
      <div class="desc">Todos los músculos</div>
    </div>`;
    html += `<div class="option-card option-card-center ${surveyData.tipo_entrenamiento === 'zonas_especificas' ? 'selected' : ''}" onclick="updateSurvey('tipo_entrenamiento','zonas_especificas')">
      <div class="emoji">🎯</div>
      <div class="label">Zonas Específicas</div>
      <div class="desc">Elegí tus zonas</div>
    </div>`;
    html += '</div>';

    if (surveyData.tipo_entrenamiento === 'zonas_especificas') {
      html += '<div class="zone-pills">';
      ZONAS.forEach(z => {
        html += `<div class="zone-pill ${surveyData.zonas_especificas.includes(z) ? 'selected' : ''}" onclick="toggleZona('${z}')">${z}</div>`;
      });
      html += '</div>';
    }
  }

  html += '</div>';

  // Navigation buttons
  html += '<div class="survey-nav">';
  html += `<button class="btn btn-secondary btn-sm" onclick="surveyPrev()" ${surveyStep === 0 ? 'disabled' : ''}>‹ Anterior</button>`;
  if (surveyStep < 4) {
    html += `<button class="btn btn-primary btn-sm" onclick="surveyNext()" ${!canSurveyNext() ? 'disabled' : ''}>Siguiente ›</button>`;
  } else {
    html += `<button class="btn btn-primary btn-sm" onclick="generateRoutine()" ${!canSurveyNext() ? 'disabled' : ''}>🏋️ Generar Rutina</button>`;
  }
  html += '</div>';

  container.innerHTML = html;
}

function updateSurveyAge(val) {
  surveyData.edad = parseInt(val);
  const ageEl = document.getElementById('ageValue');
  if (ageEl) ageEl.textContent = val;
}

function updateSurvey(key, value) {
  surveyData[key] = value;
  renderSurvey();
}

function toggleZona(zona) {
  const idx = surveyData.zonas_especificas.indexOf(zona);
  if (idx >= 0) surveyData.zonas_especificas.splice(idx, 1);
  else surveyData.zonas_especificas.push(zona);
  renderSurvey();
}

function canSurveyNext() {
  switch (surveyStep) {
    case 0: return surveyData.edad >= 14 && surveyData.edad <= 80;
    case 1: return surveyData.experiencia !== '';
    case 2: return surveyData.objetivo !== '';
    case 3: return surveyData.dias_entrenamiento >= 1 && surveyData.dias_entrenamiento <= 7;
    case 4: return surveyData.tipo_entrenamiento !== '' && (surveyData.tipo_entrenamiento === 'fullbody' || surveyData.zonas_especificas.length > 0);
    default: return false;
  }
}

function surveyPrev() {
  if (surveyStep > 0) { surveyStep--; renderSurvey(); }
}

function surveyNext() {
  if (canSurveyNext() && surveyStep < 4) { surveyStep++; renderSurvey(); }
}

function generateRoutine() {
  if (!canSurveyNext()) return;

  const nivelMap = {
    principiante: ['principiante'],
    intermedio: ['principiante', 'intermedio'],
    avanzado: ['principiante', 'intermedio', 'avanzado'],
  };
  const nivelesPermitidos = nivelMap[surveyData.experiencia] || ['principiante'];

  const filtered = EJERCICIOS.filter(e => nivelesPermitidos.includes(e.nivel));
  const preferidos = filtered.filter(e => e.tipo_objetivo === surveyData.objetivo);
  const otros = filtered.filter(e => e.tipo_objetivo !== surveyData.objetivo);

  let pool = [...preferidos, ...otros];
  if (surveyData.tipo_entrenamiento === 'zonas_especificas' && surveyData.zonas_especificas.length > 0) {
    pool = pool.filter(e => surveyData.zonas_especificas.includes(e.grupo_muscular));
  }

  const dias = surveyData.dias_entrenamiento;
  const ejerciciosPorDia = Math.min(Math.max(4, Math.floor(pool.length / dias)), 6);
  const rutina = [];

  const groups = {};
  pool.forEach(e => {
    if (!groups[e.grupo_muscular]) groups[e.grupo_muscular] = [];
    groups[e.grupo_muscular].push(e);
  });
  const groupKeys = Object.keys(groups);

  for (let dia = 1; dia <= dias; dia++) {
    const usedIds = new Set();
    for (let i = 0; i < ejerciciosPorDia; i++) {
      const groupIdx = (dia - 1 + i) % groupKeys.length;
      const group = groups[groupKeys[groupIdx]] || [];
      const available = group.filter(e => !usedIds.has(e.id));
      if (available.length > 0) {
        const ej = available[Math.floor(Math.random() * available.length)];
        usedIds.add(ej.id);
        rutina.push({
          ...ej,
          dia,
          series: surveyData.objetivo === 'fuerza' ? 5 : surveyData.objetivo === 'hipertrofia' ? 4 : 3,
          reps: surveyData.objetivo === 'fuerza' ? '3-5' : surveyData.objetivo === 'hipertrofia' ? '8-12' : surveyData.objetivo === 'bajar_grasa' ? '15-20' : '10-15',
          orden: i + 1,
        });
      }
    }
  }

  generatedRoutine = rutina;
  generatedDias = dias;

  // Save to DB
  const routineObj = {
    nombre: `Rutina ${OBJ_LABELS[surveyData.objetivo] || 'Personal'}`,
    objetivo: surveyData.objetivo,
    nivel: surveyData.experiencia,
    dias
  };

  if (currentUser) {
    saveRoutineDB(routineObj, rutina)
      .then(() => {
        showToast('Rutina guardada en la nube');
        reloadDataFromDB();
      })
      .catch(err => {
        console.error(err);
        showToast('Error al guardar rutina en la nube', 'error');
      });
  } else {
    showToast('Inicia sesión para guardar tu rutina permanentemente', 'error');
  }

  navigate('rutina');
}

// ===== ROUTINE RESULT =====
let routineSelectedDay = 1;

function renderRoutineResult() {
  const container = document.getElementById('routineContainer');

  if (!generatedRoutine || generatedRoutine.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding-top:80px;">
        <div class="icon">🏋️</div>
        <h2 style="font-size:24px;font-weight:700;margin-bottom:16px;">No hay rutina generada</h2>
        <button class="btn btn-primary" onclick="navigate('encuesta')">Hacer la Encuesta</button>
      </div>`;
    return;
  }

  let html = '';

  // Back link
  html += '<div class="back-link" onclick="navigate(\'encuesta\')">‹ Volver a la encuesta</div>';

  // Header
  html += `<div class="routine-header">
    <h1>Tu Rutina <span class="accent">Personalizada</span></h1>
    <div class="routine-tags">
      <div class="routine-tag"><span style="color:#E94560">🎯</span> ${OBJ_LABELS[surveyData.objetivo] || ''}</div>
      <div class="routine-tag"><span style="color:#FF6B35">🏋️</span> ${surveyData.experiencia}</div>
      <div class="routine-tag"><span style="color:#10B981">📅</span> ${generatedDias} días/semana</div>
    </div>
  </div>`;

  // Day tabs
  html += '<div class="day-tabs">';
  for (let d = 1; d <= generatedDias; d++) {
    html += `<div class="day-tab ${routineSelectedDay === d ? 'active' : ''}" onclick="selectRoutineDay(${d})">Día ${d} - ${DIA_LABELS[d] || 'Día ' + d}</div>`;
  }
  html += '</div>';

  // Exercises
  const ejerciciosDia = generatedRoutine.filter(e => e.dia === routineSelectedDay);
  html += '<div class="exercise-list">';
  if (ejerciciosDia.length === 0) {
    html += '<div class="text-center" style="padding:48px 0;color:#6B7280;">No hay ejercicios para este día</div>';
  } else {
    ejerciciosDia.forEach(ej => {
      html += `<div class="exercise-wrapper">
        <div class="exercise-item">
          <div class="exercise-num">${ej.orden}</div>
          <div class="exercise-info">
            <div class="exercise-name">${ej.nombre}</div>
            <div class="exercise-muscle">${ej.grupo_muscular}</div>
          </div>
          <div class="exercise-sets">
            <div class="main">${ej.series} x ${ej.reps}</div>
            <div class="sub">series x reps</div>
          </div>
          <div class="exercise-actions">
            <button class="btn btn-secondary btn-sm" onclick="toggleProgressForm(${ej.id})" style="padding:6px 12px; font-size:12px;">📝 Registrar</button>
          </div>
        </div>
        <div id="form-progress-${ej.id}" class="exercise-form hidden">
          <input type="number" id="peso-${ej.id}" placeholder="Peso (kg)" min="0" step="0.5" />
          <input type="number" id="reps-${ej.id}" placeholder="Reps" min="1" step="1" />
          <button class="btn btn-primary btn-sm" onclick="submitProgress(${ej.id})">Guardar</button>
        </div>
      </div>`;
    });
  }
  html += '</div>';

  // Actions
  html += `<div class="routine-actions">
    <button class="btn btn-secondary btn-sm" onclick="shareRoutine()">📤 Compartir</button>
    <button class="btn btn-primary btn-sm" onclick="downloadRoutine()">📥 Descargar</button>
  </div>`;

  container.innerHTML = html;
}

function selectRoutineDay(d) {
  routineSelectedDay = d;
  renderRoutineResult();
}

function shareRoutine() {
  const text = `🏋️ Mi rutina personalizada de FitGym:\n\nObjetivo: ${OBJ_LABELS[surveyData.objetivo]}\nNivel: ${surveyData.experiencia}\nDías: ${generatedDias}\n\n¡Generá la tuya en FitGym!`;
  if (navigator.share) {
    navigator.share({ title: 'Mi Rutina FitGym', text });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('¡Rutina copiada al portapapeles!'));
  }
}

function downloadRoutine() {
  if (!generatedRoutine) return;
  const text = generatedRoutine
    .map(e => `Día ${e.dia}: ${e.nombre} - ${e.series}x${e.reps} (${e.grupo_muscular})`)
    .join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mi-rutina-fitgym.txt';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Rutina descargada');
}

// ===== PROGRESS & PR LOGIC =====
function toggleProgressForm(id) {
  const form = document.getElementById(`form-progress-${id}`);
  if (form) form.classList.toggle('hidden');
}

function submitProgress(ej_id) {
  const pesoEl = document.getElementById(`peso-${ej_id}`);
  const repsEl = document.getElementById(`reps-${ej_id}`);
  if (!pesoEl || !repsEl) return;

  const peso = parseFloat(pesoEl.value);
  const reps = parseInt(repsEl.value);

  if (isNaN(peso) || peso <= 0 || isNaN(reps) || reps <= 0) {
    showToast('Ingresá un peso y repeticiones válidos', 'error');
    return;
  }

  saveProgress(ej_id, peso, reps);

  pesoEl.value = '';
  repsEl.value = '';
  toggleProgressForm(ej_id);
}

async function saveProgress(ejercicio_id, peso, reps) {
  if (!currentUser) {
    showToast('Debes iniciar sesión para guardar progreso', 'error');
    return;
  }
  try {
    await saveProgressDB(ejercicio_id, peso, reps);
    await checkAndSavePRDB(ejercicio_id, peso);
    showToast('Progreso guardado correctamente');
    await reloadDataFromDB();
    if (currentPage === 'dashboard') {
      renderDashboard();
    }
  } catch(err) {
    console.error(err);
    showToast('Error al guardar progreso', 'error');
  }
}

function checkAndSavePR(ejercicio_id, peso) {
  // Ahora es checkAndSavePRDB, manejado dentro de saveProgress
}

// ===== CALCULATOR =====
function renderCalculator() {
  const container = document.getElementById('calcContainer');
  let html = '';

  html += `<h1 style="font-size:clamp(1.5rem,3vw,2.5rem);font-weight:900;text-transform:uppercase;margin-bottom:8px;">Calculadora <span style="color:#E94560">Fitness</span></h1>`;
  html += `<p style="color:#6B7280;margin-bottom:32px;">Herramientas para conocer tu cuerpo y optimizar tu entrenamiento.</p>`;

  // Tabs
  const tabs = [
    { key: 'imc', label: 'IMC', icon: '⚖️' },
    { key: 'calorias', label: 'Calorías', icon: '🔥' },
    { key: 'peso_ideal', label: 'Peso Ideal', icon: '🧮' },
    { key: '1rm', label: '1RM', icon: '🏋️' },
  ];
  html += '<div class="calc-tabs">';
  tabs.forEach(t => {
    html += `<div class="calc-tab ${activeCalc === t.key ? 'active' : ''}" onclick="switchCalc('${t.key}')">${t.icon} ${t.label}</div>`;
  });
  html += '</div>';

  // Calculator content
  html += '<div id="calcContent"></div>';
  container.innerHTML = html;

  renderCalcContent();
}

function switchCalc(key) {
  activeCalc = key;
  document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.calc-tab').forEach(t => {
    if (t.textContent.toLowerCase().includes(key === '1rm' ? '1rm' : key.replace('_', ' '))) t.classList.add('active');
  });
  renderCalculator();
}

function renderCalcContent() {
  const el = document.getElementById('calcContent');
  if (!el) return;

  if (activeCalc === 'imc') {
    el.innerHTML = `
      <div class="calc-card">
        <h2>Índice de Masa Corporal</h2>
        <p class="desc">Calculá tu IMC para conocer tu composición corporal.</p>
        <div class="form-grid cols-2">
          <div class="form-group"><label>Peso (kg)</label><input type="number" id="imc_peso" placeholder="70" /></div>
          <div class="form-group"><label>Altura (cm)</label><input type="number" id="imc_altura" placeholder="175" /></div>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcIMC()">Calcular IMC</button>
        <div id="imcResult"></div>
      </div>`;
  } else if (activeCalc === 'calorias') {
    el.innerHTML = `
      <div class="calc-card">
        <h2>Calculadora de Calorías (TDEE)</h2>
        <p class="desc">Conocé cuántas calorías necesitás por día.</p>
        <div class="form-grid cols-2">
          <div class="form-group"><label>Peso (kg)</label><input type="number" id="cal_peso" placeholder="70" /></div>
          <div class="form-group"><label>Altura (cm)</label><input type="number" id="cal_altura" placeholder="175" /></div>
          <div class="form-group"><label>Edad</label><input type="number" id="cal_edad" placeholder="25" /></div>
          <div class="form-group">
            <label>Sexo</label>
            <div class="sex-btns">
              <div class="sex-btn selected" id="cal_sexo_h" onclick="selectSex('cal','hombre')">Hombre</div>
              <div class="sex-btn" id="cal_sexo_m" onclick="selectSex('cal','mujer')">Mujer</div>
            </div>
          </div>
        </div>
        <div class="form-group mb-4">
          <label>Nivel de actividad</label>
          <select id="cal_actividad">
            <option value="1.2">Sedentario (poco o nada de ejercicio)</option>
            <option value="1.375">Ligero (1-3 días/semana)</option>
            <option value="1.55" selected>Moderado (3-5 días/semana)</option>
            <option value="1.725">Activo (6-7 días/semana)</option>
            <option value="1.9">Muy activo (2x al día)</option>
          </select>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcCalorias()">Calcular Calorías</button>
        <div id="calResult"></div>
      </div>`;
  } else if (activeCalc === 'peso_ideal') {
    el.innerHTML = `
      <div class="calc-card">
        <h2>Peso Ideal</h2>
        <p class="desc">Estimación según diferentes fórmulas médicas.</p>
        <div class="form-grid cols-2">
          <div class="form-group"><label>Altura (cm)</label><input type="number" id="pi_altura" placeholder="175" /></div>
          <div class="form-group">
            <label>Sexo</label>
            <div class="sex-btns">
              <div class="sex-btn selected" id="pi_sexo_h" onclick="selectSex('pi','hombre')">Hombre</div>
              <div class="sex-btn" id="pi_sexo_m" onclick="selectSex('pi','mujer')">Mujer</div>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcPesoIdeal()">Calcular Peso Ideal</button>
        <div id="piResult"></div>
      </div>`;
  } else if (activeCalc === '1rm') {
    el.innerHTML = `
      <div class="calc-card">
        <h2>Calculadora 1RM</h2>
        <p class="desc">Calculá tu repetición máxima en cualquier ejercicio (Fórmula Epley).</p>
        <div class="form-grid cols-2">
          <div class="form-group"><label>Peso levantado (kg)</label><input type="number" id="rm_peso" placeholder="80" /></div>
          <div class="form-group"><label>Repeticiones</label><input type="number" id="rm_reps" placeholder="5" /></div>
        </div>
        <button class="btn btn-primary btn-full" onclick="calcOneRM()">Calcular 1RM</button>
        <div id="rmResult"></div>
      </div>`;
  }
}

// Sex selector state
let calcSex = { cal: 'hombre', pi: 'hombre' };

function selectSex(prefix, sex) {
  calcSex[prefix] = sex;
  const h = document.getElementById(prefix + '_sexo_h');
  const m = document.getElementById(prefix + '_sexo_m');
  if (h && m) {
    h.classList.toggle('selected', sex === 'hombre');
    m.classList.toggle('selected', sex === 'mujer');
  }
}

function calcIMC() {
  const peso = parseFloat(document.getElementById('imc_peso').value);
  const altura = parseFloat(document.getElementById('imc_altura').value) / 100;
  if (!peso || !altura) return;
  const imc = peso / (altura * altura);
  let category, color;
  if (imc < 18.5) { category = 'Bajo peso'; color = '#3B82F6'; }
  else if (imc < 25) { category = 'Normal'; color = '#10B981'; }
  else if (imc < 30) { category = 'Sobrepeso'; color = '#F59E0B'; }
  else { category = 'Obesidad'; color = '#EF4444'; }
  const val = Math.round(imc * 10) / 10;
  document.getElementById('imcResult').innerHTML = `
    <div class="result-box">
      <div class="result-big" style="color:${color}">${val}</div>
      <div class="result-label" style="color:${color}">${category}</div>
      <div class="result-bar"><div class="result-bar-fill" style="width:${Math.min((val / 40) * 100, 100)}%;background:${color}"></div></div>
    </div>`;
}

function calcCalorias() {
  const peso = parseFloat(document.getElementById('cal_peso').value);
  const altura = parseFloat(document.getElementById('cal_altura').value);
  const edad = parseFloat(document.getElementById('cal_edad').value);
  const actividad = parseFloat(document.getElementById('cal_actividad').value);
  if (!peso || !altura || !edad) return;
  let bmr;
  if (calcSex.cal === 'hombre') bmr = 10 * peso + 6.25 * altura - 5 * edad + 5;
  else bmr = 10 * peso + 6.25 * altura - 5 * edad - 161;
  const tdee = Math.round(bmr * actividad);
  bmr = Math.round(bmr);
  document.getElementById('calResult').innerHTML = `
    <div class="result-grid cols-2" style="margin-top:24px">
      <div class="result-item"><div class="val" style="color:#FF6B35">${bmr}</div><div class="lbl">BMR (kcal/día)</div></div>
      <div class="result-item"><div class="val" style="color:#E94560">${tdee}</div><div class="lbl">TDEE (kcal/día)</div></div>
    </div>
    <div class="result-grid cols-3" style="margin-top:12px">
      <div class="result-item"><div class="val" style="color:#10B981;font-size:1.1rem">${tdee - 500}</div><div class="lbl">Perder peso</div></div>
      <div class="result-item"><div class="val" style="color:#3B82F6;font-size:1.1rem">${tdee}</div><div class="lbl">Mantener</div></div>
      <div class="result-item"><div class="val" style="color:#F59E0B;font-size:1.1rem">${tdee + 500}</div><div class="lbl">Ganar masa</div></div>
    </div>`;
}

function calcPesoIdeal() {
  const h = parseFloat(document.getElementById('pi_altura').value);
  if (!h) return;
  const inches = (h - 152.4) / 2.54;
  let devine, robinson, miller;
  if (calcSex.pi === 'hombre') {
    devine = 50 + 2.3 * inches;
    robinson = 52 + 1.9 * inches;
    miller = 56.2 + 1.41 * inches;
  } else {
    devine = 45.5 + 2.3 * inches;
    robinson = 49 + 1.7 * inches;
    miller = 53.1 + 1.36 * inches;
  }
  document.getElementById('piResult').innerHTML = `
    <div class="result-grid cols-3" style="margin-top:24px">
      <div class="result-item"><div class="val" style="color:#E94560">${(Math.round(devine * 10) / 10)}</div><div class="lbl">Devine (kg)</div></div>
      <div class="result-item"><div class="val" style="color:#FF6B35">${(Math.round(robinson * 10) / 10)}</div><div class="lbl">Robinson (kg)</div></div>
      <div class="result-item"><div class="val" style="color:#10B981">${(Math.round(miller * 10) / 10)}</div><div class="lbl">Miller (kg)</div></div>
    </div>`;
}

function calcOneRM() {
  const peso = parseFloat(document.getElementById('rm_peso').value);
  const reps = parseInt(document.getElementById('rm_reps').value);
  if (!peso || !reps || reps < 1) return;
  const oneRM = reps === 1 ? peso : Math.round(peso * (1 + reps / 30));
  const pcts = [95, 90, 85, 80, 75, 70, 65, 60];
  let pctHtml = '';
  pcts.forEach(p => {
    pctHtml += `<div class="pct-item"><div class="w">${Math.round(oneRM * p / 100)} kg</div><div class="p">${p}%</div></div>`;
  });
  document.getElementById('rmResult').innerHTML = `
    <div class="result-box">
      <div class="result-big" style="color:#E94560">${oneRM} kg</div>
      <div class="result-label">Tu 1RM estimado</div>
    </div>
    <div class="pct-grid" style="margin-top:16px">${pctHtml}</div>`;
}

// ===== DASHBOARD =====
let historyLimit = 20;
let historyFilter = '';

async function renderDashboard() {
  const content = document.getElementById('dashboardContent');
  if (!content) return;

  if (!currentUser) {
    content.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; background: #16213E; border-radius: 12px;">
        <h3 style="color:#fff; margin-bottom: 16px;">Debes iniciar sesión</h3>
        <p style="color:var(--text3); margin-bottom: 24px;">Para acceder a tu panel y ver tu progreso necesitas iniciar sesión o registrarte.</p>
        <div style="display:flex; gap: 12px; justify-content: center; margin-bottom: 16px; flex-wrap:wrap;">
          <input type="email" id="authEmail" placeholder="Email" style="padding:10px; border-radius:8px; border:1px solid var(--border); background:var(--bg); color:#fff; width:200px;"/>
          <input type="password" id="authPass" placeholder="Contraseña" style="padding:10px; border-radius:8px; border:1px solid var(--border); background:var(--bg); color:#fff; width:200px;"/>
        </div>
        <div style="display:flex; gap: 12px; justify-content: center;">
          <button class="btn btn-primary" onclick="handleLogin()">Iniciar Sesión</button>
          <button class="btn btn-secondary" onclick="handleRegister()">Registrarse</button>
        </div>
      </div>
    `;
    return;
  }

  content.innerHTML = '<div style="text-align:center; padding: 40px; color:var(--text3);">Cargando tus datos...</div>';
  await reloadDataFromDB();

  let html = '';
  html += '<div style="text-align:right; margin-bottom: 20px; display:flex; gap:8px; justify-content:flex-end; flex-wrap:wrap;">';
  html += '<button class="btn btn-secondary btn-sm" onclick="syncLocalDataToSupabase()" style="font-size:12px;">🔄 Sincronizar local a nube</button>';
  html += '<button class="btn btn-secondary btn-sm" onclick="handleLogout()" style="color:#EF4444; border-color:rgba(239,68,68,0.3); font-size:12px;">Cerrar Sesión</button>';
  html += '</div>';

  // 1. Records Personales (Top 5 desc)
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">';
  html += '<h3 style="font-size:18px;font-weight:700;margin:0;color:#F59E0B;">🏆 Records Personales</h3>';
  html += '<button class="btn btn-secondary btn-sm" onclick="openManualRecordModal()" style="font-size:12px;padding:6px 12px;">+ Añadir</button>';
  html += '</div>';

  if (savedRecords && savedRecords.length > 0) {
    const topRecords = [...savedRecords].sort((a, b) => b.max_weight - a.max_weight).slice(0, 5);
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:32px;">';
    topRecords.forEach(r => {
      const ejNombre = r.exercises?.nombre || '#' + r.exercise_id;
      html += `<div style="background:#16213E;border:1px solid #2A2A4A;border-radius:12px;padding:16px;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="font-size:24px;">🏆</div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:13px;">${ejNombre}</div>
            <div style="color:#6B7280;font-size:11px;">${r.date || ''}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.5rem;font-weight:900;color:#F59E0B;">${r.max_weight} kg</div>
          </div>
        </div>
      </div>`;
    });
    html += '</div>';
  } else {
    html += '<div style="color:var(--text3);margin-bottom:32px;font-size:14px;">No tienes récords aún. ¡Añade tu primer récord manual o registra un progreso!</div>';
  }

  // 2. Historial de Entrenamientos
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">';
  html += '<div style="display:flex;align-items:center;gap:12px;">';
  html += '<h3 style="font-size:18px;font-weight:700;margin:0;color:#FF6B35;">📊 Historial de Entrenamientos</h3>';
  html += '<button class="btn btn-secondary btn-sm" onclick="openManualProgressModal()" style="font-size:12px;padding:6px 12px;">+ Añadir</button>';
  html += '</div>';
  if (savedProgress && savedProgress.length > 0) {
    html += `<input type="text" placeholder="Filtrar ejercicio..." value="${historyFilter}" oninput="updateHistoryFilter(this.value)" style="padding:6px 12px;border-radius:8px;background:var(--bg);border:1px solid var(--border);color:#fff;font-size:13px;width:160px;outline:none;">`;
  }
  html += '</div>';

  if (savedProgress && savedProgress.length > 0) {
    let filteredProgress = savedProgress;
    if (historyFilter.trim() !== '') {
      const q = historyFilter.toLowerCase();
      filteredProgress = savedProgress.filter(p => {
        const ejNombre = p.exercises?.nombre || '';
        return ejNombre.toLowerCase().includes(q);
      });
    }

    const limitedProgress = filteredProgress.slice(0, historyLimit);

    if (limitedProgress.length === 0) {
      html += '<div style="color:var(--text3);margin-bottom:32px;font-size:14px;">No se encontraron progresos para este filtro.</div>';
    } else {
      limitedProgress.forEach(p => {
        const ejNombre = p.exercises?.nombre || 'Ejercicio #' + p.exercise_id;
        const fecha = p.workouts?.date || '';
        html += `<div style="background:#16213E;border:1px solid #2A2A4A;border-radius:12px;padding:12px 16px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:700;font-size:14px;">${ejNombre}</div>
            <div style="color:#6B7280;font-size:12px;">${fecha}</div>
          </div>
          <div style="text-align:right;">
            <div style="color:#E94560;font-weight:700;font-size:16px;">${p.weight} kg <span style="color:#6B7280;font-size:13px;font-weight:400;">x ${p.reps}</span></div>
          </div>
        </div>`;
      });

      if (filteredProgress.length > historyLimit) {
        html += `<button class="btn btn-secondary btn-full" style="margin-bottom:32px;font-size:13px;margin-top:8px;" onclick="loadMoreHistory()">Ver más historial</button>`;
      } else {
        html += '<div style="margin-bottom:32px;"></div>';
      }
    }
  } else {
    html += '<div style="color:var(--text3);margin-bottom:32px;font-size:14px;">No tienes progresos registrados aún.</div>';
  }

  // 3. Rutinas Guardadas
  html += '<h3 style="font-size:18px;font-weight:700;margin:0 0 12px;color:#E94560;">📋 Mis Rutinas Guardadas</h3>';
  if (savedRoutines && savedRoutines.length > 0) {
    savedRoutines.forEach((r, idx) => {
      const fechaRutina = new Date(r.created_at).toLocaleDateString();
      html += `<div style="background:#16213E;border:1px solid #2A2A4A;border-radius:12px;padding:16px;margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-weight:700;font-size:14px;">${r.name}</div>
            <div style="color:#6B7280;font-size:12px;text-transform:capitalize;">${r.level} · ${r.days_per_week} días · ${fechaRutina}</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="viewSavedRoutine(${idx})" style="padding:6px 12px;font-size:12px;">Ver</button>
            <button style="padding:6px 12px;border-radius:8px;background:rgba(239,68,68,0.1);color:#EF4444;font-size:12px;font-weight:600;border:none;cursor:pointer;" onclick="deleteRoutineLocal(${idx}, ${r.id})">🗑️</button>
          </div>
        </div>
      </div>`;
    });
  } else {
    html += '<div style="color:var(--text3);margin-bottom:32px;font-size:14px;">No tienes rutinas guardadas. Ve a la Encuesta para generar una.</div>';
  }

  content.innerHTML = html;
}

function updateHistoryFilter(val) {
  historyFilter = val;
  historyLimit = 20;
  renderDashboard();
}

function loadMoreHistory() {
  historyLimit += 20;
  renderDashboard();
}

async function handleLogin() {
  const email = document.getElementById('authEmail').value;
  const pass = document.getElementById('authPass').value;
  if (!email || !pass) return showToast('Completa todos los campos', 'error');
  try {
    await loginDB(email, pass);
    showToast('Sesión iniciada');
  } catch (err) {
    console.error(err);
    showToast('Error al iniciar sesión', 'error');
  }
}

async function handleRegister() {
  const email = document.getElementById('authEmail').value;
  const pass = document.getElementById('authPass').value;
  if (!email || !pass) return showToast('Completa todos los campos', 'error');
  try {
    await registerDB(email, pass);
    showToast('Registro exitoso. Revisa tu email o inicia sesión.');
  } catch (err) {
    console.error(err);
    showToast('Error al registrarse', 'error');
  }
}

async function handleLogout() {
  try {
    await logoutDB();
    showToast('Sesión cerrada');
  } catch (err) {
    showToast('Error al cerrar sesión', 'error');
  }
}

// ===== MANUAL ENTRY MODALS =====
function getExerciseSelectHtml(id) {
  let html = `<select id="${id}" style="width:100%;margin-bottom:12px;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:#fff;font-size:14px;">`;
  [...EJERCICIOS].sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(e => {
    html += `<option value="${e.id}">${e.nombre}</option>`;
  });
  html += `</select>`;
  return html;
}

function showModal(title, bodyHtml, onConfirm) {
  let overlay = document.getElementById('globalModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'globalModalOverlay';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="modal">
      <h3 style="font-size:18px;font-weight:700;margin-bottom:16px;">${title}</h3>
      <div style="margin-bottom:20px;text-align:left;">${bodyHtml}</div>
      <div class="modal-btns">
        <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
        <button class="btn btn-primary" id="modalConfirmBtn">Guardar</button>
      </div>
    </div>
  `;

  overlay.classList.remove('hidden');
  document.getElementById('modalConfirmBtn').onclick = () => {
    if (onConfirm()) closeModal();
  };
}

function closeModal() {
  const overlay = document.getElementById('globalModalOverlay');
  if (overlay) overlay.classList.add('hidden');
}

function openManualRecordModal() {
  const body = `
    <label style="font-size:13px;color:var(--text3);margin-bottom:4px;display:block;">Ejercicio</label>
    ${getExerciseSelectHtml('manualRecordEj')}
    <label style="font-size:13px;color:var(--text3);margin-bottom:4px;display:block;">Peso Máximo (kg)</label>
    <input type="number" id="manualRecordPeso" placeholder="Ej: 80" style="width:100%;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:#fff;font-size:14px;outline:none;" min="1" step="0.5">
  `;
  showModal('🏆 Añadir Récord Personal', body, () => {
    const ejId = parseInt(document.getElementById('manualRecordEj').value);
    const peso = parseFloat(document.getElementById('manualRecordPeso').value);
    if (!ejId || isNaN(peso) || peso <= 0) {
      showToast('Ingresa un peso válido', 'error');
      return false;
    }
    
    if (!currentUser) {
      showToast('Inicia sesión para guardar tu récord', 'error');
      return true;
    }

    checkAndSavePRDB(ejId, peso).then(() => {
      showToast('Récord guardado');
      reloadDataFromDB().then(() => {
        if (currentPage === 'dashboard') renderDashboard();
      });
    }).catch(err => {
      console.error(err);
      showToast('Error al guardar récord', 'error');
    });
    
    return true;
  });
}

function openManualProgressModal() {
  const body = `
    <label style="font-size:13px;color:var(--text3);margin-bottom:4px;display:block;">Ejercicio</label>
    ${getExerciseSelectHtml('manualProgEj')}
    <div style="display:flex;gap:12px;">
      <div style="flex:1;">
        <label style="font-size:13px;color:var(--text3);margin-bottom:4px;display:block;">Peso (kg)</label>
        <input type="number" id="manualProgPeso" placeholder="Ej: 50" style="width:100%;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:#fff;font-size:14px;outline:none;" min="0" step="0.5">
      </div>
      <div style="flex:1;">
        <label style="font-size:13px;color:var(--text3);margin-bottom:4px;display:block;">Reps</label>
        <input type="number" id="manualProgReps" placeholder="Ej: 10" style="width:100%;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px;color:#fff;font-size:14px;outline:none;" min="1" step="1">
      </div>
    </div>
  `;
  showModal('📊 Añadir Progreso', body, () => {
    const ejId = parseInt(document.getElementById('manualProgEj').value);
    const peso = parseFloat(document.getElementById('manualProgPeso').value);
    const reps = parseInt(document.getElementById('manualProgReps').value);
    if (!ejId || isNaN(peso) || peso < 0 || isNaN(reps) || reps <= 0) {
      showToast('Ingresa datos válidos', 'error');
      return false;
    }
    saveProgress(ejId, peso, reps);
    return true;
  });
}

function viewSavedRoutine(idx) {
  const routine = savedRoutines[idx];
  if (!routine) return;
  // routine_exercises map to the previous generatedRoutine structure
  generatedRoutine = routine.routine_exercises ? routine.routine_exercises.map(re => ({
    id: re.exercise_id,
    nombre: re.exercises?.nombre || 'Ejercicio',
    grupo_muscular: re.exercises?.grupo_muscular || '',
    dia: re.day_number,
    series: re.sets,
    reps: re.reps,
    orden: re.order_num
  })) : [];
  generatedDias = routine.days_per_week || routine.dias;
  surveyData.objetivo = routine.goal || routine.objetivo;
  surveyData.experiencia = routine.level || routine.nivel;
  routineSelectedDay = 1;
  navigate('rutina');
}

// ===== TRAINER =====
async function renderTrainer() {
  const content = document.getElementById('trainerContent');
  if (!content) return;

  if (!currentUser) {
    content.innerHTML = '<div style="color:var(--text3);font-size:14px;">Debes iniciar sesión para ver tus rutinas como entrenador.</div>';
    return;
  }

  content.innerHTML = '<div style="color:var(--text3);">Cargando rutinas...</div>';
  await reloadDataFromDB();

  if (!savedRoutines || savedRoutines.length === 0) {
    content.innerHTML = '<div style="color:var(--text3);">No hay rutinas creadas.</div>';
    return;
  }

  let html = '<h3 style="font-size:18px;font-weight:700;margin-bottom:12px;color:#E94560;">📋 Rutinas Creadas</h3>';

  savedRoutines.forEach((r, idx) => {
    html += `<div style="background:#16213E;border:1px solid #2A2A4A;border-radius:12px;padding:16px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div>
          <div style="font-weight:700;">${r.name || r.nombre}</div>
          <div style="color:#6B7280;font-size:12px;text-transform:capitalize;">${r.goal || r.objetivo} · ${r.level || r.nivel} · ${r.days_per_week || r.dias} días</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-secondary btn-sm" onclick="viewSavedRoutine(${idx})" style="padding:6px 12px;font-size:12px;">Ver</button>
          <button style="padding:6px 12px;border-radius:8px;background:rgba(239,68,68,0.1);color:#EF4444;font-size:12px;font-weight:600;border:none;cursor:pointer;" onclick="deleteRoutineLocal(${idx}, ${r.id})">🗑️</button>
        </div>
      </div>`;

    // Show exercises grouped by day
    if (r.routine_exercises && r.routine_exercises.length > 0) {
      for (let d = 1; d <= (r.days_per_week || r.dias); d++) {
        const dayExs = r.routine_exercises.filter(e => e.day_number === d);
        if (dayExs.length > 0) {
          html += `<div style="margin-bottom:8px;"><div style="font-size:12px;font-weight:600;color:#E94560;margin-bottom:4px;">Día ${d}</div>`;
          dayExs.forEach(ej => {
            const ejName = ej.exercises?.nombre || 'Ejercicio';
            html += `<div style="background:#0A0A0A;border-radius:8px;padding:8px 12px;margin-bottom:4px;display:flex;justify-content:space-between;font-size:13px;">
              <span>${ejName}</span>
              <span style="color:#6B7280;">${ej.sets}x${ej.reps}</span>
            </div>`;
          });
          html += '</div>';
        }
      }
    }

    html += '</div>';
  });

  content.innerHTML = html;
}

async function deleteRoutineLocal(idx, dbId) {
  if (confirm('¿Eliminar esta rutina?')) {
    if (dbId) {
      try {
        await deleteRoutineDB(dbId);
        showToast('Rutina eliminada de la nube');
      } catch(err) {
        console.error(err);
        showToast('Error al eliminar rutina', 'error');
        return;
      }
    }
    
    await reloadDataFromDB();
    if (currentPage === 'dashboard') {
      renderDashboard();
    } else {
      renderTrainer();
    }
  }
}



// ===== INIT =====
navigate('home');

// ===== PWA SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('ServiceWorker registrado exitosamente con alcance:', registration.scope);
      })
      .catch(error => {
        console.error('El registro del ServiceWorker ha fallado:', error);
      });
  });
}

// ===== PWA INSTALL BUTTON LOGIC =====
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevenir que Chrome muestre el prompt automáticamente
  e.preventDefault();
  // Guardar el evento para dispararlo más tarde
  deferredPrompt = e;

  // Mostrar los botones
  const btnDesktop = document.getElementById('btnInstallDesktop');
  const btnMobile = document.getElementById('btnInstallMobile');
  if (btnDesktop) btnDesktop.classList.remove('hidden');
  if (btnMobile) btnMobile.classList.remove('hidden');
});

async function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Respuesta del usuario al prompt de instalación: ${outcome}`);
    deferredPrompt = null;

    // Ocultar botones
    const btnDesktop = document.getElementById('btnInstallDesktop');
    const btnMobile = document.getElementById('btnInstallMobile');
    if (btnDesktop) btnDesktop.classList.add('hidden');
    if (btnMobile) btnMobile.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnDesktop = document.getElementById('btnInstallDesktop');
  const btnMobile = document.getElementById('btnInstallMobile');
  if (btnDesktop) btnDesktop.addEventListener('click', installPWA);
  if (btnMobile) {
    btnMobile.addEventListener('click', (e) => {
      e.preventDefault();
      installPWA();
    });
  }
});