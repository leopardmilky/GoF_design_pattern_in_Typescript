import Button from "./Button";

export default class FlatButton extends Button {
    constructor(dom: HTMLElement, caption: string) {
        super(dom, caption);
        this.render();
    }

    render(): void {
        this.dom.innerHTML = this.caption;
        this.dom.classList.add("flat-button");
    }
}