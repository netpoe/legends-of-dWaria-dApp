import { CharacterActionInterface } from '@control/action.interface';
import { CharacterActionState, ActionStateName } from '@control/action.state';

export enum CharacterActionName {
  walk = 'walk',
  jump = 'jump',
  punch = 'punch',
}

export class CharacterActionControl {

  keyMap: any = {}

  state: CharacterActionState
  name: CharacterActionName = CharacterActionName.walk
  stateName: ActionStateName = ActionStateName.walking

  constructor() {
    this.state = new CharacterActionState()
  }

  mapActions() {
    this.keyMap['ArrowRight'] = new WalkAction()
    // this.keyMap['ArrowUp'] = CharacterMethodName.jump
    // this.keyMap['a'] = CharacterMethodName.punch
    // this.keyMap['A'] = CharacterMethodName.punch
    return this
  }

  getAction(key: string | number) {
    return this.keyMap[key]
  }

  execute() {
    this.state.set(this.stateName)
  }
}

export class WalkAction extends CharacterActionControl implements CharacterActionInterface {

  constructor() {
    super()
    this.name = CharacterActionName.walk
    this.stateName = ActionStateName.walking
  }

}
