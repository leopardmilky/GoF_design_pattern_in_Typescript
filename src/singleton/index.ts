import King from "./King";


/*
Singleton패턴은 특정 클래스의 인스턴스가 오직 한 개만 존재한다는 것을 보장함.
Singleton패턴이 적용된 클래스의 인스턴스는 미리 생성해 놓거나 사용될 때 생성하는 것이 가능함.
*/



// const king = new King() // 이와 같은 방법으로 객체 생성이 불가능함. King클래스의 생성자가 private이라서..

const king = King.getInstance()
king.sayHello()

const king2 = King.getInstance()

// 두 객체가 같은지 확인하는 2가지 방법.
if(king === king2) {
    console.log("King과 King2는 같음.")
} else {
    console.log("King과 King2는 다름.")
}

console.log(Object.is(king, king2))