export type Level = "PRIMARIA" | "SECUNDARIA"
export type BoxType = "CHICA" | "GRANDE"

type Rule = Record<Level, Record<BoxType, number>>

export const BOX_RULES: Record<string, Rule> = {
    // =========================
    // 📚 CUADERNOS
    // =========================
    P20: {
        PRIMARIA: { CHICA: 50, GRANDE: 50 },
        SECUNDARIA: { CHICA: 50, GRANDE: 50 }
    },
    P21: {
        PRIMARIA: { CHICA: 50, GRANDE: 50 },
        SECUNDARIA: { CHICA: 50, GRANDE: 50 }
    },
    P22: {
        PRIMARIA: { CHICA: 50, GRANDE: 50 },
        SECUNDARIA: { CHICA: 50, GRANDE: 50 }
    },

    // =========================
    // 👕 POLOS PRIMARIA (Pxx)
    // =========================
    P01: {
        PRIMARIA: { CHICA: 62, GRANDE: 180 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P04: {
        PRIMARIA: { CHICA: 62, GRANDE: 170 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P07: {
        PRIMARIA: { CHICA: 60, GRANDE: 165 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P10: {
        PRIMARIA: { CHICA: 60, GRANDE: 165 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P13: {
        PRIMARIA: { CHICA: 58, GRANDE: 160 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P16: {
        PRIMARIA: { CHICA: 58, GRANDE: 160 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },

    // =========================
    // 🧥 BUZO DELGADO PRIMARIA
    // =========================
    P02: {
        PRIMARIA: { CHICA: 20, GRANDE: 40 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P05: {
        PRIMARIA: { CHICA: 18, GRANDE: 40 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P08: {
        PRIMARIA: { CHICA: 16, GRANDE: 38 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P11: {
        PRIMARIA: { CHICA: 14, GRANDE: 38 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P14: {
        PRIMARIA: { CHICA: 13, GRANDE: 36 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P17: {
        PRIMARIA: { CHICA: 12, GRANDE: 36 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },

    // =========================
    // 🧥 BUZO GRUESO PRIMARIA
    // =========================
    P03: {
        PRIMARIA: { CHICA: 7, GRANDE: 27 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P06: {
        PRIMARIA: { CHICA: 7, GRANDE: 27 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P09: {
        PRIMARIA: { CHICA: 7, GRANDE: 25 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P12: {
        PRIMARIA: { CHICA: 6, GRANDE: 25 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P15: {
        PRIMARIA: { CHICA: 6, GRANDE: 25 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },
    P18: {
        PRIMARIA: { CHICA: 6, GRANDE: 25 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },

    // =========================
    // 🎒 MOCHILAS
    // =========================
    P19: {
        PRIMARIA: { CHICA: 7, GRANDE: 20 },
        SECUNDARIA: { CHICA: 0, GRANDE: 0 }
    },

    // =========================
    // 🎓 SECUNDARIA (Sxx)
    // =========================

    // 👕 POLOS
    S01: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 50, GRANDE: 140 }
    },
    S04: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 50, GRANDE: 130 }
    },
    S07: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 48, GRANDE: 125 }
    },
    S10: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 48, GRANDE: 120 }
    },

    // 🧥 BUZO DELGADO
    S02: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 12, GRANDE: 28 }
    },
    S05: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 11, GRANDE: 26 }
    },
    S08: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 10, GRANDE: 25 }
    },
    S11: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 10, GRANDE: 22 }
    },

    // 🧥 BUZO GRUESO
    S03: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 6, GRANDE: 22 }
    },
    S06: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 6, GRANDE: 22 }
    },
    S09: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 6, GRANDE: 20 }
    },
    S12: {
        PRIMARIA: { CHICA: 0, GRANDE: 0 },
        SECUNDARIA: { CHICA: 6, GRANDE: 20 }
    }
}