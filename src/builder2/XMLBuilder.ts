import Builder from "./Builder";
import Data from "./Data";

export default class XMLBuilder extends Builder {
    constructor(data: Data) {
        super(data);
    }

    head(): string {
        return '<?xml version="1.0" encoding="utf-8"?><DATA>';
    }

    body(): string {
        return `<NAME>${this.data.name}</NAME><AGE>${this.data.age}</AGE>`;
    }

    foot(): string {
        return '</DATA>'
    }

}