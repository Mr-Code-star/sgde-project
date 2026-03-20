import { Product } from "./models/Product"
import { OrderItem } from "./models/OrderItem"
import { School } from "./models/School"
import { PrepackingService } from "./services/PrepackingService"

// 🔹 1. Crear productos (IMPORTANTE: IDs deben coincidir con BOX_RULES)
const cuaderno = new Product("P20", "Cuaderno Rayado", "CUADERNO", null)
const polo = new Product("P07", "Polo T10", "POLO", "T10")
const buzo = new Product("P08", "Buzo Delgado", "BUZO", "M")
const mochila = new Product("P19", "Mochila", "MOCHILA", null)

// 🔹 2. Crear pedidos (OrderItems)
const items = [
    new OrderItem(cuaderno, 50, "PRIMARIA"),
    new OrderItem(polo, 100, "PRIMARIA"),
    new OrderItem(buzo, 38, "PRIMARIA"),
    new OrderItem(mochila, 50, "PRIMARIA")
]

// 🔹 3. Crear colegio
const school = new School(
    "S1",
    "Colegio San Martín",
    "Ate",
    "UGEL 06",
    "Lima",
    items
)

// 🔹 4. Ejecutar algoritmo
const service = new PrepackingService()
const boxes = service.generateBoxes(school.orderItems)

// 🔹 5. Mostrar resultados
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