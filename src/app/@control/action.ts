import { CharacterActionInterface } from '@control/action.interface';
import { CharacterActionState, ActionStateName } from '@control/action.state';

export enum CharacterActionName {
  walk = 'walk',
  jump = 'jump',
  punch = 'punch',
}

export class CharacterActionControl implements CharacterActionInterface {

  keyMap: any = {}

  state: CharacterActionState
  name: CharacterActionName = CharacterActionName.walk
  stateName: ActionStateName = ActionStateName.walking

  constructor() {
    this.state = new CharacterActionState()
  }

  mapActions() {
    this.bind(new WalkAction, ['ArrowRight'])
    this.bind(new JumpAction, ['ArrowUp'])
    this.bind(new PunchAction, ['a', 'A'])
    return this
  }

  bind(action: CharacterActionControl, keys: Array<string>) {
    keys.forEach(key => {
      this.keyMap[key] = action
    })
  }

  getAction(key: string | number) {
    return this.keyMap[key]
  }

  execute() {
    this.state.set(this.stateName)
  }
}

export class WalkAction extends CharacterActionControl {

  constructor() {
    super()
    this.name = CharacterActionName.walk
    this.stateName = ActionStateName.walking
  }

}
export class JumpAction extends CharacterActionControl {

  constructor() {
    super()
    this.name = CharacterActionName.jump
    this.stateName = ActionStateName.jumping
  }

}

export class PunchAction extends CharacterActionControl {

  constructor() {
    super()
    this.name = CharacterActionName.punch
    this.stateName = ActionStateName.punching
  }

}
