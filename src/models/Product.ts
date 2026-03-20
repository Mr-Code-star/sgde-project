export class Product {
    constructor(
        public id: string,
        public name: string,
        public type: string, // cuaderno, polo, buzo
        public size: string | null // S, M, L, XL, etc. (solo para ropa)
    )
    {}
}