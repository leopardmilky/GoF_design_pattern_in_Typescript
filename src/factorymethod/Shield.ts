import Item from "./Item";

export default class Shield implements Item {
    use(): string {
        return "내 방패는 너가 내 앞에 있는거야."
    }
}