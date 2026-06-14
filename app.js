/**
 * app.js
 * File principale dell'applicazione.
 * Coordina i moduli e gestisce l'inizializzazione e gli event listener globali.
 * Dati e logica estratti dal file originale.
 */

// Importa i moduli necessari
import { initDatabase, resetDatabase } from "./js/database.js";
import { login, logout, getCurrentSession, isAuthenticated, isAdmin, getCurrentUserEmail, getCurrentUserName } from "./js/auth.js";
import { addShift, joinShift, leaveShift, getAllShifts, getShiftsByDate } from "./js/shifts.js";
import { addNotice, getAllNotices } from "./js/notices.js";
import { addDiary, getAllDiaries } from "./js/diaries.js";
import { showToast, updateHeaderStats, renderShiftsList, renderNoticesList, renderDiariesList, showModal, hideModal } from "./js/ui.js";
import { renderCalendar, handleDayCellClick, formatDate } from "./js/calendar.js";

// --- Inizializzazione dell'applicazione ---

/**
 * Inizializza l'applicazione.
 */
function initApp() {
  // Inizializza il database
  initDatabase();
  
  // Ottieni la sessione corrente
  const session = getCurrentSession();
  
  if (session) {
    // Utente autenticato: mostra l'interfaccia principale
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("mainApp").classList.remove("hidden");
    
    // Renderizza il calendario per il mese corrente
    const today = new Date();
    renderCalendar(today.getFullYear(), today.getMonth());
    
    // Aggiorna le statistiche nell'header
    updateHeaderStats();
    
    // Renderizza le liste iniziali
    renderNotices();
    renderDiaries();
    
  } else {
    // Utente non autenticato: mostra la schermata di login
    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("mainApp").classList.add("hidden");
  }
  
  // Imposta gli event listener
  setupEventListeners();
}

// --- Setup degli event listener ---

function setupEventListeners() {
  // Event listener per il login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const user = login(email, password);
      if (user) {
        initApp();
      } else {
        showToast("Credenziali non valide!", "error");
      }
    });
  }
  
  // Event listener per il logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }
  
  // Event listener per il reset del database
  const resetDbBtn = document.getElementById("resetDbBtn");
  if (resetDbBtn) {
    resetDbBtn.addEventListener("click", () => {
      if (confirm("Sei sicuro di voler resettare il database? Verranno eliminati tutti i dati!")) {
        resetDatabase();
        showToast("Database resettato! Ricarico l'applicazione...", "info");
        setTimeout(() => window.location.reload(), 1500);
      }
    });
  }
  
  // Event listener per mostrare la modale di aggiunta turno
  const addShiftBtn = document.getElementById("addShiftBtn");
  if (addShiftBtn) {
    addShiftBtn.addEventListener("click", () => {
      showModal("addShiftModal");
    });
  }
  
  // Event listener per chiudere la modale di aggiunta turno
  const closeAddShiftModalBtn = document.getElementById("closeAddShiftModalBtn");
  if (closeAddShiftModalBtn) {
    closeAddShiftModalBtn.addEventListener("click", () => {
      hideModal("addShiftModal");
    });
  }
  
  // Event listener per il form di aggiunta turno
  const addShiftForm = document.getElementById("addShiftForm");
  if (addShiftForm) {
    addShiftForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("shiftTitle").value;
      const date = document.getElementById("shiftDate").value;
      const leader = getCurrentUserEmail();
      
      if (title && date) {
        addShift({ title, date, members: [leader], leader });
        hideModal("addShiftModal");
        addShiftForm.reset();
        showToast("Turno aggiunto con successo!", "success");
        renderCalendar(new Date().getFullYear(), new Date().getMonth());
        updateHeaderStats();
      } else {
        showToast("Compila tutti i campi!", "error");
      }
    });
  }
  
  // Event listener per mostrare la modale di aggiunta avviso
  const addNoticeBtn = document.getElementById("addNoticeBtn");
  if (addNoticeBtn) {
    addNoticeBtn.addEventListener("click", () => {
      showModal("addNoticeModal");
    });
  }
  
  // Event listener per chiudere la modale di aggiunta avviso
  const closeAddNoticeModalBtn = document.getElementById("closeAddNoticeModalBtn");
  if (closeAddNoticeModalBtn) {
    closeAddNoticeModalBtn.addEventListener("click", () => {
      hideModal("addNoticeModal");
    });
  }
  
  // Event listener per il form di aggiunta avviso
  const addNoticeForm = document.getElementById("addNoticeForm");
  if (addNoticeForm) {
    addNoticeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("noticeTitle").value;
      const content = document.getElementById("noticeContent").value;
      
      if (title && content) {
        addNotice({ title, content });
        hideModal("addNoticeModal");
        addNoticeForm.reset();
        showToast("Avviso aggiunto con successo!", "success");
        renderNotices();
        updateHeaderStats();
      } else {
        showToast("Compila tutti i campi!", "error");
      }
    });
  }
  
  // Event listener per mostrare la modale di aggiunta diario
  const addDiaryBtn = document.getElementById("addDiaryBtn");
  if (addDiaryBtn) {
    addDiaryBtn.addEventListener("click", () => {
      showModal("addDiaryModal");
    });
  }
  
  // Event listener per chiudere la modale di aggiunta diario
  const closeAddDiaryModalBtn = document.getElementById("closeAddDiaryModalBtn");
  if (closeAddDiaryModalBtn) {
    closeAddDiaryModalBtn.addEventListener("click", () => {
      hideModal("addDiaryModal");
    });
  }
  
  // Event listener per il form di aggiunta diario
  const addDiaryForm = document.getElementById("addDiaryForm");
  if (addDiaryForm) {
    addDiaryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("diaryTitle").value;
      const content = document.getElementById("diaryContent").value;
      
      if (title && content) {
        addDiary({ title, content });
        hideModal("addDiaryModal");
        addDiaryForm.reset();
        showToast("Diario aggiunto con successo!", "success");
        renderDiaries();
        updateHeaderStats();
      } else {
        showToast("Compila tutti i campi!", "error");
      }
    });
  }
}

// --- Funzioni di rendering ---

/**
 * Renderizza la lista degli avvisi.
 */
function renderNotices() {
  const noticesContainer = document.getElementById("noticesContainer");
  if (noticesContainer) {
    const notices = getAllNotices();
    noticesContainer.innerHTML = renderNoticesList(notices);
  }
}

/**
 * Renderizza la lista dei diari.
 */
function renderDiaries() {
  const diariesContainer = document.getElementById("diariesContainer");
  if (diariesContainer) {
    const diaries = getAllDiaries();
    diariesContainer.innerHTML = renderDiariesList(diaries);
  }
}

// --- Funzioni globali per l'HTML (es. onclick) ---

// Espone le funzioni globali per l'HTML
window.joinShift = function(shiftId) {
  joinShift(shiftId);
  showToast("Ti sei unito al turno!", "success");
  renderCalendar(new Date().getFullYear(), new Date().getMonth());
  updateHeaderStats();
};

window.leaveShift = function(shiftId) {
  leaveShift(shiftId);
  showToast("Hai abbandonato il turno!", "success");
  renderCalendar(new Date().getFullYear(), new Date().getMonth());
  updateHeaderStats();
};

window.handleDayCellClick = function(dayElement, dateKey, hasShifts) {
  handleDayCellClick(dayElement, dateKey, hasShifts);
};

// Avvia l'applicazione quando il DOM è caricato
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}