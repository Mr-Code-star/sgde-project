import {OrderItem} from "./OrderItem";

export class School {
    constructor(
        public id:  string,
        public name: string,
        public district: string,
        public department: string,
        public orderItems: OrderItem[],
    ) {
    }
}