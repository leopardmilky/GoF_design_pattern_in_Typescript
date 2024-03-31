import Array from "./Array";
import Item from "./Item";

/*
iterator패턴은 배열이나 Linked-List, Tree처럼 다른 데이터 구조를 갖는 Aggregator의 구성 항목을 표준화된 공통API로 접근할 수 있게함.
데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화된 공통 API로 접근할 수 있으므로 하나의 공통된 알고리즘으로 처리할 수 있음.

장점: 
- 집합체의 내부구조를 노출하지 않음.
- 다양한 형태의 집합체에 대해 동일한 순회 방법을 제공.

단점: 클래스가 늘어남. 복잡도 증가. (굳이 사용할 필요없는 간단한 곳에 사용한다면)
*/




const items = [
    new Item("쿠쿠다스", 2500),
    new Item("새우깡", 1800),
    new Item("빼빼로", 1200),
    new Item("초코파이", 4600)
]

const array = new Array(items)
const iter = array.iterator()

while(iter.next()) {
    const item = iter.current();
    const domItem = document.createElement("div");
    domItem.innerHTML = `${item.name} : ${item.cost}원 `;
    document.body.appendChild(domItem);

    domItem.classList.add("iterator-item");
}