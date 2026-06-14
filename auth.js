/**
 * auth.js
 * Gestione autenticazione: login, logout, sessione e validazione credenziali.
 * Dati e logica estratti dal file originale.
 */

// Utenti predefiniti (dati originali)
const DEFAULT_USERS = [
  { email: "michele.coppola@mole.it", name: "Michele Coppola", password: "Michele2024!", role: "admin" },
  { email: "volontario1@mole.it", name: "Volontario Uno", password: "Volontario1!", role: "member" },
  { email: "volontario2@mole.it", name: "Volontario Due", password: "Volontario2!", role: "member" },
  { email: "test@mole.it", name: "Test User", password: "Test123!", role: "member" }
];

// Chiave per la sessione in localStorage
const SESSION_KEY = "mole_sorriso_session";

/**
 * Effettua il login con email e password.
 * @param {string} email - Email dell'utente.
 * @param {string} password - Password dell'utente.
 * @returns {object|null} - Oggetto utente se le credenziali sono valide, altrimenti null.
 */
export function login(email, password) {
  const user = DEFAULT_USERS.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return user;
  }
  return null;
}

/**
 * Effettua il logout rimuovendo la sessione.
 */
export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.reload();
}

/**
 * Ottiene la sessione corrente.
 * @returns {object|null} - Oggetto utente se la sessione è attiva, altrimenti null.
 */
export function getCurrentSession() {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
}

/**
 * Verifica se l'utente è autenticato.
 * @returns {boolean} - True se l'utente è autenticato, altrimenti false.
 */
export function isAuthenticated() {
  return getCurrentSession() !== null;
}

/**
 * Verifica se l'utente corrente è un admin.
 * @returns {boolean} - True se l'utente è admin, altrimenti false.
 */
export function isAdmin() {
  const session = getCurrentSession();
  return session ? session.role === "admin" : false;
}

/**
 * Ottiene l'email dell'utente corrente.
 * @returns {string|null} - Email dell'utente se autenticato, altrimenti null.
 */
export function getCurrentUserEmail() {
  const session = getCurrentSession();
  return session ? session.email : null;
}

/**
 * Ottiene il nome dell'utente corrente.
 * @returns {string|null} - Nome dell'utente se autenticato, altrimenti null.
 */
export function getCurrentUserName() {
  const session = getCurrentSession();
  return session ? session.name : null;
}

/**
 * Ottiene il ruolo dell'utente corrente.
 * @returns {string|null} - Ruolo dell'utente se autenticato, altrimenti null.
 */
export function getCurrentUserRole() {
  const session = getCurrentSession();
  return session ? session.role : null;
}