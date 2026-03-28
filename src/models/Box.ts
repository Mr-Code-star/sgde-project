import { OrderItem } from "./OrderItem"
import { BOX_RULES } from "../config/boxRules"
import { ITEM_VOLUME_RULES } from "../config/itemVolumeRules"
import { Level } from "../config/boxRules"

export class Box {
    public items: OrderItem[] = []  // productos dentro de la caja
    public currentVolume: number = 0 // volumen actual ocupado

    constructor(
        public id: string, // ID único de la caja
        public capacity: number, // capacidad máxima en cantidad
        public remaining: number, // cantidad restante disponible
        public level: Level, // nivel educativo (PRIMARIA o SECUNDARIA)
        public type: "CHICA" | "GRANDE" // tipo de caja
    ) {}

    addItem(item: OrderItem) {
        this.items.push(item) // agregar el producto a la caja
        this.remaining -= item.quantity // actualizar la cantidad restante

        const volumePerUnit =
            ITEM_VOLUME_RULES[item.product.id][this.type] // obtener el volumen por unidad según el producto y tipo de caja

        this.currentVolume += volumePerUnit * item.quantity // actualizar el volumen ocupado
    }

    // 🔥 VALIDACIÓN COMPLETA (CANTIDAD + VOLUMEN)
    canFit(item: OrderItem): boolean {
        const rule = BOX_RULES[item.product.id] // 🔹 validar que exista una regla para el producto
        if (!rule) return false // si no hay regla, no se puede empacar

        // 🔹 validar cantidad
        if (this.remaining < item.quantity) return false // si no hay suficiente espacio en cantidad, no se puede empacar

        const maxPerBox = rule[this.level].GRANDE // obtener la cantidad máxima permitida por caja según el nivel y tipo de caja


        const currentQty = this.items // calcular la cantidad actual del mismo producto en la caja
            .filter(i => i.product.id === item.product.id) // solo considerar el mismo producto
            .reduce((sum, i) => sum + i.quantity, 0)  // sumar las cantidades de ese producto en la caja

        if (currentQty + item.quantity > maxPerBox) return false // si la cantidad total excede el máximo permitido, no se puede empacar

        // 🔥 validar volumen
        const volumePerUnit =
            ITEM_VOLUME_RULES[item.product.id][this.type] // obtener el volumen por unidad según el producto y tipo de caja

        const newVolume = this.currentVolume + volumePerUnit * item.quantity // calcular el nuevo volumen ocupado si se agrega el producto

        const maxVolume =
            this.type === "CHICA"
                ? 0.037485
                : 0.59 * 0.39 * 0.39

        return newVolume <= maxVolume // si el nuevo volumen no excede el máximo, se puede empacar
    }

    // 🔥 porcentaje de espacio libre
    getFreePercentage(): number {
        const maxVolume =
            this.type === "CHICA"
                ? 0.037485
                : 0.59 * 0.39 * 0.39

        return (maxVolume - this.currentVolume) / maxVolume
    }
}