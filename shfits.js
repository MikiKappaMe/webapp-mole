/**
 * shifts.js
 * Gestione dei turni: aggiunta, modifica, eliminazione, unisciti/abbandona.
 * Dati e logica estratti dal file originale.
 */

import { loadDatabase, saveDatabase, getCollection, addToCollection, updateInCollection, removeFromCollection } from "./database.js";
import { getCurrentUserEmail, getCurrentUserName } from "./auth.js";

/**
 * Aggiunge un turno.
 * @param {object} shift - Oggetto turno da aggiungere.
 * @returns {object} - Il turno aggiunto.
 */
export function addShift(shift) {
  const db = loadDatabase();
  shift.id = Date.now().toString();
  shift.members = shift.members || [];
  shift.leader = shift.leader || getCurrentUserEmail();
  db.shifts.push(shift);
  saveDatabase(db);
  return shift;
}

/**
 * Unisce un utente a un turno.
 * @param {string} shiftId - ID del turno.
 * @returns {boolean} - True se l'utente si è unito, altrimenti false.
 */
export function joinShift(shiftId) {
  const db = loadDatabase();
  const shift = db.shifts.find(s => s.id === shiftId);
  const userEmail = getCurrentUserEmail();
  
  if (shift && userEmail && !shift.members.includes(userEmail)) {
    shift.members.push(userEmail);
    saveDatabase(db);
    return true;
  }
  return false;
}

/**
 * Rimuove un utente da un turno.
 * @param {string} shiftId - ID del turno.
 * @returns {boolean} - True se l'utente ha abbandonato il turno, altrimenti false.
 */
export function leaveShift(shiftId) {
  const db = loadDatabase();
  const shift = db.shifts.find(s => s.id === shiftId);
  const userEmail = getCurrentUserEmail();
  
  if (shift && userEmail) {
    shift.members = shift.members.filter(email => email !== userEmail);
    // Se il leader abbandona il turno, assegna un nuovo leader (il primo membro rimanente)
    if (shift.leader === userEmail && shift.members.length > 0) {
      shift.leader = shift.members[0];
    }
    saveDatabase(db);
    return true;
  }
  return false;
}

/**
 * Elimina un turno.
 * @param {string} shiftId - ID del turno da eliminare.
 * @returns {boolean} - True se il turno è stato eliminato, altrimenti false.
 */
export function deleteShift(shiftId) {
  return removeFromCollection("shifts", shiftId);
}

/**
 * Aggiorna un turno.
 * @param {string} shiftId - ID del turno da aggiornare.
 * @param {object} updates - Oggetto con le proprietà da aggiornare.
 * @returns {object|null} - Il turno aggiornato o null se non trovato.
 */
export function updateShift(shiftId, updates) {
  return updateInCollection("shifts", shiftId, updates);
}

/**
 * Ottiene tutti i turni.
 * @returns {Array} - Array di turni.
 */
export function getAllShifts() {
  return getCollection("shifts");
}

/**
 * Ottiene un turno specifico.
 * @param {string} shiftId - ID del turno.
 * @returns {object|null} - Il turno trovato o null se non esiste.
 */
export function getShift(shiftId) {
  const shifts = getAllShifts();
  return shifts.find(shift => shift.id === shiftId) || null;
}

/**
 * Ottiene i turni a cui l'utente corrente è iscritto.
 * @returns {Array} - Array di turni a cui l'utente è iscritto.
 */
export function getUserShifts() {
  const userEmail = getCurrentUserEmail();
  const shifts = getAllShifts();
  return shifts.filter(shift => shift.members.includes(userEmail));
}

/**
 * Ottiene i turni in una data specifica.
 * @param {string} date - Data nel formato YYYY-MM-DD.
 * @returns {Array} - Array di turni nella data specificata.
 */
export function getShiftsByDate(date) {
  const shifts = getAllShifts();
  return shifts.filter(shift => shift.date === date);
}