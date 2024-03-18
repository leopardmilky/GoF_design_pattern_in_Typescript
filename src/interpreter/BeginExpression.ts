import CommandListExpression from "./CommandListExpresstion";
import Context from "./Context";
import Expression from "./Expression";

export default class BeginExpression implements Expression {
    private expression: CommandListExpression;

    parse(context: Context): boolean {
        if(BeginExpression.checkValidKeyword(context.getCurrentKeyword())) {
            context.readNextKeyword();
            this.expression = new CommandListExpression();
            return this.expression.parse(context);
        } else {
            return false
        }
    }

    run(): boolean {
        return this.expression.run();
    }

    getDescription(): string {
        return `BEGIN ${this.expression.getDescription()}`
    }

    static checkValidKeyword(keyword: string): boolean {
        return keyword === "BEGIN"
    }
}