import Item from "./Item";

export default class Bow implements Item {
    use():string {
        return "내 화살은 자비가 없지 하하하"
    }
}