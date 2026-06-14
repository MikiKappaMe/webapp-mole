/**
 * ui.js
 * Gestione dell'interfaccia utente: toast, modali, rendering.
 * Dati e logica estratti dal file originale.
 */

import { getCurrentUserEmail, getCurrentUserName, isAdmin } from "./auth.js";
import { getAllShifts, getAllNotices, getAllDiaries } from "./shifts.js";

/**
 * Mostra un messaggio toast.
 * @param {string} message - Messaggio da mostrare.
 * @param {string} type - Tipo di toast (success, error, info).
 */
export function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toastContainer");
  if (!toastContainer) return;
  
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/**
 * Mostra una modale.
 * @param {string} modalId - ID della modale da mostrare.
 */
export function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
  }
}

/**
 * Nasconde una modale.
 * @param {string} modalId - ID della modale da nascondere.
 */
export function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
  }
}

/**
 * Aggiorna le statistiche nell'header.
 */
export function updateHeaderStats() {
  const shiftsCount = getAllShifts().length;
  const noticesCount = getAllNotices().length;
  const diariesCount = getAllDiaries().length;
  
  const headerShiftsCount = document.getElementById("headerShiftsCount");
  const headerNoticesCount = document.getElementById("headerNoticesCount");
  const headerDiariesCount = document.getElementById("headerDiariesCount");
  
  if (headerShiftsCount) headerShiftsCount.textContent = shiftsCount;
  if (headerNoticesCount) headerNoticesCount.textContent = noticesCount;
  if (headerDiariesCount) headerDiariesCount.textContent = diariesCount;
}

/**
 * Renderizza la lista dei membri di un turno.
 * @param {Array} members - Array di email dei membri.
 * @returns {string} - HTML per la lista dei membri.
 */
export function renderMembersList(members) {
  if (!members || members.length === 0) {
    return "<p>Nessun membro iscritto</p>";
  }
  
  return members
    .map((email) => {
      const userName = email.split("@")[0].replace(".", " ").replace(/\b\w/g, (l) => l.toUpperCase());
      return `<div class="member-tag">${userName}</div>`;
    })
    .join("");
}

/**
 * Renderizza il badge del leader di un turno.
 * @param {string} leaderEmail - Email del leader.
 * @returns {string} - HTML per il badge del leader.
 */
export function renderLeaderBadge(leaderEmail) {
  if (!leaderEmail) return "";
  const leaderName = leaderEmail.split("@")[0].replace(".", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return `<div class="leader-badge">Leader: ${leaderName}</div>`;
}

/**
 * Renderizza la lista dei turni per il calendario.
 * @param {Array} shifts - Array di turni.
 * @returns {string} - HTML per la lista dei turni.
 */
export function renderShiftsList(shifts) {
  if (!shifts || shifts.length === 0) {
    return "<p>Nessun turno per questo giorno</p>";
  }
  
  return shifts
    .map((shift) => `
      <div class="shift-card" data-shift-id="${shift.id}">
        <h4>${shift.title}</h4>
        <p><strong>Data:</strong> ${shift.date}</p>
        <p><strong>Leader:</strong> ${shift.leader ? shift.leader.split("@")[0] : "Nessuno"}</p>
        <p><strong>Membri:</strong> ${shift.members.length}</p>
        <div class="shift-actions">
          <button onclick="joinShift('${shift.id}')" class="btn btn-primary">Unisciti</button>
          <button onclick="leaveShift('${shift.id}')" class="btn btn-secondary">Abandona</button>
        </div>
      </div>
    `)
    .join("");
}

/**
 * Renderizza la lista degli avvisi.
 * @param {Array} notices - Array di avvisi.
 * @returns {string} - HTML per la lista degli avvisi.
 */
export function renderNoticesList(notices) {
  if (!notices || notices.length === 0) {
    return "<p>Nessun avviso disponibile</p>";
  }
  
  return notices
    .map((notice) => `
      <div class="notice-card">
        <h4>${notice.title}</h4>
        <p><strong>Data:</strong> ${notice.date}</p>
        <p><strong>Autore:</strong> ${notice.author || "Sconosciuto"}</p>
        <p>${notice.content}</p>
      </div>
    `)
    .join("");
}

/**
 * Renderizza la lista dei diari.
 * @param {Array} diaries - Array di diari.
 * @returns {string} - HTML per la lista dei diari.
 */
export function renderDiariesList(diaries) {
  if (!diaries || diaries.length === 0) {
    return "<p>Nessun diario disponibile</p>";
  }
  
  return diaries
    .map((diary) => `
      <div class="diary-card">
        <h4>${diary.title}</h4>
        <p><strong>Data:</strong> ${diary.date}</p>
        <p><strong>Autore:</strong> ${diary.author || "Sconosciuto"}</p>
        <p>${diary.content}</p>
      </div>
    `)
    .join("");
}