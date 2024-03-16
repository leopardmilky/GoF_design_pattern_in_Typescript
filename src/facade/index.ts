// import Cache from "./Cache";
// import DBMS from "./DBMS";
// import Message from "./Message";
import Facade from "./Facade";

/*
Facade패턴은 어떤 기능 개발을 위해 필요한 많은 클래스와 관련 API호출 등 복잡한 내용을 단순화 시켜주는 패턴.
즉, Facade에 해당하는 클래스 하나로 단순화 시키고 기존의 클래스들은 감출 수 있음.(비공개 처리가 가능)
Facade패턴을 적용하여 만들어진 라이브러리를 사용하는 개발자의 입장에서 학습에 대한 부담이 줄어들게 됨.
*/

// const dbms = new DBMS();
// const cache = new Cache();

const domInput = document.querySelector("input");
const domButton = document.querySelector("button");
const domResult = document.querySelector(".result");

const facade = new Facade();

domButton.addEventListener("click", () => {
    const name = domInput.value;

    facade.queryName(
        name,
        ()=>{
            domInput.value = "(조회 중...)"
            domButton.disabled = true;
        },
        ()=>{
            domInput.value = name;
            domButton.disabled = false;
        },
        domResult
    )


    // const row = cache.get(name);

    // if(!row) {  // cache에 데이터가 존재하지 않을 경우.
    //     domInput.value = "(조회 중...)"
    //     domButton.disabled = true;

    //     dbms.query(name, (row) => {
    //         domInput.value = name;
    //         domButton.disabled = false;
    //         if(row) {
    //             cache.put(row);
    //         }
    //         const message = new Message(row);
    //         message.print(domResult);
    //     })
    // } else {
    //     const message = new Message(row);
    //     message.print(domResult);
    // }
})