import { Level } from "../config/boxRules";

export function getLevelFromProductId(productId: string): Level {
    if (productId.startsWith("P")) return "PRIMARIA";
    if (productId.startsWith("S")) return "SECUNDARIA";
    throw new Error(`No se puede determinar el nivel para el producto ${productId}`);
}