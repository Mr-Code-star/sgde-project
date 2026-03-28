import { OrderItem } from "../models/OrderItem";
import { Box } from "../models/Box";
import { BOX_RULES, Level } from "../config/boxRules";

let boxCounter = 0;

export class PrepackingService {
    private packLevel(items: OrderItem[], level: Level): Box[] {
        const boxes: Box[] = []

        const expanded: { size: number; product: any }[] = []

        // 🔹 expandir items
        for (const item of items) {
            const rule = BOX_RULES[item.product.id]
            if (!rule) continue

            let qty = item.quantity
            const maxMaster = rule[level].GRANDE

            while (qty > 0) {
                const chunk = Math.min(qty, maxMaster)
                expanded.push({ size: chunk, product: item.product })
                qty -= chunk
            }
        }

        // 🔹 ordenar (FFD)
        expanded.sort((a, b) => b.size - a.size)

        // 🔥 asignación
        for (const item of expanded) {
            const rule = BOX_RULES[item.product.id]
            const maxMaster = rule[level].GRANDE
            const maxSaldo = rule[level].CHICA

            // ✅ CORRECCIÓN: pasar el ID del producto, no el objeto
            const orderItem = new OrderItem(item.product.id, item.size)

            let placed = false

            // 🔹 intentar en cajas existentes
            for (const box of boxes) {
                if (box.canFit(orderItem)) {
                    box.addItem(orderItem)
                    placed = true
                    break
                }
            }

            // 🔹 crear nueva caja si no entra
            if (!placed) {
                const type: "CHICA" | "GRANDE" =
                    item.size > maxSaldo ? "GRANDE" : "CHICA"

                const capacity =
                    type === "GRANDE" ? maxMaster : maxSaldo

                const newBox = new Box(
                    "BOX-" + ++boxCounter,
                    capacity,
                    capacity,
                    level,
                    type
                )

                newBox.addItem(orderItem)
                boxes.push(newBox)
            }
        }

        return boxes
    }

    generateBoxes(items: OrderItem[]): Box[] {
        const primaria = items.filter(i => i.level === "PRIMARIA");
        const secundaria = items.filter(i => i.level === "SECUNDARIA");

        return [
            ...this.packLevel(primaria, "PRIMARIA"),
            ...this.packLevel(secundaria, "SECUNDARIA")
        ];
    }
}