import Player from "./Player";
import RunState from "./RunState";
import SitDownState from "./SitDownState";
import State from "./State";
import WalkState from "./WalkState";

export default class StandUpState extends State {
    constructor(player: Player) {
        super(player);
    }

    standUp(): void {
        this.player.talk("언제 움직일꺼야??");
    }

    sitDown(): void {
        this.player.setState(new SitDownState(this.player));
        this.player.talk("앉기를 시전 했습니다.");
    }

    walk(): void {
        this.player.setSpeed(8);
        this.player.setState(new WalkState(this.player));
        this.player.talk("하루 30분 걷기 운동하세요.");
    }

    run(): void {
        this.player.setSpeed(10);
        this.player.setState(new RunState(this.player));
        this.player.talk("스프린트!")
    }

    getDescription(): string {
        return "제자리에 서 있음."
    }
}