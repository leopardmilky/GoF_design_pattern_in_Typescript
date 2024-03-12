


/*
adapter패턴은 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할 때 적용하는 패턴.
서로 상호작용을 할 수 없는 것을 상호작용 할 수 있게 말그대로 adapter같은 역할.
예를들어, 
1. 어떤 클래스가 다른 프로그램에서 많이 사용되는 공용 클래스로 변경이 되면 영향을 받아 다른 프로그램들의 코드가 변경이 많아지는 경우.
2. 어떤 클래스가 버전업되어 하위 버전의 클래스도 지원해야 하는 경우.
*/

import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";


const list = Array<Animal> ()

list.push(new Dog('댕댕이'));
list.push(new Cat('냥냥이'));
list.push(new Cat('냥쉑이'));

// const tiger = new Tiger();
// tiger.name = '호랭이';
// list.push(tiger) 
// Adapter없이 Tiger를 바로 추가하면 에러가 발생함.Animal타입에 추가 불가능. 타입이 맞지 않음.
list.push(new TigerAdapter('호랭이'));


list.forEach(animal => {
    animal.sound();
})