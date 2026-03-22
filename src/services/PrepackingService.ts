import { OrderItem } from "../models/OrderItem";
import { Box } from "../models/Box";
import { BOX_RULES, Level } from "../config/boxRules";

let boxCounter = 0;

export class PrepackingService {
    private packLevel(items: OrderItem[], level: Level): Box[] {
        const masterBoxes: Box[] = [];
        const saldoItems: { size: number; product: any }[] = [];

        // 1. MASTER: empacar en cajas grandes completas
        for (const item of items) {
            const rule = BOX_RULES[item.product.id];
            if (!rule) {
                console.warn("⚠️ Sin regla:", item.product.id);
                continue;
            }

            const maxMaster = rule[level].GRANDE;
            let qty = item.quantity;

            while (qty >= maxMaster) {
                const box = new Box(
                    "BOX-" + ++boxCounter,
                    maxMaster,
                    maxMaster,
                    level
                );
                // ✅ Cambio: usar item.product.id
                box.addItem(new OrderItem(item.product.id, maxMaster));
                masterBoxes.push(box);
                qty -= maxMaster;
            }

            if (qty > 0) {
                saldoItems.push({ size: qty, product: item.product });
            }
        }

        // 2. SALDOS: empacar los restos usando cajas adecuadas
        saldoItems.sort((a, b) => b.size - a.size);

        const saldoBoxes: Box[] = [];

        for (const item of saldoItems) {
            const rule = BOX_RULES[item.product.id];
            const maxSmall = rule[level].CHICA;
            const maxLarge = rule[level].GRANDE;

            let placed = false;

            // Intentar colocar en alguna caja existente
            for (const box of saldoBoxes) {
                // ✅ Cambio: usar item.product.id
                const orderItem = new OrderItem(item.product.id, item.size);
                if (box.canFit(orderItem)) {
                    box.addItem(orderItem);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                let boxCapacity: number;
                if (item.size <= maxSmall) {
                    boxCapacity = maxSmall;
                } else {
                    boxCapacity = maxLarge;
                }

                const newBox = new Box(
                    "BOX-" + ++boxCounter,
                    boxCapacity,
                    boxCapacity,
                    level
                );
                // ✅ Cambio: usar item.product.id
                const success = newBox.addItem(new OrderItem(item.product.id, item.size));
                if (!success) {
                    console.error(`❌ Error: No se pudo agregar ${item.product.id} (${item.size}) a la caja de capacidad ${boxCapacity}`);
                }
                saldoBoxes.push(newBox);
            }
        }

        return [...masterBoxes, ...saldoBoxes];
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