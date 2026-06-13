// INITIAL MOCK DATABASE (Loaded if localStorage is empty)
const INITIAL_DB = {
    structures: [
        { id: "moncalieri", name: "Ospedale di Moncalieri", ward: "Pediatria", day: "Ogni Sabato", time: "15:00 - 18:00", icon: "🧸" },
        { id: "rivoli", name: "Ospedale di Rivoli", ward: "Pediatria & Medicina", day: "Ogni Sabato (Pediatria) / 2° Sabato (Medicina)", time: "15:00 - 18:00", icon: "🏥" },
        { id: "dongnocchi", name: "Fondazione Don Gnocchi", ward: "Gravi Cerebrolesioni & Ortopedia", day: "Ogni Domenica", time: "15:00 - 18:30", icon: "♿" },
        { id: "carmagnola", name: "Ospedale di Carmagnola", ward: "DH Oncologico & Chirurgia", day: "1° Mercoledì del Mese", time: "10:00 - 12:00", icon: "🎸" },
        { id: "sermig", name: "Sermig - Arsenale della Pace", ward: "Accoglienza Mamme & Bambini", day: "Ogni Sabato", time: "16:30 - 18:30", icon: "☮️" },
        { id: "ugicasa", name: "Casa UGI", ward: "Sostegno Oncologia Pediatrica", day: "Due Domeniche al Mese", time: "15:00 - 18:30", icon: "🏠" }
    ],
    members: [
        { id: "pimpa", email: "pimpa@mole.it", password: "password123", claunName: "Claun Pimpa", realName: "Francesca Rossi", role: "volunteer", entryYear: "2018", specialty: "Sculture di palloncini", bio: "In tasca ho sempre un naso rosso di riserva e una battuta pronta!", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200", trainings: [true, true, true, true], isNew: false, isSuspended: false, phone: "3331234567", wantsShiftLeader: true },
        { id: "gelsomino", email: "gelsomino@mole.it", password: "password123", claunName: "Claun Gelsomino", realName: "Marco Bianchi", role: "volunteer", entryYear: "2021", specialty: "Magia comica and micromagia", bio: "Faccio sparire le preoccupazioni e apparire sorrisi giganti!", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200", trainings: [true, false, true, false], isNew: false, isSuspended: false, phone: "3347654321", wantsShiftLeader: false }, // 2/4 -> Starts in Warning
        { id: "tiramisu", email: "tiramisu@mole.it", password: "password123", claunName: "Claun Tiramisù", realName: "Valentina Verdi", role: "volunteer", entryYear: "2019", specialty: "Gag musicali con ukulele", bio: "La musica è la mia medicina, e le mie note stonate curano ogni tristezza.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200", trainings: [true, true, false, true], isNew: false, isSuspended: false, phone: "3351122334", wantsShiftLeader: false }, // 3/4 -> Starts Eligible
        { id: "birba", email: "birba@mole.it", password: "password123", claunName: "Claun Birba", realName: "Andrea Neri", role: "volunteer", entryYear: "2023", specialty: "Clownerie classica e slapstick", bio: "Faccio inciampi spettacolari per far ridere i bambini e i papà!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", trainings: [true, false, false, false], isNew: true, isSuspended: false, phone: "3389988776", wantsShiftLeader: false }, // 1/4 -> Starts Blocked
        { id: "direttivo", email: "direttivo@mole.it", password: "password123", claunName: "Claun SuperPippo", realName: "Michele Russo", role: "admin", entryYear: "2012", specialty: "Pianificazione sorrisi e bolle giganti", bio: "Dal 2012 nel Direttivo per far sì che la Mole del Sorriso non si fermi mai!", avatar: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=200&h=200", trainings: [true, true, true, true], isNew: false, isSuspended: false, phone: "3394455667", wantsShiftLeader: true }
    ],
    shifts: [
        { id: "s1", structureId: "moncalieri", date: "Sabato 13 Giugno 2026", time: "15:00 - 18:00", maxSpots: 4, maxExperiencedSpots: 3, maxNewSpots: 1, members: ["pimpa", "gelsomino"], shiftLeaderId: "pimpa", isValidated: false },
        { id: "s2", structureId: "rivoli", date: "Sabato 13 Giugno 2026", time: "15:00 - 18:00", maxSpots: 4, maxExperiencedSpots: 3, maxNewSpots: 1, members: ["tiramisu"], shiftLeaderId: "", isValidated: false },
        { id: "s3", structureId: "dongnocchi", date: "Domenica 14 Giugno 2026", time: "15:00 - 18:30", maxSpots: 3, maxExperiencedSpots: 2, maxNewSpots: 1, members: ["birba", "direttivo"], shiftLeaderId: "direttivo", isValidated: false },
        { id: "s4", structureId: "sermig", date: "Sabato 20 Giugno 2026", time: "16:30 - 18:30", maxSpots: 4, maxExperiencedSpots: 3, maxNewSpots: 1, members: [], shiftLeaderId: "", isValidated: false },
        { id: "s5", structureId: "ugicasa", date: "Domenica 21 Giugno 2026", time: "15:00 - 18:30", maxSpots: 2, maxExperiencedSpots: 1, maxNewSpots: 1, members: ["pimpa"], shiftLeaderId: "", isValidated: false },
        { id: "s6", structureId: "carmagnola", date: "Mercoledì 01 Luglio 2026", time: "10:00 - 12:00", maxSpots: 3, maxExperiencedSpots: 2, maxNewSpots: 1, members: ["tiramisu"], shiftLeaderId: "", isValidated: false }
    ],
    announcements: [
        { id: "a1", title: "Corso di Aggiornamento Trucco Claun", date: "08 Giugno 2026", body: "Domenica 28 Giugno si terrà in sede un workshop intensivo sul trucco teatrale ed espressivo. Prenotazione obbligatoria via app o contattando Claun Birba.", isUrgent: false, category: "allenamenti" },
        { id: "a2", title: "Servizio Straordinario Estate 🌞", date: "05 Giugno 2026", body: "Abbiamo ricevuto una richiesta per incrementare i turni infrasettimanali nei reparti pediatrici a Luglio. Chi ha disponibilità lo comunichi al Direttivo il prima possibile!", isUrgent: true, category: "comunicazioni" }
    ],
    history: [
        // pimpa (member since 2018) - total 20 services
        { id: "h_1", memberId: "pimpa", structureId: "moncalieri", date: "Sabato 11 Gennaio 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_2", memberId: "pimpa", structureId: "moncalieri", date: "Sabato 08 Febbraio 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_3", memberId: "pimpa", structureId: "rivoli", date: "Sabato 15 Marzo 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_4", memberId: "pimpa", structureId: "dongnocchi", date: "Domenica 13 Aprile 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_5", memberId: "pimpa", structureId: "ugicasa", date: "Domenica 11 Maggio 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_6", memberId: "pimpa", structureId: "sermig", date: "Sabato 21 Giugno 2025", time: "16:30 - 18:30", year: 2025 },
        { id: "h_7", memberId: "pimpa", structureId: "carmagnola", date: "Mercoledì 02 Luglio 2025", time: "10:00 - 12:00", year: 2025 },
        { id: "h_8", memberId: "pimpa", structureId: "moncalieri", date: "Sabato 13 Settembre 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_9", memberId: "pimpa", structureId: "rivoli", date: "Sabato 11 Ottobre 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_10", memberId: "pimpa", structureId: "dongnocchi", date: "Domenica 09 Novembre 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_11", memberId: "pimpa", structureId: "ugicasa", date: "Domenica 14 Dicembre 2025", time: "15:00 - 18:30", year: 2025 },
        // 2026
        { id: "h_12", memberId: "pimpa", structureId: "moncalieri", date: "Sabato 10 Gennaio 2026", time: "15:00 - 18:00", year: 2026 },
        { id: "h_13", memberId: "pimpa", structureId: "rivoli", date: "Sabato 14 Febbraio 2026", time: "15:00 - 18:00", year: 2026 },
        { id: "h_14", memberId: "pimpa", structureId: "dongnocchi", date: "Domenica 15 Marzo 2026", time: "15:00 - 18:30", year: 2026 },
        { id: "h_15", memberId: "pimpa", structureId: "ugicasa", date: "Domenica 12 Aprile 2026", time: "15:00 - 18:30", year: 2026 },
        { id: "h_16", memberId: "pimpa", structureId: "sermig", date: "Sabato 09 Maggio 2026", time: "16:30 - 18:30", year: 2026 },
        // Pre-2025
        { id: "h_17", memberId: "pimpa", structureId: "moncalieri", date: "Sabato 14 Ottobre 2023", time: "15:00 - 18:00", year: 2023 },
        { id: "h_18", memberId: "pimpa", structureId: "rivoli", date: "Sabato 11 Novembre 2023", time: "15:00 - 18:00", year: 2023 },
        { id: "h_19", memberId: "pimpa", structureId: "dongnocchi", date: "Domenica 10 Dicembre 2023", time: "15:00 - 18:30", year: 2023 },
        { id: "h_20", memberId: "pimpa", structureId: "ugicasa", date: "Domenica 15 Maggio 2022", time: "15:00 - 18:30", year: 2022 },

        // gelsomino (member since 2021) - total 14 services
        { id: "h_21", memberId: "gelsomino", structureId: "rivoli", date: "Sabato 18 Gennaio 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_22", memberId: "gelsomino", structureId: "dongnocchi", date: "Domenica 16 Febbraio 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_23", memberId: "gelsomino", structureId: "sermig", date: "Sabato 22 Marzo 2025", time: "16:30 - 18:30", year: 2025 },
        { id: "h_24", memberId: "gelsomino", structureId: "ugicasa", date: "Domenica 20 Aprile 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_25", memberId: "gelsomino", structureId: "moncalieri", date: "Sabato 17 Maggio 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_26", memberId: "gelsomino", structureId: "rivoli", date: "Sabato 14 Giugno 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_27", memberId: "gelsomino", structureId: "dongnocchi", date: "Domenica 20 Luglio 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_28", memberId: "gelsomino", structureId: "sermig", date: "Sabato 20 Settembre 2025", time: "16:30 - 18:30", year: 2025 },
        { id: "h_29", memberId: "gelsomino", structureId: "ugicasa", date: "Domenica 19 Ottobre 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_30", memberId: "gelsomino", structureId: "moncalieri", date: "Sabato 22 Novembre 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_31", memberId: "gelsomino", structureId: "rivoli", date: "Sabato 20 Dicembre 2025", time: "15:00 - 18:00", year: 2025 },
        // 2026
        { id: "h_32", memberId: "gelsomino", structureId: "dongnocchi", date: "Domenica 18 Gennaio 2026", time: "15:00 - 18:30", year: 2026 },
        { id: "h_33", memberId: "gelsomino", structureId: "sermig", date: "Sabato 21 Febbraio 2026", time: "16:30 - 18:30", year: 2026 },
        { id: "h_34", memberId: "gelsomino", structureId: "ugicasa", date: "Domenica 15 Marzo 2026", time: "15:00 - 18:30", year: 2026 },

        // tiramisu (member since 2019) - total 12 services
        { id: "h_35", memberId: "tiramisu", structureId: "ugicasa", date: "Domenica 12 Gennaio 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_36", memberId: "tiramisu", structureId: "sermig", date: "Sabato 15 Febbraio 2025", time: "16:30 - 18:30", year: 2025 },
        { id: "h_37", memberId: "tiramisu", structureId: "carmagnola", date: "Mercoledì 05 Marzo 2025", time: "10:00 - 12:00", year: 2025 },
        { id: "h_38", memberId: "tiramisu", structureId: "moncalieri", date: "Sabato 12 Aprile 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_39", memberId: "tiramisu", structureId: "rivoli", date: "Sabato 10 Maggio 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_40", memberId: "tiramisu", structureId: "dongnocchi", date: "Domenica 15 Giugno 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_41", memberId: "tiramisu", structureId: "ugicasa", date: "Domenica 13 Luglio 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_42", memberId: "tiramisu", structureId: "sermig", date: "Sabato 13 Settembre 2025", time: "16:30 - 18:30", year: 2025 },
        { id: "h_43", memberId: "tiramisu", structureId: "carmagnola", date: "Mercoledì 01 Ottobre 2025", time: "10:00 - 12:00", year: 2025 },
        // 2026
        { id: "h_44", memberId: "tiramisu", structureId: "moncalieri", date: "Sabato 17 Gennaio 2026", time: "15:00 - 18:00", year: 2026 },
        { id: "h_45", memberId: "tiramisu", structureId: "rivoli", date: "Sabato 21 Febbraio 2026", time: "15:00 - 18:00", year: 2026 },
        { id: "h_46", memberId: "tiramisu", structureId: "dongnocchi", date: "Domenica 15 Marzo 2026", time: "15:00 - 18:30", year: 2026 },

        // birba (member since 2023) - total 7 services
        { id: "h_47", memberId: "birba", structureId: "sermig", date: "Sabato 15 Marzo 2025", time: "16:30 - 18:30", year: 2025 },
        { id: "h_48", memberId: "birba", structureId: "dongnocchi", date: "Domenica 20 Aprile 2025", time: "15:00 - 18:30", year: 2025 },
        { id: "h_49", memberId: "birba", structureId: "moncalieri", date: "Sabato 24 Maggio 2025", time: "15:00 - 18:00", year: 2025 },
        { id: "h_50", memberId: "birba", structureId: "rivoli", date: "Sabato 21 Giugno 2025", time: "15:00 - 18:00", year: 2025 },
        // 2026
        { id: "h_51", memberId: "birba", structureId: "ugicasa", date: "Domenica 18 Gennaio 2026", time: "15:00 - 18:30", year: 2026 },
        { id: "h_52", memberId: "birba", structureId: "carmagnola", date: "Mercoledì 04 Febbraio 2026", time: "10:00 - 12:00", year: 2026 },
        { id: "h_53", memberId: "birba", structureId: "dongnocchi", date: "Domenica 15 Marzo 2026", time: "15:00 - 18:30", year: 2026 }
    ]
};

// APP CONTEXT
let db = null;
let currentUser = null;

// CALENDAR STATE
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();
const monthNames = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
];

// TOAST NOTIFICATIONS
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>🎈</span> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-10px)";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// DATABASE UTILS
function initDatabase() {
    const saved = localStorage.getItem("mole_sorriso_db");
    if (saved) {
        try {
            db = JSON.parse(saved);
        } catch (e) {
            console.error("Database in localStorage corrotto. Reimposto il database di default.", e);
            db = INITIAL_DB;
            saveDatabase();
            return;
        }
        
        let migrated = false;
        
        // Dynamic self-healing: Ensure all required collections from INITIAL_DB are present and are valid arrays
        const requiredKeys = ["structures", "members", "shifts", "announcements", "history"];
        requiredKeys.forEach(key => {
            if (!db[key] || !Array.isArray(db[key])) {
                db[key] = INITIAL_DB[key] ? JSON.parse(JSON.stringify(INITIAL_DB[key])) : [];
                migrated = true;
            }
        });
        
        // Ensure all pre-existing members have training records
        db.members.forEach(m => {
            if (!m.trainings) {
                m.trainings = [true, true, true, true];
                migrated = true;
            }
        });
        
        // Ensure all members have isNew and isSuspended properties and shifts have spot allocations
        db.members.forEach(m => {
            if (m.isNew === undefined) {
                m.isNew = (m.id === "birba"); // Default to false, make Birba true for demo
                migrated = true;
            }
            if (m.isSuspended === undefined) {
                m.isSuspended = false; // Default to false
                migrated = true;
            }
            if (m.phone === undefined) {
                m.phone = INITIAL_DB.members.find(im => im.id === m.id)?.phone || "";
                migrated = true;
            }
            if (m.wantsShiftLeader === undefined) {
                m.wantsShiftLeader = INITIAL_DB.members.find(im => im.id === m.id)?.wantsShiftLeader || false;
                migrated = true;
            }
        });
        
        db.shifts.forEach(s => {
            if (s.maxExperiencedSpots === undefined) {
                s.maxExperiencedSpots = s.maxSpots;
                migrated = true;
            }
            if (s.maxNewSpots === undefined) {
                s.maxNewSpots = 0;
                migrated = true;
            }
            if (s.shiftLeaderId === undefined) {
                s.shiftLeaderId = "";
                migrated = true;
            }
            if (s.isValidated === undefined) {
                s.isValidated = false;
                migrated = true;
            }
        });
        
        // Dynamic Database Migration: Replace any legacy "Socio"/"Soci" references with "Volontario"/"Volontari" 
        // to prevent users from seeing outdated terminology saved in their browser's localStorage.
        
        db.announcements.forEach(ann => {
            if (ann.title && (ann.title.includes("Socio") || ann.title.includes("soci") || ann.title.includes("Soci") || ann.title.includes("socio"))) {
                ann.title = ann.title
                    .replace(/\bSoci\b/g, "Volontari")
                    .replace(/\bsoci\b/g, "volontari")
                    .replace(/\bSocio\b/g, "Volontario")
                    .replace(/\bsocio\b/g, "volontario")
                    .replace(/\bSocia\b/g, "Volontaria")
                    .replace(/\bsocia\b/g, "volontaria");
                migrated = true;
            }
            if (ann.body && (ann.body.includes("Socio") || ann.body.includes("soci") || ann.body.includes("Soci") || ann.body.includes("socio"))) {
                ann.body = ann.body
                    .replace(/\bSoci\b/g, "Volontari")
                    .replace(/\bsoci\b/g, "volontari")
                    .replace(/\bSocio\b/g, "Volontario")
                    .replace(/\bsocio\b/g, "volontario")
                    .replace(/\bSocia\b/g, "Volontaria")
                    .replace(/\bsocia\b/g, "volontaria");
                migrated = true;
            }
            if (!ann.category) {
                const text = ((ann.title || "") + " " + (ann.body || "")).toLowerCase();
                if (text.includes("corso") || text.includes("aggiornamento") || text.includes("allenamento") || text.includes("workshop") || text.includes("teatrale") || text.includes("presenze")) {
                    ann.category = "allenamenti";
                } else {
                    ann.category = "comunicazioni";
                }
                migrated = true;
            }
        });
        
        db.members.forEach(m => {
            if (m.bio && (m.bio.includes("Socio") || m.bio.includes("soci") || m.bio.includes("Soci") || m.bio.includes("socio"))) {
                m.bio = m.bio
                    .replace(/\bSoci\b/g, "Volontari")
                    .replace(/\bsoci\b/g, "volontari")
                    .replace(/\bSocio\b/g, "Volontario")
                    .replace(/\bsocio\b/g, "volontario")
                    .replace(/\bSocia\b/g, "Volontaria")
                    .replace(/\bsocia\b/g, "volontaria");
                migrated = true;
            }
        });
        
        if (migrated) {
            saveDatabase();
        }
    } else {
        db = INITIAL_DB;
        saveDatabase();
    }
}

function saveDatabase() {
    localStorage.setItem("mole_sorriso_db", JSON.stringify(db));
}

// ELIGIBILITY CALCULATION LOGIC
function checkEligibility(memberId) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return { status: "eligible", attendedCount: 4 };
    
    const attendedCount = member.trainings.filter(t => t).length;
    
    if (member.isSuspended) {
        return { status: "suspended", attendedCount };
    }
    
    if (attendedCount >= 3) {
        return { status: "eligible", attendedCount };
    } else if (attendedCount === 2) {
        return { status: "warning", attendedCount };
    } else {
        return { status: "blocked", attendedCount };
    }
}

