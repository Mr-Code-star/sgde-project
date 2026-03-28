// main.ts
import { PrepackingService } from "./services/PrepackingService"
import { School } from "./models/School"
import { OrderItem } from "./models/OrderItem"

// 🔹 1. Crear pedidos (OrderItems) usando solo IDs y cantidades
const items = [
    new OrderItem("P20", 50),
    new OrderItem("P07", 100),
    new OrderItem("P08", 38),
    new OrderItem("P19", 50),
    new OrderItem("P14", 150)
]

// 🔹 2. Crear colegio (ahora el nivel de los items se determina automáticamente)
const school = new School(
    "S1",
    "Colegio San Martín",
    "Ate",
    "UGEL 06",
    "Lima",
    items
)

// 🔹 3. Ejecutar algoritmo
const service = new PrepackingService()
const boxes = service.generateBoxes(school.orderItems)

// 🔹 4. Mostrar resultados
console.log("\n📦 RESULTADO FINAL:\n")

boxes.forEach((box, i) => {
    console.log(`Caja ${i + 1} (${box.type})`)
    console.log("Volumen usado:", box.currentVolume.toFixed(6))
    console.log("Espacio libre %:", (box.getFreePercentage() * 100).toFixed(2) + "%")

    box.items.forEach(item => {
        console.log(` - ${item.product.id} → ${item.quantity}`)
    })

    console.log("-------------------")
})