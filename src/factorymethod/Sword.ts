import Item from "./Item";


export default class Sword implements Item {
    use(): string {
        return "내 칼은 자비가 없지 하하하"
    }
}