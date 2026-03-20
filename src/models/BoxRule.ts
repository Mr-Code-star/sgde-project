export class BoxRule {
    constructor(
        public code_product: string,
        public productType: string,
        public maxQuantity: number,
        public level: "PRIMARIA" | "SECUNDARIA",
    ) {
    }
}