// AUTHENTICATION AND LOGINS
function checkSession() {
    try {
        const session = localStorage.getItem("mole_sorriso_session");
        if (session) {
            const storedUser = JSON.parse(session);
            // Keep session updated with fresh DB fields
            currentUser = db.members.find(m => m.id === storedUser.id) || storedUser;
            showMainApp();
        } else {
            showLoginScreen();
        }
    } catch (e) {
        console.error("Errore nella lettura della sessione. Reset sessione in corso.", e);
        localStorage.removeItem("mole_sorriso_session");
        showLoginScreen();
    }
}

function handleLogin(e) {
    if (e) e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    
    const user = db.members.find(m => m.email === email && m.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem("mole_sorriso_session", JSON.stringify(currentUser));
        showMainApp();
        showToast(`Bentornato ${currentUser.claunName}! Naso rosso sempre pronto!`);
    } else {
        showToast("Email o Password non corrette! Riprova.", "error");
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem("mole_sorriso_session");
    showLoginScreen();
    showToast("Disconnessione effettuata. A presto!", "info");
}

function fillCredentials(email, password) {
    document.getElementById("loginEmail").value = email;
    document.getElementById("loginPassword").value = password;
    showToast("Credenziali caricate! Clicca su Accedi.", "info");
}
function showLoginScreen() {
    document.getElementById("mainApp").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
}

function renderShifts(filterId) {
    // Generate structure filter tabs
    const tabsContainer = document.getElementById("structureFilterTabs");
    tabsContainer.innerHTML = `<button class="filter-tab ${filterId === "all" ? "active" : ""}" onclick="renderShifts('all')">Tutti i Turni</button>`;
    
    db.structures.forEach(st => {
        const btn = document.createElement("button");
        btn.className = `filter-tab ${filterId === st.id ? "active" : ""}`;
        btn.textContent = st.name.split(" di ")[0]; // Clean title for short tabs
        btn.onclick = () => renderShifts(st.id);
        tabsContainer.appendChild(btn);
    });
    
    // Filter Shifts
    const filteredShifts = filterId === "all" 
        ? db.shifts.filter(sh => !sh.isValidated) 
        : db.shifts.filter(s => s.structureId === filterId && !s.isValidated);
        
    const grid = document.getElementById("shiftsGrid");
    grid.innerHTML = "";
    
    if (filteredShifts.length === 0) {
        grid.innerHTML = `<p class="shift-member-empty" style="grid-column: 1/-1; text-align: center; padding: 40px 0; font-size: 16px;">Nessun turno inserito in questa sezione.</p>`;
        return;
    }
    
    // Check eligibility status of current user
    const eligibility = checkEligibility(currentUser.id);
    const isBlocked = eligibility.status === "blocked";
    const isSuspended = eligibility.status === "suspended";
    
    filteredShifts.forEach(sh => {
        const structure = db.structures.find(st => st.id === sh.structureId);
        if (!structure) return;
        
        const isJoined = sh.members.includes(currentUser.id);
        const freeSpots = sh.maxSpots - sh.members.length;
        const isFull = freeSpots <= 0;
        
        // Quota calculations
        const maxExp = sh.maxExperiencedSpots !== undefined ? sh.maxExperiencedSpots : sh.maxSpots;
        const maxNew = sh.maxNewSpots !== undefined ? sh.maxNewSpots : 0;
        
        const enrolledNew = sh.members.filter(mId => {
            const m = db.members.find(mem => mem.id === mId);
            return m ? m.isNew : false;
        }).length;
        const enrolledExperienced = sh.members.length - enrolledNew;
        
        const card = document.createElement("div");
        card.className = "shift-card";
        
        // Members list inside shift
        let membersHtml = "";
        if (sh.members.length === 0) {
            membersHtml = `<span class="shift-member-empty">Nessun claun iscritto. Sii il primo! 🎈</span>`;
        } else {
            sh.members.forEach(mId => {
                const member = db.members.find(m => m.id === mId);
                if (member) {
                    membersHtml += `
                        <div class="shift-member-chip" title="${member.isNew ? 'Nuovo Volontario' : 'Volontario Esperto'}">
                            <img src="${member.avatar}" alt="${member.claunName}" class="shift-member-avatar">
                            <span>${member.claunName}</span>
                        </div>
                    `;
                }
            });
        }
        
        // Create appropriate action button and check category quotas
        let actionBtnHtml = "";
        const isUserNew = currentUser.isNew || false;
        
        if (isJoined) {
            actionBtnHtml = `<button class="btn-shift-action leave" onclick="handleShiftAction('${sh.id}', 'leave')">Cancella Iscrizione</button>`;
        } else if (isSuspended) {
            actionBtnHtml = `<button class="btn-shift-action join" style="opacity: 0.5; background-color: #cbd5e1; color: #94a3b8; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled title="La tua attività è attualmente sospesa!">Attività Sospesa ⛔</button>`;
        } else if (isBlocked) {
            actionBtnHtml = `<button class="btn-shift-action join" style="opacity: 0.5; background-color: #cbd5e1; color: #94a3b8; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled title="Presenza insufficiente agli allenamenti!">Iscrizione Bloccata 🔒</button>`;
        } else if (isFull) {
            actionBtnHtml = `<button class="btn-shift-action join" style="opacity: 0.5; cursor: not-allowed;" disabled>Turno Completo</button>`;
        } else if (isUserNew && enrolledNew >= maxNew) {
            actionBtnHtml = `<button class="btn-shift-action join" style="opacity: 0.5; background-color: #e2e8f0; color: #64748b; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled title="I posti riservati ai nuovi volontari sono esauriti!">Posti Nuovi Esauriti 🔒</button>`;
        } else if (!isUserNew && enrolledExperienced >= maxExp) {
            actionBtnHtml = `<button class="btn-shift-action join" style="opacity: 0.5; background-color: #e2e8f0; color: #64748b; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled title="I posti riservati ai volontari esperti sono esauriti!">Posti Esperti Esauriti 🔒</button>`;
        } else {
            actionBtnHtml = `<button class="btn-shift-action join" onclick="handleShiftAction('${sh.id}', 'join')">Iscriviti al Turno 🔴</button>`;
        }
        
        const spotsBreakdownHtml = `
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; align-items: center;">
                <span class="spots-pill total" title="Posti occupati / totali">Totali: ${sh.members.length} / ${sh.maxSpots}</span>
                <span class="spots-pill experienced" title="Posti riservati ai Volontari Esperti">Esperti: ${enrolledExperienced} / ${maxExp}</span>
                ${maxNew > 0 ? `<span class="spots-pill new" title="Posti riservati ai Nuovi Volontari">Nuovi: ${enrolledNew} / ${maxNew}</span>` : ''}
            </div>
        `;
        
        let leaderHtml = "";
        if (sh.shiftLeaderId) {
            const leader = db.members.find(m => m.id === sh.shiftLeaderId);
            if (leader) {
                const isMe = leader.id === currentUser.id ? " (Tu)" : "";
                leaderHtml = `
                    <div class="shift-leader-badge" style="margin-top: 10px; display: flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 700; color: #b45309; background: rgba(245, 158, 11, 0.08); padding: 6px 10px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                        👑 Capoturno: ${leader.claunName}${isMe}
                    </div>
                `;
            }
        } else if (sh.members.includes(currentUser.id) && currentUser.wantsShiftLeader) {
            leaderHtml = `
                <button class="btn-shift-action" style="width: 100%; margin-top: 10px; padding: 6px; font-size: 11.5px; background: linear-gradient(135deg, #f59e0b, #d97706); border: none; color: white;" onclick="assignAsShiftLeader('${sh.id}')">
                    🙋 Assumi Ruolo Capoturno
                </button>
            `;
        }
        
        let validationBtnHtml = "";
        if (sh.shiftLeaderId === currentUser.id && !sh.isValidated) {
            validationBtnHtml = `
                <button class="btn-shift-action" style="width: 100%; margin-top: 8px; background: linear-gradient(135deg, var(--success), #059669); border: none; color: white;" onclick="openValidateAttendanceModal('${sh.id}')">
                    ✅ Valida Presenze
                </button>
            `;
        }
        
        card.innerHTML = `
            <div class="shift-card-header" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px;">
                <h3 class="shift-structure" style="margin-top: 2px;">${structure.name}</h3>
                <span class="shift-spots-badge ${isFull ? "full" : "available"}" style="margin: 0; align-self: flex-start;">
                    ${isFull ? "Turno Completo" : `${freeSpots} posti disponibili`}
                </span>
                ${spotsBreakdownHtml}
                <p class="shift-schedule" style="margin-top: 4px;">${sh.date} • ${sh.time}</p>
                <p style="font-size: 11px; color: var(--text-muted); font-weight: 700; margin-top: 2px; text-transform: uppercase;">Reparto: ${structure.ward}</p>
            </div>
            <div class="shift-card-body">
                <div class="shift-members-section">
                    <h4 class="shift-members-title">🛡️ Equipaggio Claun di Turno</h4>
                    <div class="shift-members-avatars">
                        ${membersHtml}
                    </div>
                </div>
                ${leaderHtml}
                ${validationBtnHtml}
                ${actionBtnHtml}
            </div>
        `;
        grid.appendChild(card);
    });
}

function showMainApp() {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("mainApp").classList.remove("hidden");
    
    // Sync current user reference
    currentUser = db.members.find(m => m.id === currentUser.id) || currentUser;
    
    // Update active profile details on sidebar/mobile views
    document.querySelectorAll(".profile-avatar").forEach(img => img.src = currentUser.avatar);
    document.querySelectorAll(".profile-claun-name").forEach(el => el.textContent = currentUser.claunName);
    document.querySelectorAll(".profile-role").forEach(el => {
        el.textContent = currentUser.role === "admin" ? "Direttivo Claun" : "Volontario";
    });
    
    // Conditional visibility of the Admin section for board members
    const adminTab = document.querySelector(".menu-link[data-view='direttivo']");
    const adminMobileTab = document.querySelector(".bottom-nav-item[data-view='direttivo']");
    if (currentUser.role === "admin") {
        if (adminTab) adminTab.parentElement.classList.remove("hidden");
        if (adminMobileTab) adminMobileTab.classList.remove("hidden");
    } else {
        if (adminTab) adminTab.parentElement.classList.add("hidden");
        if (adminMobileTab) adminMobileTab.classList.add("hidden");
    }
    
    // Render Eligibility Banners
    renderEligibilityAlerts();
    
    // Header Stats Info
    updateHeaderStats();
    
    // Default navigate to Dashboard
    switchView("dashboard");
}

function renderEligibilityAlerts() {
    const eligibility = checkEligibility(currentUser.id);
    const alertWarning = document.getElementById("alertWarningBar");
    const alertBlocked = document.getElementById("alertBlockedBar");
    
    // Reset banner states
    alertWarning.classList.add("hidden");
    alertBlocked.classList.add("hidden");
    
    if (eligibility.status === "warning") {
        alertWarning.classList.remove("hidden");
        document.getElementById("warnCount").textContent = eligibility.attendedCount;
    } else if (eligibility.status === "blocked") {
        alertBlocked.classList.remove("hidden");
        document.getElementById("blockCount").textContent = eligibility.attendedCount;
    }
}

function switchView(viewId) {
    if (!currentUser) return;
    // Hide all view sections
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.add("hidden"));
    
    // Show selected view
    const targetSection = document.getElementById(`${viewId}View`);
    if (targetSection) targetSection.classList.remove("hidden");
    
    // Update navigation items active state (Sidebar)
    document.querySelectorAll(".sidebar .menu-link").forEach(link => {
        if (link.getAttribute("data-view") === viewId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
    
    // Update bottom navbar items active state (Mobile)
    document.querySelectorAll(".bottom-nav .bottom-nav-item").forEach(link => {
        if (link.getAttribute("data-view") === viewId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
    
    // Sync current user reference before rendering
    currentUser = db.members.find(m => m.id === currentUser.id) || currentUser;
    renderEligibilityAlerts();
    
    // Call renderer for target view
    if (viewId === "dashboard") renderDashboard();
    if (viewId === "turni") renderShifts("all");
    if (viewId === "calendario") renderCalendar();
    if (viewId === "molini") renderMolini("");
    if (viewId === "direttivo") renderDirettivo();
    if (viewId === "storico") renderStorico();
    if (viewId === "profilo") renderProfilo();
}

// HEADER STATS UPDATE
function updateHeaderStats() {
    // Calculate total completed services by current user in history
    const completedHistory = (db.history || []).filter(h => h.memberId === currentUser.id).length;
    document.getElementById("statMyShifts").textContent = completedHistory;
    
    // Smiled users estimate (30 smiles per completed service)
    document.getElementById("statSmiles").textContent = completedHistory * 30;
}


// RENDERING FUNCTIONS

// 1. DASHBOARD
function renderDashboard() {
    // Greeting Message based on time of day
    const hour = new Date().getHours();
    let welcomePrefix = "Buona serata";
    if (hour < 12) welcomePrefix = "Buongiorno";
    else if (hour < 18) welcomePrefix = "Buon pomeriggio";
    
    document.getElementById("welcomeGreeting").innerHTML = `${welcomePrefix}, <strong>${currentUser.claunName}</strong>! 👋`;
    document.getElementById("currentDateTxt").textContent = new Date().toLocaleDateString("it-IT", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    
    // Render Announcements by Category
    const noticesListComunicazioni = document.getElementById("dashboardNoticesComunicazioni");
    const noticesListAllenamenti = document.getElementById("dashboardNoticesAllenamenti");
    
    if (noticesListComunicazioni && noticesListAllenamenti) {
        noticesListComunicazioni.innerHTML = "";
        noticesListAllenamenti.innerHTML = "";
        
        const docsComunicazioni = db.announcements.filter(ann => ann.category === "comunicazioni");
        const docsAllenamenti = db.announcements.filter(ann => ann.category === "allenamenti");
        
        if (docsComunicazioni.length === 0) {
            noticesListComunicazioni.innerHTML = `<p class="shift-member-empty" style="padding: 15px 0;">Nessun avviso in Comunicazioni.</p>`;
        } else {
            docsComunicazioni.forEach(ann => {
                const item = document.createElement("div");
                item.className = `notice-item comunicazioni ${ann.isUrgent ? "urgent" : ""}`;
                item.innerHTML = `
                    <div class="notice-meta">
                        <span>${ann.isUrgent ? "🚨 URGENTE" : "📢 AVVISO"}</span>
                        <span>${ann.date}</span>
                    </div>
                    <h3 class="notice-title">${ann.title}</h3>
                    <p class="notice-body">${ann.body}</p>
                `;
                noticesListComunicazioni.appendChild(item);
            });
        }
        
        if (docsAllenamenti.length === 0) {
            noticesListAllenamenti.innerHTML = `<p class="shift-member-empty" style="padding: 15px 0;">Nessun avviso in Allenamenti.</p>`;
        } else {
            docsAllenamenti.forEach(ann => {
                const item = document.createElement("div");
                item.className = `notice-item allenamenti ${ann.isUrgent ? "urgent" : ""}`;
                item.innerHTML = `
                    <div class="notice-meta">
                        <span>${ann.isUrgent ? "🚨 URGENTE" : "🏋️‍♂️ ALLENAMENTO / CORSO"}</span>
                        <span>${ann.date}</span>
                    </div>
                    <h3 class="notice-title">${ann.title}</h3>
                    <p class="notice-body">${ann.body}</p>
                `;
                noticesListAllenamenti.appendChild(item);
            });
        }
    }
    
    // Render Mini Profile Widget
    document.getElementById("widgetAvatar").src = currentUser.avatar;
    document.getElementById("widgetClaun").textContent = currentUser.claunName;
    document.getElementById("widgetReal").textContent = `(Volontario: ${currentUser.realName})`;
    document.getElementById("widgetQuote").textContent = currentUser.bio;
    
    // Render Next Shifts Widget
    const quickShiftList = document.getElementById("widgetNextShifts");
    quickShiftList.innerHTML = "";
    
    // Find next shifts for current user
    const myShifts = db.shifts.filter(s => s.members.includes(currentUser.id));
    
    if (myShifts.length === 0) {
        quickShiftList.innerHTML = `
            <div style="text-align: center; padding: 20px 0;">
                <p class="shift-member-empty" style="margin-bottom: 15px;">Non sei iscritto a nessun turno imminente.</p>
                <button class="quick-shift-btn" style="border-color: var(--primary); color: var(--primary);" onclick="switchView('turni')">Sfoglia Turni Disponibili</button>
            </div>
        `;
    } else {
        myShifts.slice(0, 3).forEach(sh => {
            const structure = db.structures.find(str => str.id === sh.structureId);
            const item = document.createElement("div");
            item.className = "quick-shift-item";
            item.innerHTML = `
                <div class="quick-shift-details">
                    <span class="quick-shift-structure">${structure ? structure.name : "Ospedale"}</span>
                    <span class="quick-shift-time">${sh.date} | ${sh.time}</span>
                </div>
                <button class="quick-shift-btn text-accent" onclick="leaveShiftFromDashboard('${sh.id}')">Cancella</button>
            `;
            quickShiftList.appendChild(item);
        });
    }
}

function leaveShiftFromDashboard(shiftId) {
    leaveShift(shiftId);
    renderDashboard();
    updateHeaderStats();
}

function handleShiftAction(shiftId, action) {
    if (action === "join") {
        joinShift(shiftId);
    } else {
        leaveShift(shiftId);
    }
    // Re-render based on active filter
    const activeFilter = document.querySelector(".filter-tab.active");
    let filter = "all";
    if (activeFilter) {
        const text = activeFilter.textContent;
        const matchingSt = db.structures.find(st => st.name.includes(text));
        if (matchingSt) filter = matchingSt.id;
    }
    renderShifts(filter);
    updateHeaderStats();
}

function joinShift(shiftId) {
    // Safety check eligibility before signing up
    const eligibility = checkEligibility(currentUser.id);
    if (eligibility.status === "suspended") {
        showToast("Accesso Negato: Sei attualmente sospeso dall'attività! ⛔", "error");
        return;
    }
    if (eligibility.status === "blocked") {
        showToast("Accesso Negato: Sei bloccato a causa della mancata presenza agli allenamenti!", "error");
        return;
    }

    const shift = db.shifts.find(s => s.id === shiftId);
    if (!shift) return;
    
    if (shift.members.includes(currentUser.id)) {
        showToast("Sei già iscritto a questo turno!", "error");
        return;
    }
    
    if (shift.members.length >= shift.maxSpots) {
        showToast("Spiacente, questo turno è al completo!", "error");
        return;
    }
    
    // Quota capacity calculations
    const maxExp = shift.maxExperiencedSpots !== undefined ? shift.maxExperiencedSpots : shift.maxSpots;
    const maxNew = shift.maxNewSpots !== undefined ? shift.maxNewSpots : 0;
    
    const enrolledNew = shift.members.filter(mId => {
        const m = db.members.find(mem => mem.id === mId);
        return m ? m.isNew : false;
    }).length;
    const enrolledExperienced = shift.members.length - enrolledNew;
    
    const isUserNew = currentUser.isNew || false;
    
    if (isUserNew) {
        if (enrolledNew >= maxNew) {
            showToast("Spiacente, i posti riservati ai Nuovi Volontari per questo turno sono esauriti! 🔒", "error");
            return;
        }
    } else {
        if (enrolledExperienced >= maxExp) {
            showToast("Spiacente, i posti riservati ai Volontari Esperti per questo turno sono esauriti! 🔒", "error");
            return;
        }
    }
    
    shift.members.push(currentUser.id);
    saveDatabase();
    showToast("Iscrizione completata con successo! Buon servizio! 🔴");
}

function leaveShift(shiftId) {
    const shift = db.shifts.find(s => s.id === shiftId);
    if (!shift) return;
    
    shift.members = shift.members.filter(mId => mId !== currentUser.id);
    if (shift.shiftLeaderId === currentUser.id) {
        shift.shiftLeaderId = "";
    }
    saveDatabase();
    showToast("Iscrizione rimossa.", "info");
}


// 3. MOLINI (DIRECTORY)
function renderMolini(searchQuery = "") {
    const grid = document.getElementById("moliniGrid");
    grid.innerHTML = "";
    
    const query = searchQuery.toLowerCase().trim();
    
    const filteredMembers = db.members.filter(m => {
        return m.claunName.toLowerCase().includes(query) || 
               m.realName.toLowerCase().includes(query) || 
               m.specialty.toLowerCase().includes(query);
    });
    
    if (filteredMembers.length === 0) {
        grid.innerHTML = `<p class="shift-member-empty" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">Nessun volontario trovato con questi parametri di ricerca.</p>`;
        return;
    }
    
    filteredMembers.forEach(m => {
        const eligibility = checkEligibility(m.id);
        let statusBadgeHtml = "";
        if (eligibility.status === "eligible") {
            statusBadgeHtml = `<span style="font-size: 10px; font-weight:700; color:var(--success); background-color: rgba(6, 214, 160, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">🟢 Idoneo</span>`;
        } else if (eligibility.status === "warning") {
            statusBadgeHtml = `<span style="font-size: 10px; font-weight:700; color:var(--warning); background-color: rgba(255, 190, 11, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">🟡 A Rischio</span>`;
        } else if (eligibility.status === "suspended") {
            statusBadgeHtml = `<span style="font-size: 10px; font-weight:700; color:#f43f5e; background-color: rgba(244, 63, 94, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">⛔ Sospeso</span>`;
        } else {
            statusBadgeHtml = `<span style="font-size: 10px; font-weight:700; color:#ef4444; background-color: rgba(239, 68, 68, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">🔴 Bloccato</span>`;
        }

        let typeBadgeHtml = "";
        if (m.isNew) {
            typeBadgeHtml = `<span style="font-size: 10px; font-weight:700; color:#02b174; background-color: rgba(6, 214, 160, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">🔰 Nuovo</span>`;
        } else {
            typeBadgeHtml = `<span style="font-size: 10px; font-weight:700; color:var(--primary); background-color: rgba(79, 70, 229, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">🚀 Esperto</span>`;
        }

        const card = document.createElement("div");
        card.className = `molino-card ${m.role === 'admin' ? 'admin' : ''}`;
        
        card.innerHTML = `
            <img src="${m.avatar}" alt="${m.claunName}" class="molino-avatar">
            <h3 class="molino-claun-name">${m.claunName}</h3>
            <p class="molino-real-name">Volontario: ${m.realName}</p>
            <div style="margin-bottom: 12px; display:flex; gap:6px; justify-content:center; align-items:center; flex-wrap: wrap;">
                <span class="molino-badge-role ${m.role === 'admin' ? 'admin' : ''}" style="margin-bottom:0;">
                    ${m.role === 'admin' ? 'Direttivo' : 'Volontario'}
                </span>
                ${typeBadgeHtml}
                ${statusBadgeHtml}
            </div>
            <div class="molino-info-list">
                <div class="molino-info-item">
                    <span class="molino-info-lbl">In Associazione:</span>
                    <span class="molino-info-val">Dal ${m.entryYear}</span>
                </div>
                <div class="molino-info-item">
                    <span class="molino-info-lbl">Servizi Svolti:</span>
                    <span class="molino-info-val" style="font-weight: 700; color: var(--text-main);">📜 ${(db.history || []).filter(h => h.memberId === m.id).length}</span>
                </div>
                <div class="molino-info-item">
                    <span class="molino-info-lbl">Presenze Allenamenti:</span>
                    <span class="molino-info-val">${eligibility.attendedCount} / 4</span>
                </div>
                ${currentUser && currentUser.role === 'admin' ? `
                <div class="molino-info-item" style="border-top: 1px solid #f8fafc; padding-top: 8px; margin-top: 4px; justify-content: space-between; align-items: center; display: flex; width: 100%;">
                    <span class="molino-info-lbl" style="font-weight: 700; color: var(--text-main);">Nuovo Volontario:</span>
                    <label class="switch-premium">
                        <input type="checkbox" ${m.isNew ? 'checked' : ''} onchange="toggleIsNew('${m.id}')">
                        <span class="slider-premium"></span>
                    </label>
                </div>
                <div class="molino-info-item" style="border-top: 1px solid #f8fafc; padding-top: 8px; margin-top: 4px; justify-content: space-between; align-items: center; display: flex; width: 100%;">
                    <span class="molino-info-lbl" style="font-weight: 700; color: var(--text-main);">Sospendi Volontario:</span>
                    <label class="switch-premium">
                        <input type="checkbox" ${m.isSuspended ? 'checked' : ''} onchange="toggleIsSuspended('${m.id}')">
                        <span class="slider-premium slider-suspended"></span>
                    </label>
                </div>
                <button class="btn-primary" style="margin-top: 12px; margin-bottom: 4px; width: 100%; border-radius: 8px; font-weight: 700; padding: 10px; font-size: 13px; display: flex; align-items: center; justify-content: center; gap: 6px; background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%); cursor: pointer; border: none; color: white;" onclick="openVolunteerHistoryModal('${m.id}')">
                    📜 Storico Servizi
                </button>
                ` : ''}
                <div class="molino-info-item" style="flex-direction: column; gap: 4px; border-top: 1px solid #f8fafc; padding-top: 8px;">
                    <span class="molino-info-lbl">Specialità:</span>
                    <span class="molino-info-val" style="color: var(--primary); font-weight: 700;">🌟 ${m.specialty}</span>
                </div>
                <div class="molino-info-item" style="flex-direction: column; gap: 4px; border-top: 1px solid #f8fafc; padding-top: 8px; font-style: italic; color: var(--text-muted);">
                    "${m.bio}"
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleMoliniSearch() {
    const query = document.getElementById("moliniSearchInput").value;
    renderMolini(query);
}

// 4. VOLUNTEER SERVICE HISTORY ("STORICO")
function getVolunteerStats(memberId) {
    const userHistory = (db.history || []).filter(h => h.memberId === memberId);
    
    // Sort history by ID descending (newest first)
    const sortedHistory = [...userHistory].sort((a, b) => {
        const idA = parseInt(a.id.replace("h_", ""));
        const idB = parseInt(b.id.replace("h_", ""));
        return idB - idA;
    });
    
    // Group by year
    const statsByYear = {};
    sortedHistory.forEach(h => {
        statsByYear[h.year] = (statsByYear[h.year] || 0) + 1;
    });
    
    // Group by structure
    const statsByStructure = {};
    db.structures.forEach(st => {
        statsByStructure[st.id] = 0;
    });
    userHistory.forEach(h => {
        if (statsByStructure[h.structureId] !== undefined) {
            statsByStructure[h.structureId]++;
        } else {
            statsByStructure[h.structureId] = 1;
        }
    });
    
    return {
        total: userHistory.length,
        smiles: userHistory.length * 30,
        byYear: statsByYear,
        byStructure: statsByStructure,
        historyList: sortedHistory
    };
}

function renderStorico() {
    const stats = getVolunteerStats(currentUser.id);
    
    // 1. Populate general stats cards
    document.getElementById("storicoTotalServices").textContent = stats.total;
    document.getElementById("storicoTotalSmiles").textContent = stats.smiles;
    
    // 2. Populate annual breakdown
    const annualContainer = document.getElementById("storicoAnnualStats");
    annualContainer.innerHTML = "";
    
    const sortedYears = Object.keys(stats.byYear).sort((a, b) => b - a);
    if (sortedYears.length === 0) {
        annualContainer.innerHTML = `<p class="shift-member-empty" style="text-align: center; width: 100%;">Nessun servizio registrato.</p>`;
    } else {
        sortedYears.forEach(year => {
            const count = stats.byYear[year];
            const isCurrentYear = (year == new Date().getFullYear());
            const okLabel = (isCurrentYear && count >= 10) ? ' <span style="color: var(--success); font-weight: 800; margin-left: 6px;">OK</span>' : '';
            const yearCard = document.createElement("div");
            yearCard.className = "annual-stat-pill";
            yearCard.innerHTML = `
                <div class="annual-year">${year}</div>
                <div class="annual-count">${count} serviz${count === 1 ? 'o' : 'i'}${okLabel}</div>
            `;
            annualContainer.appendChild(yearCard);
        });
    }
    
    // 3. Populate structure breakdown with animated progress bars
    const structureContainer = document.getElementById("storicoStructureStats");
    structureContainer.innerHTML = "";
    
    const activeStructures = db.structures;
    if (activeStructures.length === 0) {
        structureContainer.innerHTML = `<p class="shift-member-empty">Nessuna struttura registrata.</p>`;
    } else {
        activeStructures.forEach(st => {
            const count = stats.byStructure[st.id] || 0;
            const percentage = stats.total > 0 ? ((count / stats.total) * 100).toFixed(0) : 0;
            
            const item = document.createElement("div");
            item.className = "structure-stat-item";
            item.innerHTML = `
                <div class="structure-stat-header">
                    <span><strong>${st.name}</strong></span>
                    <span><strong>${count}</strong> serviz${count === 1 ? 'o' : 'i'} (${percentage}%)</span>
                </div>
                <div class="structure-bar-container">
                    <div class="structure-bar-fill" id="bar-${st.id}" style="width: 0%;"></div>
                </div>
            `;
            structureContainer.appendChild(item);
            
            // Trigger animation after layout render
            setTimeout(() => {
                const bar = document.getElementById(`bar-${st.id}`);
                if (bar) bar.style.width = `${percentage}%`;
            }, 50);
        });
    }
    
    // 4. Dynamic filters population (preserving previous selected values if still valid)
    const yearFilter = document.getElementById("storicoYearFilter");
    const structFilter = document.getElementById("storicoStructureFilter");
    
    const prevYearVal = yearFilter.value || "all";
    const prevStructVal = structFilter.value || "all";
    
    yearFilter.innerHTML = `<option value="all">Tutti gli Anni</option>`;
    sortedYears.forEach(year => {
        yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
    });
    
    structFilter.innerHTML = `<option value="all">Tutte le Strutture</option>`;
    activeStructures.forEach(st => {
        structFilter.innerHTML += `<option value="${st.id}">${st.name}</option>`;
    });
    
    if (sortedYears.includes(prevYearVal)) yearFilter.value = prevYearVal;
    else yearFilter.value = "all";
    
    if (activeStructures.some(st => st.id === prevStructVal)) structFilter.value = prevStructVal;
    else structFilter.value = "all";
    
    yearFilter.onchange = filterTimeline;
    structFilter.onchange = filterTimeline;
    
    // 5. Timeline real-time filtering & rendering
    function filterTimeline() {
        const selectedYear = yearFilter.value;
        const selectedStruct = structFilter.value;
        
        let filtered = stats.historyList;
        
        if (selectedYear !== "all") {
            filtered = filtered.filter(h => h.year.toString() === selectedYear);
        }
        if (selectedStruct !== "all") {
            filtered = filtered.filter(h => h.structureId === selectedStruct);
        }
        
        const tbody = document.getElementById("storicoTimelineBody");
        tbody.innerHTML = "";
        
        if (filtered.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; padding: 30px; color: var(--text-muted); font-style: italic;">
                        Nessun servizio corrisponde ai filtri selezionati.
                    </td>
                </tr>
            `;
            return;
        }
        
        filtered.forEach(h => {
            const st = db.structures.find(s => s.id === h.structureId) || { name: "Struttura Eliminata", icon: "🏥", ward: "N/D" };
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>
                    <strong>${st.name}</strong>
                </td>
                <td>${st.ward}</td>
                <td><strong>${h.date}</strong></td>
                <td>${h.time}</td>
            `;
            tbody.appendChild(tr);
        });
    }
    
    // Run timeline filtering initially
    filterTimeline();
}

// PROFILE VIEW & EDIT CONTROLLERS
function renderProfilo() {
    if (!currentUser) return;
    
    currentUser = db.members.find(m => m.id === currentUser.id) || currentUser;
    const eligibility = checkEligibility(currentUser.id);
    
    // Summary card left
    document.getElementById("profileDetailAvatar").src = currentUser.avatar || "";
    document.getElementById("profileDetailClaunName").textContent = currentUser.claunName || "";
    document.getElementById("profileDetailRole").textContent = currentUser.role === "admin" ? "Direttivo Claun" : "Volontario";
    
    document.getElementById("profileStaticRealName").textContent = currentUser.realName || "";
    document.getElementById("profileStaticYear").textContent = currentUser.entryYear || "";
    document.getElementById("profileStaticSpecialty").textContent = currentUser.specialty || "Nessuna";
    
    const statusBadge = document.getElementById("profileStaticStatus");
    statusBadge.className = "badge-eligibility";
    if (eligibility.status === "eligible") {
        statusBadge.classList.add("eligible");
        statusBadge.textContent = "Idoneo";
    } else if (eligibility.status === "warning") {
        statusBadge.classList.add("warning");
        statusBadge.textContent = "Avvertimento";
    } else if (eligibility.status === "suspended") {
        statusBadge.classList.add("suspended");
        statusBadge.textContent = "Sospeso";
    } else {
        statusBadge.classList.add("blocked");
        statusBadge.textContent = "Sotto Quota";
    }
    
    // Editable right side
    document.getElementById("profilePhoneInput").value = currentUser.phone || "";
    document.getElementById("profileEmailInput").value = currentUser.email || "";
    document.getElementById("profileBioInput").value = currentUser.bio || "";
    document.getElementById("profileWantsShiftLeaderInput").checked = currentUser.wantsShiftLeader || false;
}

function saveProfilo(e) {
    if (e) e.preventDefault();
    if (!currentUser) return;
    
    const phone = document.getElementById("profilePhoneInput").value.trim();
    const email = document.getElementById("profileEmailInput").value.trim();
    const bio = document.getElementById("profileBioInput").value.trim();
    const wantsShiftLeader = document.getElementById("profileWantsShiftLeaderInput").checked;
    
    const duplicate = db.members.find(m => m.email.toLowerCase() === email.toLowerCase() && m.id !== currentUser.id);
    if (duplicate) {
        showToast("Questo indirizzo email è già associato a un altro utente.", "error");
        return;
    }
    
    const mIdx = db.members.findIndex(m => m.id === currentUser.id);
    if (mIdx !== -1) {
        db.members[mIdx].phone = phone;
        db.members[mIdx].email = email;
        db.members[mIdx].bio = bio;
        db.members[mIdx].wantsShiftLeader = wantsShiftLeader;
        
        saveDatabase();
        
        currentUser = db.members[mIdx];
        localStorage.setItem("mole_sorriso_session", JSON.stringify(currentUser));
        
        // Sync active profile details on sidebar/mobile views instantly
        document.querySelectorAll(".profile-avatar").forEach(img => img.src = currentUser.avatar);
        document.querySelectorAll(".profile-claun-name").forEach(el => el.textContent = currentUser.claunName);
        
        renderProfilo();
        updateHeaderStats();
        
        showToast("Profilo salvato con successo! 💾");
    }
}

// CAPOTURNO ASSIGNMENT LOGIC
function assignAsShiftLeader(shiftId) {
    const shift = db.shifts.find(s => s.id === shiftId);
    if (!shift) return;
    
    if (!shift.members.includes(currentUser.id)) {
        showToast("Devi essere iscritto al turno per assumere il ruolo di Capoturno!", "error");
        return;
    }
    
    if (shift.shiftLeaderId) {
        showToast("Questo turno ha già un Capoturno assegnato!", "error");
        return;
    }
    
    if (!currentUser.wantsShiftLeader) {
        showToast("Devi prima candidarti come Capoturno nella tua anagrafica!", "error");
        return;
    }
    
    shift.shiftLeaderId = currentUser.id;
    saveDatabase();
    showToast("Hai assunto il ruolo di Capoturno per questo servizio! 👑", "success");
    
    reRenderActiveShiftsView();
}

function reRenderActiveShiftsView() {
    const turniView = document.getElementById("turniView");
    const calendarioView = document.getElementById("calendarioView");
    const dashboardView = document.getElementById("dashboardView");
    
    if (turniView && !turniView.classList.contains("hidden")) {
        const activeFilter = document.querySelector(".filter-tab.active");
        let filter = "all";
        if (activeFilter) {
            const text = activeFilter.textContent;
            const matchingSt = db.structures.find(st => st.name.includes(text));
            if (matchingSt) filter = matchingSt.id;
        }
        renderShifts(filter);
    } else if (calendarioView && !calendarioView.classList.contains("hidden")) {
        renderCalendar();
        
        // Refresh open shift detail modal if matches the open one
        const calModal = document.getElementById("calendarShiftModal");
        if (calModal && !calModal.classList.contains("hidden")) {
            // Find current open shift inside modal and refresh it
            const currentShiftEl = document.querySelector("[onclick*='handleCalendarShiftAction']");
            if (currentShiftEl) {
                const onclickVal = currentShiftEl.getAttribute("onclick");
                const m = onclickVal.match(/'([^']+)'/);
                if (m && m[1]) {
                    openCalendarShiftDetails(m[1]);
                }
            }
        }
    } else if (dashboardView && !dashboardView.classList.contains("hidden")) {
        renderDashboard();
    }
    
    updateHeaderStats();
}

// ATTENDANCE VALIDATION LOGIC
let validationShiftId = null;

function openValidateAttendanceModal(shiftId) {
    const sh = db.shifts.find(s => s.id === shiftId);
    if (!sh) return;
    
    validationShiftId = shiftId;
    
    const container = document.getElementById("validateAttendanceList");
    container.innerHTML = "";
    
    if (sh.members.length === 0) {
        container.innerHTML = `<p class="shift-member-empty" style="text-align: center; width: 100%;">Nessun volontario iscritto.</p>`;
    } else {
        sh.members.forEach(mId => {
            const member = db.members.find(m => m.id === mId);
            if (member) {
                const row = document.createElement("div");
                row.className = "validation-member-row";
                row.style.display = "flex";
                row.style.alignItems = "center";
                row.style.justifyContent = "space-between";
                row.style.padding = "10px 15px";
                row.style.background = "var(--bg-card)";
                row.style.borderRadius = "8px";
                row.style.border = "1px solid var(--border-color)";
                row.style.marginBottom = "8px";
                
                row.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${member.avatar}" alt="${member.claunName}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
                        <div>
                            <span style="font-weight: 700; font-size: 13px; color: var(--text-main); display: block;">${member.claunName}</span>
                            <span style="font-size: 10px; color: var(--text-muted);">${member.realName}</span>
                        </div>
                    </div>
                    <label class="switch-premium" style="transform: scale(0.85); margin: 0;">
                        <input type="checkbox" class="attendance-check" data-member-id="${member.id}" checked>
                        <span class="slider-premium"></span>
                    </label>
                `;
                container.appendChild(row);
            }
        });
    }
    
    document.getElementById("validateAttendanceModal").classList.remove("hidden");
}

function closeValidateAttendanceModal() {
    document.getElementById("validateAttendanceModal").classList.add("hidden");
    validationShiftId = null;
}

function confirmValidateAttendance() {
    if (!validationShiftId) return;
    
    const sh = db.shifts.find(s => s.id === validationShiftId);
    if (!sh) return;
    
    const checks = document.querySelectorAll(".attendance-check");
    const presentMemberIds = [];
    checks.forEach(chk => {
        if (chk.checked) {
            presentMemberIds.push(chk.getAttribute("data-member-id"));
        }
    });
    
    // 1. Mark shift as validated
    sh.isValidated = true;
    
    // 2. Add service to db.history for each present volunteer
    const year = 2026;
    
    presentMemberIds.forEach(mId => {
        const nextHistId = "h_" + (Math.max(...db.history.map(h => {
            const num = parseInt(h.id.replace("h_", ""));
            return isNaN(num) ? 0 : num;
        }), 0) + 1);
        
        const newHist = {
            id: nextHistId,
            memberId: mId,
            structureId: sh.structureId,
            date: sh.date,
            time: sh.time,
            year: year
        };
        db.history.push(newHist);
    });
    
    saveDatabase();
    
    showToast(`Turno validato con successo! Presenze registrate nello storico. 💾`, "success");
    
    closeValidateAttendanceModal();
    closeCalendarShiftModal();
    reRenderActiveShiftsView();
}

// 5. ADMIN VOLUNTEER HISTORY MODAL CONTROLLERS
function openVolunteerHistoryModal(memberId) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return;
    
    const stats = getVolunteerStats(memberId);
    
    // Modal Title setup
    document.getElementById("adminHistoryModalTitle").innerHTML = `<span>📜</span> Storico Servizi di <strong>${member.claunName}</strong> (${member.realName})`;
    
    // Annual summaries
    const sortedYears = Object.keys(stats.byYear).sort((a, b) => b - a);
    let annualHtml = "";
    if (sortedYears.length === 0) {
        annualHtml = `<p class="shift-member-empty" style="text-align: center; width: 100%;">Nessun servizio registrato.</p>`;
    } else {
        sortedYears.forEach(year => {
            const count = stats.byYear[year];
            const isCurrentYear = (year == new Date().getFullYear());
            const okLabel = (isCurrentYear && count >= 10) ? ' <span style="color: var(--success); font-weight: 800; margin-left: 4px;">OK</span>' : '';
            annualHtml += `
                <div class="annual-stat-pill" style="padding: 10px 15px; border-radius: 8px; background: rgba(79, 70, 229, 0.05); text-align: center; min-width: 100px; border: 1px solid rgba(79, 70, 229, 0.1);">
                    <div style="font-weight: 800; font-size: 14px; color: var(--primary);">${year}</div>
                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${count} serviz${count === 1 ? 'o' : 'i'}${okLabel}</div>
                </div>
            `;
        });
    }
    
    // Structures breakdown
    let structuresHtml = "";
    const activeStructures = db.structures;
    if (activeStructures.length === 0) {
        structuresHtml = `<p class="shift-member-empty">Nessuna struttura registrata.</p>`;
    } else {
        activeStructures.forEach(st => {
            const count = stats.byStructure[st.id] || 0;
            const percentage = stats.total > 0 ? ((count / stats.total) * 100).toFixed(0) : 0;
            structuresHtml += `
                <div class="structure-stat-item" style="margin-bottom: 15px;">
                    <div class="structure-stat-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 13px;">
                        <span><strong>${st.name}</strong></span>
                        <span style="font-size: 12px;"><strong>${count}</strong> serviz${count === 1 ? 'o' : 'i'} (${percentage}%)</span>
                    </div>
                    <div class="structure-bar-container" style="height: 8px; background-color: #f1f5f9; border-radius: 10px; overflow: hidden; width: 100%;">
                        <div class="structure-bar-fill" id="admin-bar-${st.id}" style="width: 0%; height: 100%; border-radius: 10px; background: linear-gradient(90deg, var(--primary) 0%, #6366f1 100%); transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);"></div>
                    </div>
                </div>
            `;
            
            // Trigger animation
            setTimeout(() => {
                const bar = document.getElementById(`admin-bar-${st.id}`);
                if (bar) bar.style.width = `${percentage}%`;
            }, 50);
        });
    }
    
    // Timeline chronological items
    let timelineRowsHtml = "";
    if (stats.historyList.length === 0) {
        timelineRowsHtml = `
            <tr>
                <td colspan="4" style="text-align: center; padding: 30px; color: var(--text-muted); font-style: italic;">
                    Nessun servizio in storico per questo volontario.
                </td>
            </tr>
        `;
    } else {
        stats.historyList.forEach(h => {
            const st = db.structures.find(s => s.id === h.structureId) || { name: "Struttura Eliminata", icon: "🏥", ward: "N/D" };
            timelineRowsHtml += `
                <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 10px; font-weight: 700; color: var(--text-main); font-size: 13px;">
                        ${st.name}
                    </td>
                    <td style="padding: 12px 10px; color: var(--text-muted); font-size: 12px;">${st.ward}</td>
                    <td style="padding: 12px 10px; font-size: 13px;"><strong>${h.date}</strong></td>
                    <td style="padding: 12px 10px; color: var(--text-muted); font-size: 12px;">${h.time}</td>
                </tr>
            `;
        });
    }
    
    const bodyContainer = document.getElementById("adminHistoryModalBody");
    bodyContainer.innerHTML = `
        <!-- Stats summary cards -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div class="stat-card-premium" style="padding: 20px; border-radius: 12px; background: linear-gradient(135deg, rgba(79, 70, 229, 0.04) 0%, rgba(59, 130, 246, 0.04) 100%); border: 1px solid rgba(79, 70, 229, 0.1); text-align: center;">
                <div style="font-size: 32px; font-weight: 800; color: var(--primary);">${stats.total}</div>
                <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); margin-top: 5px; text-transform: uppercase;">Servizi Totali Svolti</div>
            </div>
            <div class="stat-card-premium" style="padding: 20px; border-radius: 12px; background: linear-gradient(135deg, rgba(6, 214, 160, 0.04) 0%, rgba(59, 130, 246, 0.04) 100%); border: 1px solid rgba(6, 214, 160, 0.1); text-align: center;">
                <div style="font-size: 32px; font-weight: 800; color: #059669;">${stats.smiles}</div>
                <div style="font-size: 12px; font-weight: 700; color: var(--text-muted); margin-top: 5px; text-transform: uppercase;">Sorrisi Donati (Stima)</div>
            </div>
        </div>
        
        <!-- Two-column grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 5px;">
            <!-- Left: Annual Summary -->
            <div style="background: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);">
                <h4 style="font-size: 14px; margin: 0 0 15px 0; color: var(--bg-sidebar); border-bottom: 2px solid rgba(79, 70, 229, 0.1); padding-bottom: 8px;">📊 Servizi per Anno</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${annualHtml}
                </div>
            </div>
            
            <!-- Right: Structures breakdown -->
            <div style="background: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);">
                <h4 style="font-size: 14px; margin: 0 0 15px 0; color: var(--bg-sidebar); border-bottom: 2px solid rgba(79, 70, 229, 0.1); padding-bottom: 8px;">🏥 Ripartizione per Struttura</h4>
                <div>
                    ${structuresHtml}
                </div>
            </div>
        </div>
        
        <!-- Timeline chronological record -->
        <div style="background: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); margin-top: 5px;">
            <h4 style="font-size: 14px; margin: 0 0 15px 0; color: var(--bg-sidebar); border-bottom: 2px solid rgba(79, 70, 229, 0.1); padding-bottom: 8px;">📜 Registro Cronologico Servizi</h4>
            <div style="overflow-x: auto; max-height: 300px;">
                <table class="timeline-table" style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 2px solid #e2e8f0; background: #f8fafc; font-size: 11px; text-transform: uppercase; color: var(--text-muted);">
                            <th style="padding: 10px; width: 40%;">Struttura</th>
                            <th style="padding: 10px; width: 25%;">Reparto</th>
                            <th style="padding: 10px; width: 20%;">Data</th>
                            <th style="padding: 10px; width: 15%;">Orario</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${timelineRowsHtml}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    document.getElementById("adminHistoryModal").classList.remove("hidden");
}

function closeVolunteerHistoryModal() {
    document.getElementById("adminHistoryModal").classList.add("hidden");
}




// 5. PANNELLO DIRETTIVO (ADMIN ONLY)
function renderDirettivo() {
    if (currentUser.role !== "admin") return;
    
    // Update Admin Panel Overview Stats
    document.getElementById("adminStatMembers").textContent = db.members.length;
    document.getElementById("adminStatStructures").textContent = db.structures.length;
    document.getElementById("adminStatShifts").textContent = db.shifts.length;
    
    const blockedCount = db.members.filter(m => checkEligibility(m.id).status === "blocked").length;
    const warningCount = db.members.filter(m => checkEligibility(m.id).status === "warning").length;
    document.getElementById("adminStatBlocked").textContent = `${blockedCount} / ${warningCount}`;
    
    // Populate Structure dropdown in New Shift Form
    const adminSelect = document.getElementById("adminShiftStructure");
    adminSelect.innerHTML = '<option value="" disabled selected>Seleziona la struttura...</option>';
    
    // Populate Structure dropdown in Calendar Generator Form
    const calendarSelect = document.getElementById("calendarStructure");
    calendarSelect.innerHTML = '<option value="" disabled selected>Seleziona la struttura...</option>';
    
    db.structures.forEach(st => {
        const opt = document.createElement("option");
        opt.value = st.id;
        opt.textContent = st.name;
        adminSelect.appendChild(opt);
        calendarSelect.appendChild(opt.cloneNode(true));
    });
    
    // Render Trainings Matrix Table
    renderTrainingAttendanceTable();
    
    // Render Admin Structures and Shifts Management Lists
    renderAdminStructuresList();
    renderAdminShiftsList();
}

// TRAINING MATRIX TABLE RENDERING
function renderTrainingAttendanceTable() {
    const tbody = document.getElementById("trainingAttendanceBody");
    tbody.innerHTML = "";
    
    db.members.forEach(m => {
        const eligibility = checkEligibility(m.id);
        
        let labelColor = "var(--success)";
        let labelText = "🟢 Idoneo";
        if (eligibility.status === "suspended") {
            labelColor = "#f43f5e";
            labelText = "⛔ Sospeso";
        } else if (eligibility.status === "warning") {
            labelColor = "var(--warning)";
            labelText = "🟡 A Rischio";
        } else if (eligibility.status === "blocked") {
            labelColor = "#ef4444";
            labelText = "🔴 Bloccato";
        }
        
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #f1f5f9";
        
        // Generate Checkboxes for Weeks W1, W2, W3, W4
        let checkboxesHtml = "";
        m.trainings.forEach((attended, index) => {
            checkboxesHtml += `
                <td style="text-align: center; padding: 12px 10px;">
                    <input type="checkbox" ${attended ? "checked" : ""} 
                           style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary);" 
                           onchange="toggleTraining(${JSON.stringify(m.id)}, ${index})">
                </td>
            `;
        });
        
        tr.innerHTML = `
            <td style="padding: 12px 15px; font-weight: 700;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${m.avatar}" style="width:30px; height:30px; border-radius:50%; object-fit:cover;">
                    <div>
                        <span style="font-size:13px; color:var(--text-main);">${m.claunName}</span><br>
                        <span style="font-size:10px; color:var(--text-muted); font-weight:500;">(${m.realName})</span>
                    </div>
                </div>
            </td>
            ${checkboxesHtml}
            <td style="text-align: center; padding: 12px 10px;">
                <input type="checkbox" ${m.isNew ? "checked" : ""} 
                       style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--success);" 
                       onchange="toggleIsNewFromTable(${JSON.stringify(m.id)})">
            </td>
            <td style="text-align: center; padding: 12px 10px;">
                <input type="checkbox" ${m.isSuspended ? "checked" : ""} 
                       style="width: 18px; height: 18px; cursor: pointer; accent-color: #f43f5e;" 
                       onchange="toggleIsSuspendedFromTable(${JSON.stringify(m.id)})">
            </td>
            <td style="padding: 12px 15px; font-weight: 700; text-align: center;">
                <span id="trainingScore-${m.id}" style="font-size: 13px;">${eligibility.attendedCount} / 4</span>
            </td>
            <td style="padding: 12px 15px; font-weight: 800; text-align: center; color: ${labelColor}; font-size: 12px;">
                <span id="trainingStatus-${m.id}">${labelText}</span>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ADMIN STRUCTURES AND SHIFTS MANAGEMENT LISTS RENDERERS & ACTIONS
function renderAdminStructuresList() {
    const tbody = document.getElementById("adminStructuresListBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    if (db.structures.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 13px;">
                    Nessuna struttura registrata.
                </td>
            </tr>
        `;
        return;
    }
    
    db.structures.forEach(st => {
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #f1f5f9";
        
        tr.innerHTML = `
            <td style="padding: 10px; font-size: 13px; font-weight: 700; color: var(--text-main);">
                ${st.name}
            </td>
            <td style="padding: 10px; font-size: 12px; color: var(--text-muted); font-weight: 500;">
                <strong>${st.ward}</strong><br>
                <span style="font-size: 11px;">${st.day} (${st.time})</span>
            </td>
            <td style="padding: 10px; text-align: center;">
                <button class="btn-delete-premium" onclick="deleteStructure('${st.id}')" title="Elimina Struttura">
                    🗑️
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderAdminShiftsList() {
    const tbody = document.getElementById("adminShiftsListBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    
    if (db.shifts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 13px;">
                    Nessun turno programmato.
                </td>
            </tr>
        `;
        return;
    }
    
    const sortedShifts = [...db.shifts].sort((a, b) => {
        const dateA = parseItalianDate(a.date);
        const dateB = parseItalianDate(b.date);
        if (dateA && dateB) return dateA - dateB;
        return a.id.localeCompare(b.id);
    });
    
    sortedShifts.forEach(sh => {
        const st = db.structures.find(s => s.id === sh.structureId);
        const structureName = st ? st.name : "Struttura sconosciuta";
        
        const tr = document.createElement("tr");
        tr.style.borderBottom = "1px solid #f1f5f9";
        
        const registeredCount = sh.members.length;
        const totalSpots = sh.maxSpots;
        const freeSpots = totalSpots - registeredCount;
        
        let spotsInfo = "";
        if (sh.maxExperiencedSpots !== undefined && sh.maxNewSpots !== undefined) {
            const expCount = sh.members.filter(mId => {
                const member = db.members.find(m => m.id === mId);
                return member && !member.isNew;
            }).length;
            const newCount = sh.members.filter(mId => {
                const member = db.members.find(m => m.id === mId);
                return member && member.isNew;
            }).length;
            
            const expFree = Math.max(0, sh.maxExperiencedSpots - expCount);
            const newFree = Math.max(0, sh.maxNewSpots - newCount);
            
            spotsInfo = `
                <div style="display: flex; flex-direction: column; gap: 2px; align-items: center;">
                    <span style="font-size: 13px; font-weight: 700; color: ${freeSpots === 0 ? "#94a3b8" : "var(--success)"};">${freeSpots} / ${totalSpots}</span>
                    <span style="font-size: 9px; color: var(--text-muted); font-weight: 500;">
                        Esp: ${expFree} • Nuovi: ${newFree}
                    </span>
                </div>
            `;
        } else {
            spotsInfo = `<span style="font-size: 13px; font-weight: 700; color: ${freeSpots === 0 ? "#94a3b8" : "var(--success)"};">${freeSpots} / ${totalSpots}</span>`;
        }
        
        tr.innerHTML = `
            <td style="padding: 10px; font-size: 12px; color: var(--text-main);">
                <strong style="font-size: 13px;">${structureName}</strong><br>
                <span style="color: var(--text-muted); font-weight: 500;">${sh.date} (${sh.time})</span>
            </td>
            <td style="padding: 10px; text-align: center; vertical-align: middle;">
                ${spotsInfo}
            </td>
            <td style="padding: 10px; text-align: center; vertical-align: middle;">
                <button class="btn-delete-premium" onclick="deleteShift('${sh.id}')" title="Annulla Turno">
                    🗑️
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteStructure(structureId) {
    const st = db.structures.find(s => s.id === structureId);
    if (!st) return;
    
    const confirmMessage = `Sei sicuro di voler eliminare la struttura "${st.name}"?\nATTENZIONE: TUTTI I TURNI ASSOCIALI VERRANNO CANCELLATI PERMANENTEMENTE!`;
    if (!confirm(confirmMessage)) return;
    
    // Cascade deletion: remove associated shifts and history records
    db.shifts = db.shifts.filter(s => s.structureId !== structureId);
    db.history = db.history.filter(h => h.structureId !== structureId);
    
    // Remove structure
    db.structures = db.structures.filter(s => s.id !== structureId);
    
    saveDatabase();
    
    // Refresh admin views
    renderDirettivo();
    
    showToast(`Struttura ed i relativi turni eliminati con successo!`, "info");
}

function deleteShift(shiftId) {
    const sh = db.shifts.find(s => s.id === shiftId);
    if (!sh) return;
    
    const st = db.structures.find(s => s.id === sh.structureId);
    const structureName = st ? st.name : "Turno";
    
    const confirmMessage = `Sei sicuro di voler cancellare il turno di "${structureName}" del ${sh.date}?\nTutti i volontari prenotati verranno disiscritti.`;
    if (!confirm(confirmMessage)) return;
    
    // Remove shift
    db.shifts = db.shifts.filter(s => s.id !== shiftId);
    
    saveDatabase();
    
    // Refresh admin views
    renderDirettivo();
    
    showToast(`Turno annullato con successo!`, "info");
}


function toggleTraining(memberId, index) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return;
    
    // Toggle Boolean
    member.trainings[index] = !member.trainings[index];
    saveDatabase();
    
    // Partially update UI row for smooth experience
    const eligibility = checkEligibility(memberId);
    const scoreEl = document.getElementById(`trainingScore-${memberId}`);
    const statusEl = document.getElementById(`trainingStatus-${memberId}`);
    
    if (scoreEl && statusEl) {
        scoreEl.textContent = `${eligibility.attendedCount} / 4`;
        if (eligibility.status === "eligible") {
            statusEl.textContent = "🟢 Idoneo";
            statusEl.parentElement.style.color = "var(--success)";
        } else if (eligibility.status === "warning") {
            statusEl.textContent = "🟡 A Rischio";
            statusEl.parentElement.style.color = "var(--warning)";
        } else {
            statusEl.textContent = "🔴 Bloccato";
            statusEl.parentElement.style.color = "#ef4444";
        }
    }
    
    const blockedCount = db.members.filter(m => checkEligibility(m.id).status === "blocked").length;
    const warningCount = db.members.filter(m => checkEligibility(m.id).status === "warning").length;
    const statEl = document.getElementById("adminStatBlocked");
    if (statEl) statEl.textContent = `${blockedCount} / ${warningCount}`;
    
    showToast(`Presenze di ${member.claunName} aggiornate!`);
}

// TOGGLE VOLUNTEER TYPE ('isNew') LOGIC
function toggleIsNew(memberId) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return;
    
    member.isNew = !member.isNew;
    saveDatabase();
    
    showToast(`${member.claunName} impostato come ${member.isNew ? "Nuovo Volontario 🔰" : "Volontario Esperto 🚀"}`);
    
    // Synchronize rendering across views
    const searchInput = document.getElementById("moliniSearchInput");
    if (document.getElementById("moliniGrid")) {
        renderMolini(searchInput ? searchInput.value : "");
    }
    if (document.getElementById("trainingAttendanceBody")) {
        renderTrainingAttendanceTable();
    }
}

function toggleIsNewFromTable(memberId) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return;
    
    member.isNew = !member.isNew;
    saveDatabase();
    
    showToast(`${member.claunName} impostato come ${member.isNew ? "Nuovo Volontario 🔰" : "Volontario Esperto 🚀"}`);
    
    // Synchronize rendering across views
    const searchInput = document.getElementById("moliniSearchInput");
    if (document.getElementById("moliniGrid")) {
        renderMolini(searchInput ? searchInput.value : "");
    }
    if (document.getElementById("trainingAttendanceBody")) {
        renderTrainingAttendanceTable();
    }
}

// TOGGLE SUSPENSION ('isSuspended') LOGIC
function toggleIsSuspended(memberId) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return;
    
    member.isSuspended = !member.isSuspended;
    saveDatabase();
    
    showToast(`${member.claunName} è stato ${member.isSuspended ? "Sospeso dall'attività ⛔" : "Riattivato con successo! 🟢"}`);
    
    // Synchronize rendering across views
    const searchInput = document.getElementById("moliniSearchInput");
    if (document.getElementById("moliniGrid")) {
        renderMolini(searchInput ? searchInput.value : "");
    }
    if (document.getElementById("trainingAttendanceBody")) {
        renderTrainingAttendanceTable();
    }
    if (document.getElementById("shiftsContainer")) {
        renderShifts();
    }
}

function toggleIsSuspendedFromTable(memberId) {
    const member = db.members.find(m => m.id === memberId);
    if (!member) return;
    
    member.isSuspended = !member.isSuspended;
    saveDatabase();
    
    showToast(`${member.claunName} è stato ${member.isSuspended ? "Sospeso dall'attività ⛔" : "Riattivato con successo! 🟢"}`);
    
    // Synchronize rendering across views
    const searchInput = document.getElementById("moliniSearchInput");
    if (document.getElementById("moliniGrid")) {
        renderMolini(searchInput ? searchInput.value : "");
    }
    if (document.getElementById("trainingAttendanceBody")) {
        renderTrainingAttendanceTable();
    }
    if (document.getElementById("shiftsContainer")) {
        renderShifts();
    }
}

// SPOT SELECTION FORM SYNCHRONIZERS
function syncCreateShiftSpots() {
    const exp = parseInt(document.getElementById("adminShiftExperiencedSpots").value) || 0;
    const newS = parseInt(document.getElementById("adminShiftNewSpots").value) || 0;
    document.getElementById("adminShiftSpots").value = exp + newS;
}

function syncGenerateCalendarSpots() {
    const exp = parseInt(document.getElementById("calendarExperiencedSpots").value) || 0;
    const newS = parseInt(document.getElementById("calendarNewSpots").value) || 0;
    document.getElementById("calendarSpots").value = exp + newS;
}


// MASSIVE SHIFT CALENDAR GENERATION LOGIC
function getDatesOfWeekday(year, month, weekdayIndex) {
    const dates = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
        if (date.getDay() === weekdayIndex) {
            dates.push(new Date(date));
        }
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

function handleGenerateCalendar(e) {
    e.preventDefault();
    const structureId = document.getElementById("calendarStructure").value;
    const yearMonth = document.getElementById("calendarMonth").value; // "YYYY-MM"
    const weekdayIndex = parseInt(document.getElementById("calendarWeekday").value);
    const timeInput = document.getElementById("calendarTime").value.trim();
    const maxExperiencedSpots = parseInt(document.getElementById("calendarExperiencedSpots").value);
    const maxNewSpots = parseInt(document.getElementById("calendarNewSpots").value);
    const maxSpots = parseInt(document.getElementById("calendarSpots").value);
    
    if (!structureId || !yearMonth || isNaN(weekdayIndex) || !timeInput || isNaN(maxSpots) || isNaN(maxExperiencedSpots) || isNaN(maxNewSpots)) {
        showToast("Compila tutti i campi di pianificazione!", "error");
        return;
    }
    
    const parts = yearMonth.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // 0-indexed months
    
    // Generate dates
    const dates = getDatesOfWeekday(year, month, weekdayIndex);
    
    if (dates.length === 0) {
        showToast("Nessun giorno corrispondente trovato per il mese selezionato!", "error");
        return;
    }
    
    let generatedCount = 0;
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    
    dates.forEach(d => {
        const dateFormatted = d.toLocaleDateString("it-IT", options);
        const dateString = dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);
        
        // Skip if shift at same date/time/structure already exists
        const exists = db.shifts.some(s => s.structureId === structureId && s.date === dateString && s.time === timeInput);
        
        if (!exists) {
            const newShift = {
                id: "s_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
                structureId: structureId,
                date: dateString,
                time: timeInput,
                maxSpots: maxSpots,
                maxExperiencedSpots: maxExperiencedSpots,
                maxNewSpots: maxNewSpots,
                members: []
            };
            db.shifts.push(newShift);
            generatedCount++;
        }
    });
    
    saveDatabase();
    
    // Reset fields
    document.getElementById("calendarStructure").value = "";
    document.getElementById("calendarMonth").value = "";
    document.getElementById("calendarWeekday").value = "";
    document.getElementById("calendarExperiencedSpots").value = "3";
    document.getElementById("calendarNewSpots").value = "1";
    document.getElementById("calendarSpots").value = "4";
    
    renderDirettivo();
    showToast(`Generatore: Creati con successo ${generatedCount} nuovi turni di servizio! 🗓️`);
}


// NEW STRUCTURE INSERTION LOGIC
function handleCreateStructure(e) {
    e.preventDefault();
    const name = document.getElementById("structName").value.trim();
    const ward = document.getElementById("structWard").value.trim();
    const day = document.getElementById("structDay").value.trim();
    const time = document.getElementById("structTime").value.trim();
    const icon = document.getElementById("structIcon").value.trim() || "🏥";
    
    if (!name || !ward || !day || !time) {
        showToast("Compila tutti i campi obbligatori per la struttura!", "error");
        return;
    }
    
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    
    // Verify unique id
    if (db.structures.some(s => s.id === id)) {
        showToast("Una struttura con un nome simile è già presente!", "error");
        return;
    }
    
    const newStructure = {
        id, name, ward, day, time, icon
    };
    
    db.structures.push(newStructure);
    saveDatabase();
    
    // Reset Form
    document.getElementById("structName").value = "";
    document.getElementById("structWard").value = "";
    document.getElementById("structDay").value = "";
    document.getElementById("structTime").value = "15:00 - 18:00";
    document.getElementById("structIcon").value = "🏥";
    
    // Reload selectors if viewing direttivo
    renderDirettivo();
    showToast(`Nuova struttura "${name}" registrata con successo!`);
}


// STANDARD SINGLE SHIFT CREATION (ADMIN PANEL)
function handleCreateShift(e) {
    e.preventDefault();
    const structureId = document.getElementById("adminShiftStructure").value;
    const dateInput = document.getElementById("adminShiftDate").value;
    const timeInput = document.getElementById("adminShiftTime").value;
    const maxExperiencedSpots = parseInt(document.getElementById("adminShiftExperiencedSpots").value);
    const maxNewSpots = parseInt(document.getElementById("adminShiftNewSpots").value);
    const maxSpots = parseInt(document.getElementById("adminShiftSpots").value);
    
    if (!structureId || !dateInput || !timeInput || isNaN(maxSpots) || isNaN(maxExperiencedSpots) || isNaN(maxNewSpots)) {
        showToast("Compila tutti i campi del turno!", "error");
        return;
    }
    
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    const dateFormatted = new Date(dateInput).toLocaleDateString("it-IT", options);
    const dateString = dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);
    
    const newShift = {
        id: "s_" + Date.now(),
        structureId: structureId,
        date: dateString,
        time: timeInput,
        maxSpots: maxSpots,
        maxExperiencedSpots: maxExperiencedSpots,
        maxNewSpots: maxNewSpots,
        members: []
    };
    
    db.shifts.push(newShift);
    saveDatabase();
    
    // Reset Form
    document.getElementById("adminShiftStructure").value = "";
    document.getElementById("adminShiftDate").value = "";
    document.getElementById("adminShiftTime").value = "15:00 - 18:00";
    document.getElementById("adminShiftExperiencedSpots").value = "3";
    document.getElementById("adminShiftNewSpots").value = "1";
    document.getElementById("adminShiftSpots").value = "4";
    
    renderDirettivo();
    showToast("Nuovo turno singolo programmato!");
}

// NOTICE BOARD ANNOUNCEMENT
function handleCreateAnnouncement(e) {
    e.preventDefault();
    const title = document.getElementById("adminAnnTitle").value.trim();
    const body = document.getElementById("adminAnnBody").value.trim();
    const isUrgent = document.getElementById("adminAnnUrgent").checked;
    const category = document.getElementById("adminAnnCategory").value;
    
    if (!title || !body) {
        showToast("Compila titolo e testo dell'annuncio!", "error");
        return;
    }
    
    const newAnnouncement = {
        id: "a_" + Date.now(),
        title: title,
        date: new Date().toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" }),
        body: body,
        isUrgent: isUrgent,
        category: category
    };
    
    db.announcements.unshift(newAnnouncement);
    saveDatabase();
    
    // Reset Form
    document.getElementById("adminAnnTitle").value = "";
    document.getElementById("adminAnnBody").value = "";
    document.getElementById("adminAnnUrgent").checked = false;
    document.getElementById("adminAnnCategory").value = "comunicazioni";
    
    // Update views dynamically
    renderDashboard();
    renderDirettivo();
    
    showToast("Nuovo avviso pubblicato in bacheca!");
}


// ON APP STARTUP
window.addEventListener("DOMContentLoaded", () => {
    initDatabase();
    checkSession();
    
    // Event listeners
    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    
    // Forms handlers inside board admin
    document.getElementById("adminCreateStructForm").addEventListener("submit", handleCreateStructure);
    document.getElementById("adminGenerateCalendarForm").addEventListener("submit", handleGenerateCalendar);
    
    // Setup Navigation routing
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = link.getAttribute("data-view");
            switchView(view);
        });
    });
    
    document.querySelectorAll(".bottom-nav-item").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const view = link.getAttribute("data-view");
            switchView(view);
        });
    });
});


/* ==========================================================================
   CALENDAR UTILITIES & RENDERING ENGINE
   ========================================================================== */

// Decodes standard Italian written date string e.g. "Sabato 13 Giugno 2026" back to standard JS Date object
function parseItalianDate(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split(" ");
    let day = null;
    let year = null;
    let monthName = "";
    
    const months = {
        "gennaio": 0, "febbraio": 1, "marzo": 2, "aprile": 3, "maggio": 4, "giugno": 5,
        "luglio": 6, "agosto": 7, "settembre": 8, "ottobre": 9, "novembre": 10, "dicembre": 11
    };
    
    parts.forEach(p => {
        const clean = p.trim().toLowerCase();
        if (!clean) return;
        if (/^\d+$/.test(clean)) {
            const num = parseInt(clean);
            if (num <= 31) {
                day = num;
            } else if (num > 1000) {
                year = num;
            }
        } else if (months[clean] !== undefined) {
            monthName = clean;
        }
    });
    
    if (day !== null && year !== null && monthName) {
        return new Date(year, months[monthName], day);
    }
    return null;
}

// Renders the main calendar grid
function renderCalendar() {
    syncCalendarDropdowns();
    
    // Set text month header
    document.getElementById("calendarMonthTitle").textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
    
    // Get first day of active month
    const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1);
    // Find weekday index (Mon=0, Tue=1 ... Sun=6)
    let startDayIndex = firstDay.getDay() - 1;
    if (startDayIndex < 0) startDayIndex = 6;
    
    // Find total days in active month
    const totalDays = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();
    
    // Find total days in previous month
    const totalDaysPrev = new Date(currentCalendarYear, currentCalendarMonth, 0).getDate();
    
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";
    
    const today = new Date();
    const isAdmin = (currentUser.role === "admin");
    
    // Hide mobile details list by default when month changes or is re-rendered
    document.getElementById("mobileDayShiftsContainer").classList.add("hidden");
    
    // Loop over the 42 cells (6 rows * 7 days) of month grid
    for (let i = 0; i < 42; i++) {
        let cellDay, cellMonth, cellYear, isSiblingMonth = false;
        
        if (i < startDayIndex) {
            // Previous month trailing padding days
            cellDay = totalDaysPrev - startDayIndex + i + 1;
            cellMonth = currentCalendarMonth - 1;
            cellYear = currentCalendarYear;
            if (cellMonth < 0) {
                cellMonth = 11;
                cellYear--;
            }
            isSiblingMonth = true;
        } else if (i >= startDayIndex + totalDays) {
            // Next month leading padding days
            cellDay = i - startDayIndex - totalDays + 1;
            cellMonth = currentCalendarMonth + 1;
            cellYear = currentCalendarYear;
            if (cellMonth > 11) {
                cellMonth = 0;
                cellYear++;
            }
            isSiblingMonth = true;
        } else {
            // Active month days
            cellDay = i - startDayIndex + 1;
            cellMonth = currentCalendarMonth;
            cellYear = currentCalendarYear;
        }
        
        const isToday = (cellYear === today.getFullYear() && cellMonth === today.getMonth() && cellDay === today.getDate());
        
        // Match shifts scheduled for this specific day
        const dayShifts = db.shifts.filter(sh => {
            const pDate = parseItalianDate(sh.date);
            return pDate && 
                   pDate.getFullYear() === cellYear && 
                   pDate.getMonth() === cellMonth && 
                   pDate.getDate() === cellDay;
        });
        
        const cellClass = `calendar-day ${isSiblingMonth ? "sibling-month" : ""} ${isToday ? "today" : ""} ${isAdmin && !isSiblingMonth ? "admin-clickable" : ""}`;
        const dateKey = `${cellYear}-${cellMonth + 1}-${cellDay}`;
        
        let eventsHtml = "";
        let dotsHtml = "";
        
        dayShifts.forEach(sh => {
            const structure = db.structures.find(st => st.id === sh.structureId);
            if (!structure) return;
            
            const isJoined = sh.members.includes(currentUser.id);
            const freeSpots = sh.maxSpots - sh.members.length;
            const isFull = freeSpots <= 0;
            
            let statusClass = "event-available";
            let dotClass = "dot-available";
            let tooltipText = `${structure.name} - ${sh.time} (${freeSpots} posti liberi)`;
            
            if (isJoined) {
                statusClass = "event-joined";
                dotClass = "dot-joined";
                tooltipText = `${structure.name} - ${sh.time} (Sei iscritto! 🔴)`;
            } else if (isFull) {
                statusClass = "event-full";
                dotClass = "dot-full";
                tooltipText = `${structure.name} - ${sh.time} (Turno completo)`;
            }
            
            eventsHtml += `
                <div class="calendar-event ${statusClass}" onclick="event.stopPropagation(); openCalendarShiftDetails('${sh.id}')" title="${tooltipText}">
                    <span style="font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${structure.name.split(" di ")[0]}</span>
                    <span style="font-size: 8.5px; opacity: 0.8; margin-left: auto;">${sh.time.split(" ")[0]}</span>
                </div>
            `;
            
            dotsHtml += `<span class="day-dot ${dotClass}" title="${tooltipText}"></span>`;
        });
        
        const dayCell = document.createElement("div");
        dayCell.className = cellClass;
        
        const isClickableAdmin = isAdmin && !isSiblingMonth;
        dayCell.setAttribute("onclick", `handleDayCellClick(this, '${dateKey}', ${isClickableAdmin})`);
        
        dayCell.innerHTML = `
            <div class="day-number-wrapper">
                <span class="day-number">${cellDay}</span>
            </div>
            <div class="calendar-day-events">
                ${eventsHtml}
            </div>
            <div class="day-dots-container">
                ${dotsHtml}
            </div>
        `;
        
        grid.appendChild(dayCell);
    }
}

// Navigation arrows: Previous or Next Month
function changeMonth(dir) {
    currentCalendarMonth += dir;
    if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
    } else if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
    }
    syncCalendarDropdowns();
    renderCalendar();
}

// Today navigation button
function goToday() {
    const today = new Date();
    currentCalendarMonth = today.getMonth();
    currentCalendarYear = today.getFullYear();
    syncCalendarDropdowns();
    renderCalendar();
}

// Syncs select elements with the active states
function syncCalendarDropdowns() {
    document.getElementById("selectCalendarMonth").value = currentCalendarMonth;
    document.getElementById("selectCalendarYear").value = currentCalendarYear;
}

// Drops selects fast jumping
function handleQuickSelectDate() {
    currentCalendarMonth = parseInt(document.getElementById("selectCalendarMonth").value);
    currentCalendarYear = parseInt(document.getElementById("selectCalendarYear").value);
    renderCalendar();
}

// Interaction clicks on calendar days
function handleDayCellClick(element, dateKey, isDirectAdminClick) {
    // 1. Remove selected visual border on other cells
    document.querySelectorAll(".calendar-day").forEach(c => c.classList.remove("selected-day"));
    
    // 2. Select current clicked cell
    element.classList.add("selected-day");
    
    // 3. Render mobile shifts view below
    renderMobileDayShifts(dateKey);
    
    // 4. Pro-feature: Admin click empty cell to pre-populate shift creator
    if (isDirectAdminClick && currentUser.role === "admin") {
        // If clicking on an empty/near-empty cell on desktop
        const parts = dateKey.split("-");
        const yr = parts[0];
        const mo = parts[1].padStart(2, "0");
        const dy = parts[2].padStart(2, "0");
        const formattedDate = `${yr}-${mo}-${dy}`;
        
        switchView("direttivo");
        const dateInput = document.getElementById("adminShiftDate");
        if (dateInput) {
            dateInput.value = formattedDate;
        }
        showToast(`Giorno selezionato: ${dy}/${mo}/${yr}. Completa la pianificazione! 🗓️`);
    }
}

// Populates and shows the daily shifts below the calendar (highly useful on mobile)
function renderMobileDayShifts(dateKey) {
    const parts = dateKey.split("-");
    const yr = parseInt(parts[0]);
    const mo = parseInt(parts[1]) - 1;
    const dy = parseInt(parts[2]);
    
    const dayShifts = db.shifts.filter(sh => {
        const pDate = parseItalianDate(sh.date);
        return pDate && 
               pDate.getFullYear() === yr && 
               pDate.getMonth() === mo && 
               pDate.getDate() === dy;
    });
    
    const container = document.getElementById("mobileDayShiftsContainer");
    const list = document.getElementById("mobileDayShiftsList");
    const title = document.getElementById("mobileDayShiftsTitle");
    
    title.textContent = `Turni del giorno: ${dy} ${monthNames[mo]} ${yr}`;
    list.innerHTML = "";
    
    if (dayShifts.length === 0) {
        list.innerHTML = `<p class="shift-member-empty" style="text-align: center; padding: 15px 0;">Nessun turno programmato per questo giorno.</p>`;
    } else {
        dayShifts.forEach(sh => {
            const structure = db.structures.find(st => st.id === sh.structureId);
            if (!structure) return;
            
            const isJoined = sh.members.includes(currentUser.id);
            const freeSpots = sh.maxSpots - sh.members.length;
            const isFull = freeSpots <= 0;
            
            let cardClass = "available";
            let statusText = `${freeSpots} posti disponibili`;
            
            if (isJoined) {
                cardClass = "joined";
                statusText = "Mio Turno! 🔴";
            } else if (isFull) {
                cardClass = "full";
                statusText = "Turno Completo";
            }
            
            const div = document.createElement("div");
            div.className = `mobile-shift-card ${cardClass}`;
            div.innerHTML = `
                <div class="mobile-shift-info" onclick="openCalendarShiftDetails('${sh.id}')" style="cursor: pointer;">
                    <div class="mobile-shift-struct">${structure.name}</div>
                    <div class="mobile-shift-time">🕒 ${sh.time} • Reparto: ${structure.ward}</div>
                    <div class="mobile-shift-spots ${cardClass}">${statusText}</div>
                </div>
            `;
            list.appendChild(div);
        });
    }
    
    container.classList.remove("hidden");
}

// Opens the calendar detail modal popup
function openCalendarShiftDetails(shiftId) {
    const sh = db.shifts.find(s => s.id === shiftId);
    if (!sh) return;
    
    const structure = db.structures.find(st => st.id === sh.structureId);
    if (!structure) return;
    
    const isJoined = sh.members.includes(currentUser.id);
    const freeSpots = sh.maxSpots - sh.members.length;
    const isFull = freeSpots <= 0;
    
    const eligibility = checkEligibility(currentUser.id);
    const isBlocked = eligibility.status === "blocked";
    const isSuspended = eligibility.status === "suspended";
    
    // Quota calculations
    const maxExp = sh.maxExperiencedSpots !== undefined ? sh.maxExperiencedSpots : sh.maxSpots;
    const maxNew = sh.maxNewSpots !== undefined ? sh.maxNewSpots : 0;
    
    const enrolledNew = sh.members.filter(mId => {
        const m = db.members.find(mem => mem.id === mId);
        return m ? m.isNew : false;
    }).length;
    const enrolledExperienced = sh.members.length - enrolledNew;
    
    const isUserNew = currentUser.isNew || false;
    
    // List enrolled members with type icons removed
    let membersHtml = "";
    if (sh.members.length === 0) {
        membersHtml = `<span class="shift-member-empty">Nessun volontario iscritto. Sii il primo! 🎈</span>`;
    } else {
        sh.members.forEach(mId => {
            const member = db.members.find(m => m.id === mId);
            if (member) {
                membersHtml += `
                    <div class="shift-member-chip" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; background-color: var(--bg-app); border-radius: 8px;" title="${member.isNew ? 'Nuovo Volontario' : 'Volontario Esperto'}">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <img src="${member.avatar}" alt="${member.claunName}" class="shift-member-avatar" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
                            <div>
                                <p style="font-size: 12px; font-weight: 700; margin: 0; color: var(--text-main);">${member.claunName}</p>
                                <p style="font-size: 10px; color: var(--text-muted); margin: 0;">${member.realName}</p>
                            </div>
                        </div>
                        <span style="font-size: 11px; font-weight: 700; color: ${member.isNew ? '#02b174' : 'var(--primary)'}; background: ${member.isNew ? 'rgba(6,214,160,0.08)' : 'rgba(79,70,229,0.08)'}; padding: 2px 6px; border-radius: 4px;">
                            ${member.isNew ? 'Nuovo' : 'Esperto'}
                        </span>
                    </div>
                `;
            }
        });
    }
    
    // Form CTA Button with category quota checks
    let actionBtnHtml = "";
    if (isJoined) {
        actionBtnHtml = `<button class="btn-shift-action leave" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px;" onclick="handleCalendarShiftAction('${sh.id}', 'leave')">Cancella Iscrizione</button>`;
    } else if (isSuspended) {
        actionBtnHtml = `
            <button class="btn-shift-action join" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px; opacity: 0.5; background-color: #cbd5e1; color: #94a3b8; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled>Attività Sospesa ⛔</button>
            <p style="font-size: 11px; color: var(--accent); margin-top: 6px; text-align: center; font-weight: 700;">Sei attualmente sospeso dall'attività!</p>
        `;
    } else if (isBlocked) {
        actionBtnHtml = `
            <button class="btn-shift-action join" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px; opacity: 0.5; background-color: #cbd5e1; color: #94a3b8; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled>Iscrizione Bloccata 🔒</button>
            <p style="font-size: 11px; color: var(--accent); margin-top: 6px; text-align: center; font-weight: 700;">Presenza insufficiente agli allenamenti!</p>
        `;
    } else if (isFull) {
        actionBtnHtml = `<button class="btn-shift-action join" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px; opacity: 0.5; cursor: not-allowed;" disabled>Turno Completo</button>`;
    } else if (isUserNew && enrolledNew >= maxNew) {
        actionBtnHtml = `
            <button class="btn-shift-action join" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px; opacity: 0.5; background-color: #e2e8f0; color: #64748b; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled>Posti Nuovi Esauriti 🔒</button>
            <p style="font-size: 11px; color: var(--accent); margin-top: 6px; text-align: center; font-weight: 700;">Posti per Nuovi Volontari esauriti!</p>
        `;
    } else if (!isUserNew && enrolledExperienced >= maxExp) {
        actionBtnHtml = `
            <button class="btn-shift-action join" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px; opacity: 0.5; background-color: #e2e8f0; color: #64748b; cursor: not-allowed; border: 1.5px solid #cbd5e1;" disabled>Posti Esperti Esauriti 🔒</button>
            <p style="font-size: 11px; color: var(--accent); margin-top: 6px; text-align: center; font-weight: 700;">Posti per Volontari Esperti esauriti!</p>
        `;
    } else {
        actionBtnHtml = `<button class="btn-shift-action join" style="width: 100%; margin-top: 15px; padding: 12px; font-size: 13px;" onclick="handleCalendarShiftAction('${sh.id}', 'join')">Iscriviti al Turno 🔴</button>`;
    }
    
    const spotsBreakdownHtml = `
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; align-items: center;">
            <span class="spots-pill total" style="padding: 4px 10px; font-size: 12px;" title="Posti occupati / totali">Totali: ${sh.members.length} / ${sh.maxSpots}</span>
            <span class="spots-pill experienced" style="padding: 4px 10px; font-size: 12px;" title="Posti riservati ai Volontari Esperti">Esperti: ${enrolledExperienced} / ${maxExp}</span>
            ${maxNew > 0 ? `<span class="spots-pill new" style="padding: 4px 10px; font-size: 12px;" title="Posti riservati ai Nuovi Volontari">Nuovi: ${enrolledNew} / ${maxNew}</span>` : ''}
        </div>
    `;

    let leaderHtml = "";
    if (sh.shiftLeaderId) {
        const leader = db.members.find(m => m.id === sh.shiftLeaderId);
        if (leader) {
            const isMe = leader.id === currentUser.id ? " (Tu)" : "";
            leaderHtml = `
                <div class="shift-leader-badge" style="margin-top: 10px; display: flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 700; color: #b45309; background: rgba(245, 158, 11, 0.08); padding: 6px 10px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                    👑 Capoturno: ${leader.claunName}${isMe}
                </div>
            `;
        }
    } else if (sh.members.includes(currentUser.id) && currentUser.wantsShiftLeader) {
        leaderHtml = `
            <button class="btn-shift-action" style="width: 100%; margin-top: 10px; padding: 6px; font-size: 11.5px; background: linear-gradient(135deg, #f59e0b, #d97706); border: none; color: white;" onclick="assignAsShiftLeader('${sh.id}')">
                🙋 Assumi Ruolo Capoturno
            </button>
        `;
    }
    
    let validationBtnHtml = "";
    if (sh.shiftLeaderId === currentUser.id && !sh.isValidated) {
        validationBtnHtml = `
            <button class="btn-shift-action" style="width: 100%; margin-top: 8px; background: linear-gradient(135deg, var(--success), #059669); border: none; color: white;" onclick="openValidateAttendanceModal('${sh.id}')">
                ✅ Valida Presenze
            </button>
        `;
    }

    const modalBody = document.getElementById("calModalBody");
    modalBody.innerHTML = `
        <div style="background: rgba(79, 70, 229, 0.03); border-radius: var(--border-radius-sm); padding: 12px 15px; border-left: 4px solid var(--primary);">
            <p style="font-size: 14px; font-weight: 800; color: var(--text-main); margin: 0 0 5px 0; display: flex; align-items: center; gap: 6px;">
                ${structure.name}
            </p>
            <p style="font-size: 12px; color: var(--text-muted); margin: 0 0 5px 0;"><strong>Reparto:</strong> ${structure.ward}</p>
            <p style="font-size: 12px; color: var(--text-muted); margin: 0;"><strong>Orario:</strong> ${sh.time}</p>
        </div>
        
        <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 5px; letter-spacing: 0.5px;">Data Servizio</p>
            <p style="font-size: 13.5px; font-weight: 700; color: var(--text-main); margin: 0;">📅 ${sh.date}</p>
        </div>

        <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 5px; letter-spacing: 0.5px;">Ripartizione Posti Disponibili</p>
            ${spotsBreakdownHtml}
        </div>

        <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 5px; letter-spacing: 0.5px;">Equipaggio di Turno</p>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
                ${membersHtml}
            </div>
        </div>
        
        ${leaderHtml}
        ${validationBtnHtml}
        ${actionBtnHtml}
    `;
    
    document.getElementById("calendarShiftModal").classList.remove("hidden");
}

function closeCalendarShiftModal() {
    document.getElementById("calendarShiftModal").classList.add("hidden");
}

// Dispatches shift join/leave action directly from calendar view
function handleCalendarShiftAction(shiftId, action) {
    if (action === "join") {
        joinShift(shiftId);
    } else {
        leaveShift(shiftId);
    }
    
    closeCalendarShiftModal();
    renderCalendar();
    
    // If we're on mobile view with selected day open, trigger click again to refresh layout
    const activeSelectedDay = document.querySelector(".calendar-day.selected-day");
    if (activeSelectedDay) {
        // Find the dateKey and simulate selection click
        const onclickAttr = activeSelectedDay.getAttribute("onclick");
        if (onclickAttr) {
            // Evaluates call e.g., handleDayCellClick(this, '2026-6-13', false)
            // Just running click() directly works beautifully
            activeSelectedDay.click();
        }
    }
    
    updateHeaderStats();
}


// RESET DATABASE UTILITY
function confirmResetDatabase() {
    if (confirm("Sei sicuro di voler ripristinare il database allo stato iniziale? Verranno eliminati tutti i turni, gli avvisi e i diari inseriti di recente.")) {
        localStorage.removeItem("mole_sorriso_db");
        localStorage.removeItem("mole_sorriso_session");
        showToast("Database ripristinato con successo! Ricarico l'applicazione...", "info");
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

