import {OrderItem} from "./OrderItem";
import {BOX_RULES, Level} from "../config/boxRules";

export class Box {
    public items: OrderItem[] = []; // Lista de productos en la caja

    // constructor para inicializar la caja con su id, capacidad, cantidad restante y nivel educativo
    constructor(
        public id: string,
        public capacity: number, // Capacidad máxima de la caja
        public remaining: number, // Cantidad restante de espacio en la caja
        public level: "PRIMARIA" | "SECUNDARIA"
    ) {}

    // Método para agregar un producto a la caja
    addItem(item: OrderItem): boolean { // Recibe un producto a agregar
        if (item.quantity <= this.remaining) { //  Verificar si hay suficiente espacio para agregar el producto
            this.items.push(item); // Agregar el producto a la caja
            this.remaining -= item.quantity; // Reducir el espacio restante
            return true; // Producto agregado exitosamente
        }
        return false; // No hay suficiente espacio para agregar el producto
    }

    // Método para verificar si un producto puede caber en la caja según las reglas de capacidad por producto
    canFit(item: OrderItem): boolean {
        if (this.remaining < item.quantity) return false

        const rule = BOX_RULES[item.product.id]
        if (!rule) return false

        const maxPerBox = rule[this.level].GRANDE

        // 🔹 contar cuánto ya hay de ese producto en la caja
        const currentQty = this.items
            .filter(i => i.product.id === item.product.id)
            .reduce((sum, i) => sum + i.quantity, 0)

        // 🔥 validar límite por producto
        return currentQty + item.quantity <= maxPerBox
    }
}