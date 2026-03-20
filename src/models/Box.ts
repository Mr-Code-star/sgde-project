import {OrderItem} from "./OrderItem";

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
}