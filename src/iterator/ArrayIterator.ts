import Array from "./Array";
import Iterator from "./Iterator";
import Item from "./Item";

class ArrayIterator implements Iterator<Item> {
    private index: number

    constructor(private array: Array) {
        this.index = -1
    }

    next(): boolean {
        this.index++
        return this.index < this.array.count
    }

    current(): Item {
        return this.array.getItem(this.index)
    }
}

export default ArrayIterator

