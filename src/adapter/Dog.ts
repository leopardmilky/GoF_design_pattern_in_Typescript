import Animal from "./Animal";

export default class Dog extends Animal {
    sound(): void {
        console.log(`${this.name}가 멍멍!!`);
    }
    constructor(name: string) {
        super(name);
    }
}