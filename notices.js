/**
 * notices.js
 * Gestione degli avvisi: aggiunta, modifica, eliminazione.
 * Dati e logica estratti dal file originale.
 */

import { loadDatabase, saveDatabase, getCollection, addToCollection, updateInCollection, removeFromCollection } from "./database.js";
import { getCurrentUserEmail, getCurrentUserName } from "./auth.js";

/**
 * Aggiunge un avviso.
 * @param {object} notice - Oggetto avviso da aggiungere.
 * @returns {object} - L'avviso aggiunto.
 */
export function addNotice(notice) {
  const db = loadDatabase();
  notice.id = Date.now().toString();
  notice.author = notice.author || getCurrentUserName();
  notice.date = notice.date || new Date().toISOString().split('T')[0];
  db.notices.push(notice);
  saveDatabase(db);
  return notice;
}

/**
 * Elimina un avviso.
 * @param {string} noticeId - ID dell'avviso da eliminare.
 * @returns {boolean} - True se l'avviso è stato eliminato, altrimenti false.
 */
export function deleteNotice(noticeId) {
  return removeFromCollection("notices", noticeId);
}

/**
 * Aggiorna un avviso.
 * @param {string} noticeId - ID dell'avviso da aggiornare.
 * @param {object} updates - Oggetto con le proprietà da aggiornare.
 * @returns {object|null} - L'avviso aggiornato o null se non trovato.
 */
export function updateNotice(noticeId, updates) {
  return updateInCollection("notices", noticeId, updates);
}

/**
 * Ottiene tutti gli avvisi.
 * @returns {Array} - Array di avvisi.
 */
export function getAllNotices() {
  return getCollection("notices");
}

/**
 * Ottiene un avviso specifico.
 * @param {string} noticeId - ID dell'avviso.
 * @returns {object|null} - L'avviso trovato o null se non esiste.
 */
export function getNotice(noticeId) {
  const notices = getAllNotices();
  return notices.find(notice => notice.id === noticeId) || null;
}