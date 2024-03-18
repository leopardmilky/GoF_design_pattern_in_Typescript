import Player from "./Player";

/*
State패턴은 상태를 클래스화하여 객체로 만들수 있는 패턴.
어떤 상태에서 다른 상태로 변경할 때, 각 상태 변화에 따른 조건 처리를 매우 효과적으로 코딩할 수 있음.
새로운 상태 추가에도 상태 변화 로직이 복잡해지지 않고 한 가지 상태만 집중해서 처리할 수 있음.
*/

const domTalk = document.querySelector(".talk") as HTMLElement;
const domStand = document.querySelector(".stand");
const domSit = document.querySelector(".sit");
const domWalk = document.querySelector(".walk");
const domRun = document.querySelector(".run");

const player = new Player(domTalk);

function putDescription() {
    const domDescription = document.querySelector(".description") as HTMLElement;
    domDescription.innerText = `${player.getState().getDescription()} / 속도: ${player.getSpeed()}km/h`;
}

putDescription();

domStand.addEventListener("click", () => {
    player.getState().standUp();
    putDescription();
});

domSit.addEventListener("click", () => {
    player.getState().sitDown();
    putDescription();
});

domWalk.addEventListener("click", () => {
    player.getState().walk();
    putDescription();
});

domRun.addEventListener("click", () => {
    player.getState().run();
    putDescription();
});