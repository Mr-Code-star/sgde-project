// main.ts
import { PrepackingService } from "./services/PrepackingService"
import { School } from "./models/School"
import { OrderItem } from "./models/OrderItem"

// 🔹 1. Crear pedidos (OrderItems) usando solo IDs y cantidades
const items = [
    new OrderItem("P20", 50),    // Cuaderno
    new OrderItem("P07", 100),   // Polo
    new OrderItem("P08", 38),    // Buzo
    new OrderItem("P19", 50),    // Mochila
    new OrderItem("P14", 150)    // Otro buzo
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
console.log("📦 CAJAS GENERADAS:\n")

boxes.forEach((box, index) => {
    console.log(`Caja ${index + 1} (${box.level})`)
    console.log("Capacidad:", box.capacity)
    console.log("Espacio restante:", box.remaining)

    console.log("Items:")
    box.items.forEach(item => {
        console.log(`  - ${item.product.name} → ${item.quantity}`)
    })

    console.log("----------------------")
})