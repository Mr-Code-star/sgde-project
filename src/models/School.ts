import {OrderItem} from "./OrderItem";

export class School {
    constructor(
        public id:  string,
        public name: string,
        public district: string,
        public ugel: string,
        public department: string,
        public orderItems: OrderItem[],
    ) {
    }
}