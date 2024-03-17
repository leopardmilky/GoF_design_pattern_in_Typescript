import Builder from "./Builder";
import Data from "./Data";

export default class PlainTextBuilder extends Builder {
    constructor(data: Data) {
        super(data);
    }
    
    head(): string {
        return ""
    }

    body(): string {
        return `Name: ${this.data.name}, Age: ${this.data.age}`;
    }

    foot(): string {
        return ""
    }
}