import GaussSumStrategy from "./GaussSumStrategy";
import LoopSumStrategy from "./LoopSumStrategy";
import SumPrinter from "./SumPrinter";


/*
Strategy패턴은 어떤 기능이 실행중에 필요에따라 알맞는 전략으로 바꿀 수 있는 디자인 패턴.
각 전략들은 인터페이스나 추상 클래스를 통해 구체적인 실행 전략을 구현하고, 이를 전략으로 사용하는 컨텍스트는 이 인터페이스/추상 클래스를 통해 상황에 맞게 전략을 사용함.
각 기능들은 느슨하게 연결되어 있기 때문에, 컨텍스트는 전략구현에 수정이 있거나 추가가 되어도 영향을 안받아 유지보수와 확장성에 좋음.
*/


const printer = new SumPrinter()

const dom1 = document.createElement('h1');
document.body.append(dom1);

const dom2 = document.createElement('h1');
document.body.append(dom2);

printer.print(new LoopSumStrategy(), 100, dom1);
printer.print(new GaussSumStrategy(), 100, dom2);