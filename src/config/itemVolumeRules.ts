export type BoxType = "CHICA" | "GRANDE"

type VolumeRule = Record<BoxType, number>

export const ITEM_VOLUME_RULES:  Record<string, VolumeRule> = {
    // =========================
    // 🧥 BUZO DELGADO
    // =========================
    P02: { CHICA: 0.00187425, GRANDE: 0.002243475 },
    P05: { CHICA: 0.0020825,  GRANDE: 0.00243475 },
    P08: { CHICA: 0.002342813, GRANDE: 0.002361553 },
    P11: { CHICA: 0.0026775,  GRANDE: 0.002361553 },
    P14: { CHICA: 0.002883462, GRANDE: 0.00249275 },
    P17: { CHICA: 0.00312375, GRANDE: 0.00249275 },

    S02: { CHICA: 0.00312375, GRANDE: 0.003204964 },
    S05: { CHICA: 0.003407727, GRANDE: 0.0034515 },
    S08: { CHICA: 0.0037485,  GRANDE: 0.00358956 },
    S11: { CHICA: 0.0037485,  GRANDE: 0.004079045 },

    // =========================
    // 🧥 BUZO GRUESO
    // =========================
    P03: { CHICA: 0.005355, GRANDE: 0.003323667 },
    P06: { CHICA: 0.005355, GRANDE: 0.003323667 },
    P09: { CHICA: 0.005355, GRANDE: 0.00358956 },
    P12: { CHICA: 0.0062475, GRANDE: 0.00358956 },
    P15: { CHICA: 0.0062475, GRANDE: 0.00358956 },
    P18: { CHICA: 0.0062475, GRANDE: 0.00358956 },

    S03: { CHICA: 0.0062475, GRANDE: 0.004079045 },
    S06: { CHICA: 0.0062475, GRANDE: 0.004079045 },
    S09: { CHICA: 0.0062475, GRANDE: 0.00448695 },
    S12: { CHICA: 0.0062475, GRANDE: 0.00448695 },

    // =========================
    // 👕 POLOS
    // =========================
    P01: { CHICA: 0.000604597, GRANDE: 0.00049855 },
    P04: { CHICA: 0.000604597, GRANDE: 0.000527876 },
    P07: { CHICA: 0.00062475,  GRANDE: 0.000543873 },
    P10: { CHICA: 0.00062475,  GRANDE: 0.000543873 },
    P13: { CHICA: 0.000642693, GRANDE: 0.000560869 },
    P16: { CHICA: 0.000642693, GRANDE: 0.000560869 },

    S01: { CHICA: 0.0007497,  GRANDE: 0.000640993 },
    S04: { CHICA: 0.0007497,  GRANDE: 0.0006903 },
    S07: { CHICA: 0.000780938, GRANDE: 0.000717912 },
    S10: { CHICA: 0.000780938, GRANDE: 0.000747825 },

    // =========================
    // 📚 CUADERNOS
    // =========================
    P20: { CHICA: 0.0007497, GRANDE: 0.00179478 },
    P21: { CHICA: 0.0007497, GRANDE: 0.00179478 },
    P22: { CHICA: 0.0007497, GRANDE: 0.00179478 },
    S13: { CHICA: 0.0007497, GRANDE: 0.00179478 },
    S14: { CHICA: 0.0007497, GRANDE: 0.00179478 },

    // =========================
    // 🎒 MOCHILA
    // =========================
    P19: { CHICA: 0.005355, GRANDE: 0.00448695 }

}