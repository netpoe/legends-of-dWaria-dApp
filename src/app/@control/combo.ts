import { CharacterActionControl } from '@control/action';
import { ActionStateName } from '@control/action.state';
import { ComboStateName, CharacterComboState } from '@control/combo.state';
import { CharacterComboInterface } from '@control/combo.interface';
import { CharacterActionInterface } from '@control/action.interface';

export enum ComboMethodName {
  jumpAndPunch = 'jumpAndPunch',
  doubleJump = 'doubleJump',
  trippleJump = 'trippleJump',
}

export class CharacterCombo {

  timeout = 500
  isListening = false

  actionNames: string
  actionNamesMap: any = {}

  state: CharacterComboState
  stateName: ComboStateName

  constructor() {
    this.state = new CharacterComboState()
  }

  mapActionNames() {
    this.bind(new JumpAndPunchCombo, [ActionStateName.jumping, ActionStateName.punching])
    this.bind(new DoubleJumpCombo, [ActionStateName.jumping, ActionStateName.jumping])
    return this
  }

  bind(combo: CharacterComboInterface, actions: Array<ActionStateName>) {
    const actionNames = actions.join('+')
    this.actionNamesMap[actionNames] = combo
    return this
  }

  get(action: string) {
    return this.actionNamesMap[action]
  }

  listen() {
    this.isListening = true
    setTimeout(() => {
      this.isListening = false
    }, this.timeout)
    return this
  }

  clear() {
    this.actionNames = ''
    this.state.clear()
    return this
  }

  build(action: CharacterActionControl) {
    this.actionNames += `${action.state.name}+`
    const combo: CharacterComboInterface = this.get(this.actionNames.slice(0, -1))
    if (combo) {
      combo.execute()
      this.clear()
    }
  }

  execute() {
    this.state.set(this.stateName)
    return this
  }
}

export class JumpAndPunchCombo extends CharacterCombo implements CharacterComboInterface {

  constructor() {
    super()
    this.stateName = ComboStateName.jumpingAndPunching
  }

}

export class DoubleJumpCombo extends CharacterCombo implements CharacterComboInterface {

  constructor() {
    super()
    this.stateName = ComboStateName.doubleJumping
  }

}
