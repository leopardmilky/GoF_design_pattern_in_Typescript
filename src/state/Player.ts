import StandUpState from "./StandUpState";
import State from "./State";

export default class Player {
    private speed: number = 0;
    getSpeed() { return this.speed };
    setSpeed(speed: number): void { this.speed = speed }

    private state: State;
    getState(): State { return this.state };
    setState(state: State): void { this.state = state };

    constructor(private domTalk: HTMLElement) {
        this.state = new StandUpState(this);
    }

    talk(msg: string) {
        this.domTalk.innerText = msg;
    }
}