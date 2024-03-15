import { ItemName } from "./Factory";
import ItemFactory from "./ItemFactory";


/*
Factory Method패턴은 객체 생성을 위한 패턴 중에 하나로, 객체 생성에 필요한 과정을 템플릿처럼 정해 놓고, 각 과정을 다양하게 구현이 가능.
객체 생성에 대한 인터페이스와 구현의 분리를 통해 새로운 객체 생성을 유연하게 확장할 수 있음.
*/

const factory = new ItemFactory();

const domOutput = document.querySelector("textarea");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", (event) => {
    const itemName = (event.target as HTMLElement).innerText;

    const item = factory.create(itemName as ItemName);
    if(item) {
        domOutput.value += `\n${item.use()}`
    } else {
        domOutput.value += `\n${itemName}을 사용할 수 없습니다...(x_x)`
    }

    domOutput.scrollTop = domOutput.scrollHeight
}))
