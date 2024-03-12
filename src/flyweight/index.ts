


/*
Flyweight패턴은 어떤 객체를 사용할 때마다 매번 생성하지 않고 한번만 생성해 두고 공유하며 사용할 수 있음.
즉, 미리 생성된 객체를 공유해서 사용한다는 개념.
객체를 생성할 때 많은 자원(메모리, 소요시간 등)이 소모될 경우 유용함.
Flyweight패턴이 적용된 객체는 공유의 개념이므로 공유할 속성과 공유하지 않을 속성을 구분하여 설계할 필요가 있음.
*/

import DigitFactory from "./DigitFactory";
import Number from "./Number";


const factory = new DigitFactory();
const domTarget = document.querySelector("#tmp");

let value = 434331;

const number = new Number(factory, value)
number.put(domTarget)

// setInterval(() => {
//     const number = new Number(factory, value++)
//     number.put(domTarget)
// },1000)

