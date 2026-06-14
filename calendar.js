/**
 * calendar.js
 * Gestione del calendario: rendering, selezione giorni, gestione turni.
 * Dati e logica estratti dal file originale.
 */

import { getAllShifts, getShiftsByDate, joinShift, leaveShift } from "./shifts.js";
import { showToast, renderShiftsList } from "./ui.js";

// Mesi in italiano
const MONTHS_IT = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
];

// Giorni della settimana in italiano
const DAYS_IT = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];

/**
 * Ottiene il numero di giorni in un mese.
 * @param {number} year - Anno.
 * @param {number} month - Mese (0-11).
 * @returns {number} - Numero di giorni nel mese.
 */
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Ottiene il giorno della settimana del primo giorno del mese.
 * @param {number} year - Anno.
 * @param {number} month - Mese (0-11).
 * @returns {number} - Giorno della settimana (0-6, dove 0 è Domenica).
 */
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

/**
 * Formatta una data nel formato YYYY-MM-DD.
 * @param {Date} date - Data da formattare.
 * @returns {string} - Data formattata.
 */
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Renderizza il calendario per un mese specifico.
 * @param {number} year - Anno.
 * @param {number} month - Mese (0-11).
 */
export function renderCalendar(year, month) {
  const calendarContainer = document.getElementById("calendar");
  if (!calendarContainer) return;

  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const today = new Date();
  const currentDateKey = formatDate(today);

  // Intestazione del calendario
  let html = `
    <div class="calendar-header">
      <h2>${MONTHS_IT[month]} ${year}</h2>
      <div class="calendar-nav">
        <button onclick="renderCalendar(${year}, ${month - 1})" class="btn btn-nav">←</button>
        <button onclick="renderCalendar(${year}, ${month + 1})" class="btn btn-nav">→</button>
      </div>
    </div>
    <div class="calendar-weekdays">
      ${DAYS_IT.map(day => `<div class="weekday">${day}</div>`).join("")}
    </div>
    <div class="calendar-days">
  `;

  // Giorni vuoti per allineare il primo giorno del mese
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="calendar-day empty"></div>`;
  }

  // Giorni del mese
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateKey = formatDate(date);
    const isToday = dateKey === currentDateKey;
    const shifts = getShiftsByDate(dateKey);
    const hasShifts = shifts.length > 0;

    html += `
      <div 
        class="calendar-day ${isToday ? "today" : ""} ${hasShifts ? "has-shifts" : ""}"
        onclick="handleDayCellClick(this, '${dateKey}', ${hasShifts})"
        data-date="${dateKey}"
      >
        <span class="day-number">${day}</span>
        ${hasShifts ? `<span class="shifts-indicator">${shifts.length}</span>` : ""}
      </div>
    `;
  }

  html += `</div>`;
  calendarContainer.innerHTML = html;
}

/**
 * Gestisce il click su una cella del calendario.
 * @param {HTMLElement} dayElement - Elemento del giorno cliccato.
 * @param {string} dateKey - Data nel formato YYYY-MM-DD.
 * @param {boolean} hasShifts - Indica se ci sono turni per quel giorno.
 */
export function handleDayCellClick(dayElement, dateKey, hasShifts) {
  // Rimuovi la selezione dal giorno precedentemente selezionato
  const previouslySelected = document.querySelector(".calendar-day.selected-day");
  if (previouslySelected) {
    previouslySelected.classList.remove("selected-day");
  }

  // Aggiungi la selezione al giorno cliccato
  dayElement.classList.add("selected-day");

  // Mostra i turni per il giorno selezionato
  const shifts = getShiftsByDate(dateKey);
  const selectedDayShiftsContainer = document.getElementById("selectedDayShifts");
  if (selectedDayShiftsContainer) {
    selectedDayShiftsContainer.innerHTML = `
      <h3>Turni per il ${dateKey}</h3>
      ${renderShiftsList(shifts)}
    `;
  }
}

/**
 * Gestisce l'azione di unisciti/abbandona turno dal calendario.
 * @param {string} shiftId - ID del turno.
 * @param {string} action - Azione da eseguire (join/leave).
 */
export function handleCalendarShiftAction(shiftId, action) {
  if (action === "join") {
    joinShift(shiftId);
  } else {
    leaveShift(shiftId);
  }
  
  // Chiudi la modale del calendario
  const calendarShiftModal = document.getElementById("calendarShiftModal");
  if (calendarShiftModal) {
    calendarShiftModal.classList.add("hidden");
  }
  
  // Re-renderizza il calendario
  const today = new Date();
  renderCalendar(today.getFullYear(), today.getMonth());
  
  // Aggiorna le statistiche nell'header
  import("./ui.js").then((uiModule) => {
    uiModule.updateHeaderStats();
  });
}