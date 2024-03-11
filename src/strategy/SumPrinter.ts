import SumStrategy from "./SumStrategy";

export default class SumPrinter {
    print(strategy: SumStrategy, N: number, domOutPut: Element) {
        const value = strategy.get(N)
        domOutPut.innerHTML = `1~${N}까지의 총합 = ${value}`;
    }
}