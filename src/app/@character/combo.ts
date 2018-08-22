import { CharacterAction } from '@character/action';
import { ActionStateName } from '@character/action.state';
import { ComboStateName, CharacterComboState } from '@character/combo.state';

export enum ComboMethodName {
  jumpAndPunch = 'jumpAndPunch'
}

export class CharacterCombo {

  timeout = 500
  isListening = false
  combo: string

  state: CharacterComboState

  methodMap: any = {}

  constructor() {
    this.state = new CharacterComboState()
  }

  mapMethods() {
    this.bindMethod(ComboMethodName.jumpAndPunch, [ActionStateName.jumping, ActionStateName.punching])
  }

  bindMethod(name: ComboMethodName, actions: Array<ActionStateName>) {
    const combo = actions.join('+')
    this.methodMap[combo] = name
  }

  getMethod(action: string) {
    return this.methodMap[action]
  }

  listen() {
    this.isListening = true
    setTimeout(() => {
      this.isListening = false
    }, this.timeout)
  }

  clear() {
    this.combo = ''
  }

  build(action: CharacterAction) {
    this.combo += `${action.state.name}+`
    const method = this.getMethod(this.combo.slice(0, -1))
    if (method) {
      this.execute(method)
      this.clear()
    }
  }

  execute(method: ComboMethodName) {
    this[method]()
    return this
  }

  jumpAndPunch() {
    this.state.set(ComboStateName.jumpingAndPunching)
    return this
  }
}
