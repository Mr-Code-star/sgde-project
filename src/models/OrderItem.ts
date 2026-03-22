// OrderItem.ts
import { Product } from "./Product";
import { PRODUCT_CATALOG } from "../interfaces/ProductInfo";
import { getLevelFromProductId } from "../utils/levelUtils";

export class OrderItem {
    public product: Product;
    public quantity: number;
    public level: "PRIMARIA" | "SECUNDARIA";

    constructor(productId: string, quantity: number) {
        const productInfo = PRODUCT_CATALOG[productId];
        if (!productInfo) {
            throw new Error(`Producto con ID ${productId} no encontrado en el catálogo`);
        }
        this.product = new Product(
            productInfo.id,
            productInfo.name,
            productInfo.type,
            productInfo.size
        );
        this.quantity = quantity;
        this.level = getLevelFromProductId(productId);
    }
}