export default class Car {
    constructor(
        private engine: string,
        private airbag: boolean,
        private color: string,
        private cameraSensor: boolean,
        private AEB: boolean    // 자동급제동장치
    ) {}

    print(): void {
        console.log(this);
    }
}