import EvenBettingPlayer from "./EvenBettingPlayer";
import FairDiceGame from "./FairDiceGame";
import NBettingPlayer from "./NBettingPlayer";
import OddBettingPlayer from "./OddBettingPlayer";


/*
Observer패턴은 어떤 상태에 변화에 대한 처리를 위해 사용됨.
상태 변화가 발생하면 상태 변화에 관심을 가지고 있는 객체들(Observer)에게 상태 변화를 알리며 필요하다면 변경된 상태값도 전달함.
*/

const diceGame = new FairDiceGame()

const players = [
    new OddBettingPlayer("홀수에 배팅한 사람"),
    new EvenBettingPlayer("짝수에 배팅한 사람"),
    new NBettingPlayer("2,3,5에 배팅한 사람", [2,3,5])
]

players.forEach(player => diceGame.addPlayer(player))

function updateBoard() {
    const domPlayers = document.querySelector(".players")
    domPlayers.innerHTML = ""

    players.forEach((player) => {
        const domPlayer = document.createElement("div");
        domPlayer.innerText = player.name;

        if(player.winning) domPlayer.classList.add("win");

        domPlayers.append(domPlayer)
    })
}

updateBoard()

document.querySelector("button").addEventListener("click", () => {
    const diceNumber = diceGame.play()

    const domDice = document.querySelector(".dice") as HTMLElement
    domDice.innerText = diceNumber.toString()

    updateBoard()
})