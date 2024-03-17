import Data from "./Data";
import Director from "./Director";
import JSONBuilder from "./JSONBuilder";
import PlainTextBuilder from "./PlainTextBuilder";
import XMLBuilder from "./XMLBuilder";

/*
builder2패턴은 template method패턴이나 facade패턴, strategy패턴을 객체 생성 관점에서 적용한 것으로 볼 수 있음.
Director클래스는 facade
Builder클래스는 template method
PlainTextBuilder, JSONBuilder, XMLBuilder클래스는 strategy
*/

const data = new Data("Jane", 76);

const builder = new PlainTextBuilder(data);
// const builder = new JSONBuilder(data);
// const builder = new XMLBuilder(data);

const director = new Director(builder);

const result = director.build();

console.log(result);