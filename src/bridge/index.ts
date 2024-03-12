

/*
Brige패턴은 기능 계층과 분리 계층을 분리하여 시스템의 확장성과 유지보수성을 높이는 패턴.
새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써 복잡도를 효과적으로 낮출 수 있음. 
기능 계층과 구현 계층은 서로 위임을 통해 통신.
클래스들간의 관계를 단순하게 만들어주는게 좋은데, Bridge패턴은 기능 계층과 구현 계층을 분리해서 클래스들 간의 관계를 단순하게 유지시켜줌.
*/

import CaptionDisplay from "./CaptionDisplay";
import CharactersCounter from "./CharactersCount";
import Draft from "./Draft";
import SimpleDisplay from "./SimpleDisplay";


const title = "복원된 지구";
const author = "김형준";
const content = [
    "플라스틱 사용의 감소와",
    "바다 생물 어획량 감소로 인하여",
    "지구는 복원되었다."
]

// const draft = new Draft(title, author, content);
const draft = new CharactersCounter(title, author, content);

// const display = new SimpleDisplay();
const display = new CaptionDisplay();
draft.print(display);

console.log(`전체 문자수: ${draft.getCharactersCount()}`)