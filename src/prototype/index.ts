import Group from "./Group";
import Line from "./Line";
import Point from "./Point";

/*
Prototype패턴은 객체를 클래스 이름으로 생성하지 않고 실행중에 생성된 객체를 통해 동일한 상태값으로 새로운 객체를 생성하는 패턴.
원본 객체에 대한 깊은 복사(Deep Copy)를 사용하여 변경에대해 서로 다른 쪽에 영향을 주지 않음.
*/

const domCanvas = document.querySelector("canvas");

const pt1 = new Point(100, 100);
// pt1.draw(domCanvas);

const pt2 = new Point(200, 100);
// pt2.draw(domCanvas);

const line1 = new Line(pt1, pt2);
// line1.draw(domCanvas);

const pt3 = new Point(200, 200);
const pt4 = new Point(100, 200);

const line2 = new Line(pt2, pt3);
const line3 = new Line(pt3, pt4);
const line4 = new Line(pt4, pt1);

const rect = new Group();
rect.add(line1).add(line2).add(line3).add(line4);


const cloneRect = rect.copy();
cloneRect.moveOffset(200, 200);

rect.moveOffset(-100, -100);

rect.draw(domCanvas);
cloneRect.draw(domCanvas);