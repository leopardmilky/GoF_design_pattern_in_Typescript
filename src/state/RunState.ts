import Player from "./Player";
import StandUpState from "./StandUpState";
import State from "./State";
import WalkState from "./WalkState";

export default class RunState extends State {
    constructor(player: Player) {
        super(player);
    }

    standUp(): void {
        this.player.talk("긴급제동!!");
        this.player.setSpeed(0);
        this.player.setState(new StandUpState(this.player));
    }

    sitDown(): void {
        this.player.talk("뛰다가 갑자기 앉으면 넘어져!!");
        this.player.setSpeed(0);
        this.player.setState(new StandUpState(this.player));
    }

    walk(): void {
        this.player.talk("속도를 줄여서 걷어갑니다.");
        this.player.setSpeed(8);
        this.player.setState(new WalkState(this.player));
    }

    run(): void {
        this.player.talk("더 빨리 뛰라고? 맞지?");
        this.player.setSpeed(this.player.getSpeed() + 2);
    }

    getDescription(): string {
        return "뛰는 중..."
    }
}