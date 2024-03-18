import Button from "./Button";
import CheckBox from "./CheckBox";
import TextEdit from "./TextEdit";

export default abstract class UIFactory {   // 추상 메서드만 있어서 인터페이스로 해도됨.
    abstract createButton(dom: HTMLElement, caption: string): Button
    abstract createCheckBox(dom: HTMLElement, label: string, checked: boolean): CheckBox
    abstract createTextEdit(dom: HTMLElement, text: string): TextEdit
}