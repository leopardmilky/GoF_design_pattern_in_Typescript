import Car from "./Car";
import CarBuilder from "./CarBuilder";

/*
Builder패턴은 복잡한 설정으로 구성된 객체를 좀 더 효과적으로 생성하기 위한 패턴.
Builder패턴의 목적은 2가지:
1) 객체 생성 시 생성자의 인자가 너무 많은 경우에 좀 더 효과적으로 생성하기 위해 사용.
2) 여러 단계에 걸쳐서 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용.
여기 builder1은 1)번의 경우를 설명함.
*/

// car객체를 직접 생성하는 경우.
const car1 = new Car("V7", true, "black", true, false);
car1.print();

// builder를 이용하는 경우.
const car2 = new CarBuilder()
    .setAEB(false)
    .setAirbag(false)
    .setCameraSensor(true)
    .setColor("white")
    .setEngine("V9")
    .build()
car2.print();