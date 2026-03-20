import {Product} from "./models/Product";
import {OrderItem} from "./models/OrderItem";
import {School} from "./models/School";

// Crear un nuevo producto
const cuaderno = new Product("P-001", "Cuaderno Rayado", "CUADERNO", null)
const polo = new Product("P-002", "Polo XL", "POLO", "XL" )

// Crear una orden de compra con los productos
const items = [
    new OrderItem(cuaderno, 50, "PRIMARIA"),
    new OrderItem(polo, 100, "SECUNDARIA")
]

// Colegio

const school = new School(
    "S1",
    "Colegio San Martín",
    "Ate",
    "UGEL 06", // 👈 NUEVO
    "Lima",
    items
)

console.log("Orden de compra para el colegio:")
console.log(`Colegio: ${school.name}`)
console.log(`Dirección: ${school.district}, ${school.department}`)
console.log(`UGEL: ${school.ugel}`) // 👈 NUEVO
console.log("Productos:")
school.orderItems.forEach(item => {
    console.log(`- (${item.product.name} - ${item.product.size || 'Talla única'}): ${item.quantity} unidades para ${item.level}`)
})
