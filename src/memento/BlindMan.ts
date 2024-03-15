export enum Action {    // enum이라서 DOWN, LEFT, RIGHT는 자동으로 2,3,4를 갖게됨.
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

export class Memento {
    private _actions = new Array<Action>()
    get actions() { return this._actions }
    
    constructor(private _x: number, private _y: number, actions: Array<Action>) {
        this._actions = structuredClone(actions) // 깊은복사로 해야함. 그렇지 않으면 BlindMan의 actions가 변경되면 _actions도 변경됨.
        // this._actions = JSON.parse(JSON.stringify(actions)) // structuredClone을 지원하지 않는 환경이라면 이 코드를 사용.
    }

    get x() { return this._x }
    get y() { return this._y }
}


export default class BlindMan {
    private actions = new Array<Action>()

    constructor(
        private currentX: number, private currentY: number,
        private targetX: number, private targetY: number    
    ) {}

    walk(action: Action): number {
        this.actions.push(action)

        if(action === Action.UP) this.currentY += 1
        else if(action === Action.RIGHT) this.currentX += 1
        else if(action === Action.DOWN) this.currentY -= 1
        else if(action === Action.LEFT) this.currentX -= 1

        return Math.sqrt(Math.pow(this.currentX - this.targetX, 2))
                + Math.pow(this.currentY - this.targetY, 2)

    }

    createMemento(): Memento {
        const memento = new Memento(this.currentX, this.currentY, this.actions)
        return memento
    }

    restoreMemento(memento: Memento): void {
        this.currentX = memento.x
        this.currentY = memento.y
        this.actions = structuredClone(memento.actions)
    }

    resultPath(): string {
        return this.actions.map(action => Action[action]).join("→");
    }
}