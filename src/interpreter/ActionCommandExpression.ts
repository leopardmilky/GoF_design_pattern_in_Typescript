import CommandExpression from "./CommandExpression";
import Context from "./Context";

export default class ActionCommandExpression extends CommandExpression {
    constructor(keyword: string) { super(keyword) }

    parse(context: Context): boolean {
        if(!ActionCommandExpression.checkValidKeyword(this.keyword)) return false
        if(context.readNextKeyword() === null) return false
        return true
    }
    
    run(): boolean {
        console.log(`CMD: ${this.keyword}`);
        return true
    }

    getDescription(): string {
        return this.keyword
    }

    static checkValidKeyword(keyword: string) {
        const bOK = keyword === "FRONT" || keyword === "BACK" ||
            keyword === "LEFT" || keyword === "RIGHT";
        return bOK
    }
}