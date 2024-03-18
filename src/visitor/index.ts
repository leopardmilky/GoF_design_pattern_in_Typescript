import AvgVisitor from "./AvgVisitor";
import Item from "./Item";
import ItemList from "./ItemList";
import SumVisitor from "./SumVisitor";

/*
Visitor패턴은 데이터 구조와 데이터 처리를 분리해 주는 패턴.
데이터에 대한 새로운 처리가 필요할 때, 데이터 처리에 대한 새로운 클래스를 추가하는 것만으로도 기능 확장이 가능.
효과적인 데이터 처리를 위해서 데이터 구조를 Composite패턴으로 표현하여 단일 데이터와 집합 데이터를 효과적으로 처리할 수 있도록 함.
*/

const list1 = new ItemList();
list1.add(new Item(10));
list1.add(new Item(20));
list1.add(new Item(40));

const list2 = new ItemList();
list2.add(new Item(30));
list2.add(new Item(40));
list1.add(list2);

const list3 = new ItemList();
list3.add(new Item(25));
list2.add(list3);

const sum = new SumVisitor();
list1.accept(sum);
console.log(`합계: ${sum.getValue()}`);

const avg = new AvgVisitor();
list1.accept(avg);
console.log(`평균: ${avg.getValue()}`);