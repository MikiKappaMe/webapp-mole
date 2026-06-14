/**
 * database.js
 * Gestione del database locale tramite localStorage.
 * Dati e logica estratti dal file originale.
 */

// Chiave per il database in localStorage
const DB_KEY = "mole_sorriso_db";

/**
 * Struttura iniziale del database.
 */
const INITIAL_DB = {
  shifts: [],
  notices: [],
  diaries: [],
  users: []
};

/**
 * Inizializza il database se non esiste.
 * @returns {object} - Il database inizializzato.
 */
export function initDatabase() {
  if (!localStorage.getItem(DB_KEY)) {
    localStorage.setItem(DB_KEY, JSON.stringify(INITIAL_DB));
  }
  return loadDatabase();
}

/**
 * Salva il database in localStorage.
 * @param {object} db - Oggetto database da salvare.
 */
export function saveDatabase(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

/**
 * Carica il database da localStorage.
 * @returns {object} - Il database caricato o la struttura iniziale se non esiste.
 */
export function loadDatabase() {
  const db = localStorage.getItem(DB_KEY);
  return db ? JSON.parse(db) : { ...INITIAL_DB };
}

/**
 * Resetta il database allo stato iniziale.
 */
export function resetDatabase() {
  localStorage.removeItem(DB_KEY);
  localStorage.removeItem("mole_sorriso_session");
}

/**
 * Aggiunge un elemento a una collezione del database.
 * @param {string} collection - Nome della collezione (es. 'shifts', 'notices').
 * @param {object} item - Elemento da aggiungere.
 * @returns {object} - L'elemento aggiunto con l'ID generato.
 */
export function addToCollection(collection, item) {
  const db = loadDatabase();
  item.id = Date.now().toString(); // Genera un ID univoco basato sul timestamp
  db[collection].push(item);
  saveDatabase(db);
  return item;
}

/**
 * Aggiorna un elemento in una collezione del database.
 * @param {string} collection - Nome della collezione.
 * @param {string} id - ID dell'elemento da aggiornare.
 * @param {object} updates - Oggetto con le proprietà da aggiornare.
 * @returns {object|null} - L'elemento aggiornato o null se non trovato.
 */
export function updateInCollection(collection, id, updates) {
  const db = loadDatabase();
  const index = db[collection].findIndex((item) => item.id === id);
  if (index !== -1) {
    db[collection][index] = { ...db[collection][index], ...updates };
    saveDatabase(db);
    return db[collection][index];
  }
  return null;
}

/**
 * Rimuove un elemento da una collezione del database.
 * @param {string} collection - Nome della collezione.
 * @param {string} id - ID dell'elemento da rimuovere.
 * @returns {boolean} - True se l'elemento è stato rimosso, altrimenti false.
 */
export function removeFromCollection(collection, id) {
  const db = loadDatabase();
  const initialLength = db[collection].length;
  db[collection] = db[collection].filter((item) => item.id !== id);
  if (db[collection].length < initialLength) {
    saveDatabase(db);
    return true;
  }
  return false;
}

/**
 * Ottiene tutti gli elementi di una collezione.
 * @param {string} collection - Nome della collezione.
 * @returns {Array} - Array di elementi della collezione.
 */
export function getCollection(collection) {
  return loadDatabase()[collection] || [];
}

/**
 * Ottiene un elemento specifico da una collezione.
 * @param {string} collection - Nome della collezione.
 * @param {string} id - ID dell'elemento da ottenere.
 * @returns {object|null} - L'elemento trovato o null se non esiste.
 */
export function getFromCollection(collection, id) {
  const items = getCollection(collection);
  return items.find((item) => item.id === id) || null;
}