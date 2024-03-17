import BoxCommand from "./BoxCommand";
import CircleCommand from "./CircleCommand";
import ClearCommand from "./ClearCommand";
import PlayCommand from "./PlayCommand";
import TextCommand from "./TextCommand";


/*
Command패턴은 하나의 기능을 클래스의 객체로 정의한 것.
커맨드 객체는 저장소에 저장해서 계속 유지할 수 있고, 함수의 인자 등으로 전달할 수 있어 다양하게 사용가능.
여러 개의 커맨드를 한번에 실행하는 배치 가능, 실행에 대한 취소와 재실행에 대한 Undo/Redo기능 개발에 Command패턴을 적용 가능.
*/

const domCanvas = document.querySelector("canvas");
const domDraw = document.querySelector(".draw");
const domPlay = document.querySelector(".play");

const cmdClear = new ClearCommand(domCanvas);

const cmdCircle1 = new CircleCommand(domCanvas, 50, 150, 40);
cmdCircle1.setFillColor("#ee4040").setStrokeColor("#ee4040");

const cmdText = new TextCommand(domCanvas, 200, 200, 40, "Design Patterns");
cmdText.setStrokeColor("#458de5");

const cmdCircle2 = new CircleCommand(domCanvas, 355, 240, 30);
cmdCircle2.setFillColor("#ff884d").setStrokeColor("#ff884d");

const cmdBox = new BoxCommand(domCanvas, 40, 165, 320, 65);
cmdBox.setFillColor("#4dc4ff").setStrokeColor("#4dc4ff");

domDraw.addEventListener("click", () => {
    cmdClear.run()
    cmdCircle1.run()
    cmdBox.run()
    cmdCircle2.run()
    cmdText.run()
});

const playCommand = new PlayCommand(domCanvas);
playCommand.addCommand(cmdClear);
playCommand.addCommand(cmdCircle1);
playCommand.addCommand(cmdBox);
playCommand.addCommand(cmdCircle2);
playCommand.addCommand(cmdText);

domPlay.addEventListener("click", () => {
    playCommand.run();
})