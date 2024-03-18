import Player from "./Player";
import StandUpState from "./StandUpState";
import State from "./State";

export default class SitDownState extends State {
    constructor(player: Player) {
        super(player);
    }

    standUp(): void {
        this.player.setState(new StandUpState(this.player));
        this.player.talk("일어나자 이제.");
    }

    sitDown(): void {
        this.player.talk("이미 앉아있잖아..!");
    }

    walk(): void {
        this.player.setState(new StandUpState(this.player));
        this.player.talk("앉아서 어떻게 걸어? 일단 일어나야지");
    }

    run(): void {
        this.player.setState(new StandUpState(this.player));
        this.player.talk("앉아서 어떻게 뛰어? 먼저 일어나야지");
    }

    getDescription(): string {
        return "앉아있음."
    }
}