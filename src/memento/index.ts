import BlindMan, { Action, Memento } from "./BlindMan";



/*
Memento패턴은 객체의 상태를 기억해 두고 필요할 때 다시 복원하기 위한 패턴.
어떤 기능의 실행 이력 보관, 실행 취소, 재실행 등의 목적을 위해 활용될 수 있는 패턴.
이미 기억된 객체의 상태가 변경되지 않도록 주의해야 함.
*/


const blindMan = new BlindMan(0, 0, 10, 10);
let minDistance = Number.MAX_VALUE
let memento: Memento = null;

while(true) {
    const action: Action = Math.floor(Math.random() * 4) + 1;
    const distance = blindMan.walk(action)

    console.log(Action[action], distance);

    if(distance === 0.0) {
        console.log("도착!")
        break
    }

    if(minDistance > distance) {
        minDistance = distance;
        memento = blindMan.createMemento()
    } else {
        if(memento != null) {
            blindMan.restoreMemento(memento)
        }
    }
}

console.log(blindMan.resultPath());