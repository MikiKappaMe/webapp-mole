/**
 * diaries.js
 * Gestione dei diari: aggiunta, modifica, eliminazione.
 * Dati e logica estratti dal file originale.
 */

import { loadDatabase, saveDatabase, getCollection, addToCollection, updateInCollection, removeFromCollection } from "./database.js";
import { getCurrentUserEmail, getCurrentUserName } from "./auth.js";

/**
 * Aggiunge un diario.
 * @param {object} diary - Oggetto diario da aggiungere.
 * @returns {object} - Il diario aggiunto.
 */
export function addDiary(diary) {
  const db = loadDatabase();
  diary.id = Date.now().toString();
  diary.author = diary.author || getCurrentUserName();
  diary.email = diary.email || getCurrentUserEmail();
  diary.date = diary.date || new Date().toISOString().split('T')[0];
  db.diaries.push(diary);
  saveDatabase(db);
  return diary;
}

/**
 * Elimina un diario.
 * @param {string} diaryId - ID del diario da eliminare.
 * @returns {boolean} - True se il diario è stato eliminato, altrimenti false.
 */
export function deleteDiary(diaryId) {
  return removeFromCollection("diaries", diaryId);
}

/**
 * Aggiorna un diario.
 * @param {string} diaryId - ID del diario da aggiornare.
 * @param {object} updates - Oggetto con le proprietà da aggiornare.
 * @returns {object|null} - Il diario aggiornato o null se non trovato.
 */
export function updateDiary(diaryId, updates) {
  return updateInCollection("diaries", diaryId, updates);
}

/**
 * Ottiene tutti i diari.
 * @returns {Array} - Array di diari.
 */
export function getAllDiaries() {
  return getCollection("diaries");
}

/**
 * Ottiene un diario specifico.
 * @param {string} diaryId - ID del diario.
 * @returns {object|null} - Il diario trovato o null se non esiste.
 */
export function getDiary(diaryId) {
  const diaries = getAllDiaries();
  return diaries.find(diary => diary.id === diaryId) || null;
}

/**
 * Ottiene i diari scritti dall'utente corrente.
 * @returns {Array} - Array di diari dell'utente corrente.
 */
export function getUserDiaries() {
  const userEmail = getCurrentUserEmail();
  const diaries = getAllDiaries();
  return diaries.filter(diary => diary.email === userEmail);
}