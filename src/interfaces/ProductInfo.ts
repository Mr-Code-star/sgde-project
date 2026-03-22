export interface ProductInfo {
    id: string;
    name: string;
    type: string; // cuaderno, polo, buzo
    size: string | null; // S, M, L, XL, etc. (solo para ropa)
}

export const PRODUCT_CATALOG: Record<string, ProductInfo> = {
    // =========================
    // 📚 CUADERNOS
    // =========================
    P20: { id: "P20", name: "Cuaderno Triple Reglon", type: "CUADERNO", size: null },
    P21: { id: "P21", name: "Cuaderno Cuadriculado", type: "CUADERNO", size: null },
    P22: { id: "P22", name: "Cuaderno Rayado", type: "CUADERNO", size: null },
    // =========================
    // 👕 POLOS PRIMARIA
    // =========================
    P01: { id: "P01", name: "Polo Talla 6", type: "POLO", size: "T6" },
    P04: { id: "P04", name: "Polo Talla 8", type: "POLO", size: "T8" },
    P07: { id: "P07", name: "Polo Talla 10", type: "POLO", size: "T10" },
    P10: { id: "P10", name: "Polo Talla 12", type: "POLO", size: "T12" },
    P13: { id: "P13", name: "Polo Talla 14", type: "POLO", size: "T14" },
    P16: { id: "P16", name: "Polo Talla 16", type: "POLO", size: "T16" },

    // =========================
    // 🧥 BUZO DELGADO PRIMARIA
    // =========================
    P02: { id: "P02", name: "Buzo Delgado Talla 6", type: "BUZO", size: "T6" },
    P05: { id: "P05", name: "Buzo Delgado Talla 8", type: "BUZO", size: "T8" },
    P08: { id: "P08", name: "Buzo Delgado Talla 10", type: "BUZO", size: "T10" },
    P11: { id: "P11", name: "Buzo Delgado Talla 12", type: "BUZO", size: "T12" },
    P14: { id: "P14", name: "Buzo Delgado Talla 14", type: "BUZO", size: "T14" },
    P17: { id: "P17", name: "Buzo Delgado Talla 16", type: "BUZO", size: "T16" },

    // =========================
    // 🧥 BUZO GRUESO PRIMARIA
    // =========================
    P03: { id: "P03", name: "Buzo Grueso Talla 8", type: "BUZO", size: "T8" },
    P06: { id: "P06", name: "Buzo Grueso Talla 10", type: "BUZO", size: "T10" },
    P09: { id: "P09", name: "Buzo Grueso Talla 12", type: "BUZO", size: "T12" },
    P12: { id: "P12", name: "Buzo Grueso Talla 14", type: "BUZO", size: "T14" },
    P15: { id: "P15", name: "Buzo Grueso Talla 16", type: "BUZO", size: "T16" },
    P18: { id: "P18", name: "Buzo Grueso Talla 18", type: "BUZO", size: "T18" },

    // =========================
    // 🎒 MOCHILAS
    // =========================
    P19: { id: "P19", name: "Mochila Escolar", type: "MOCHILA", size: null },

    // =========================
    // 📚 CUADERNOS SECUNDARIA
    // =========================
    S21: { id: "S21", name: "Cuaderno Cuadriculado Secundaria", type: "CUADERNO", size: null },
    S22: { id: "S22", name: "Cuaderno Rayado Secundaria", type: "CUADERNO", size: null },

    // =========================
    // 👕 POLOS SECUNDARIA
    // =========================
    S01: { id: "S01", name: "Polo Secundaria Talla S", type: "POLO", size: "S" },
    S04: { id: "S04", name: "Polo Secundaria Talla M", type: "POLO", size: "M" },
    S07: { id: "S07", name: "Polo Secundaria Talla L", type: "POLO", size: "L" },
    S10: { id: "S10", name: "Polo Secundaria Talla XL", type: "POLO", size: "XL" },

    // =========================
    // 🧥 BUZO DELGADO SECUNDARIA
    // =========================
    S02: { id: "S02", name: "Buzo Delgado Secundaria Talla S", type: "BUZO", size: "S" },
    S05: { id: "S05", name: "Buzo Delgado Secundaria Talla M", type: "BUZO", size: "M" },
    S08: { id: "S08", name: "Buzo Delgado Secundaria Talla L", type: "BUZO", size: "L" },
    S11: { id: "S11", name: "Buzo Delgado Secundaria Talla XL", type: "BUZO", size: "XL" },

    // =========================
    // 🧥 BUZO GRUESO SECUNDARIA
    // =========================
    S03: { id: "S03", name: "Buzo Grueso Secundaria Talla S", type: "BUZO", size: "S" },
    S06: { id: "S06", name: "Buzo Grueso Secundaria Talla M", type: "BUZO", size: "M" },
    S09: { id: "S09", name: "Buzo Grueso Secundaria Talla L", type: "BUZO", size: "L" },
    S12: { id: "S12", name: "Buzo Grueso Secundaria Talla XL", type: "BUZO", size: "XL" }
};