import BeginExpression from "./BeginExpression";
import Context from "./Context";

/*
Interpreter패턴은 "규칙을 가지는 문자열"(스크립트)를 해석하고 정해진 규칙대로 실행하는 패턴.
*/



/*
const script = "BEGIN FRONT LOOP 2 BACK RIGHT END BACK END";

const context = new Context(script);

while(true) {
    const keyword = context.getCurrentKeyword()
    if(keyword === null) break;
    console.log(keyword);
    context.readNextKeyword();
}
*/


const script = "BEGIN FRONT LOOP 3 LOOP 2 RIGHT FRONT END LOOP 3 LEFT END BACK RIGHT END BACK END"
const context = new Context(script);
const expression = new BeginExpression();

if(expression.parse(context)) {
    console.log(expression.getDescription())
    expression.run()
} else {
    console.log("ERROR!!")
}