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
    this.keyMap['ArrowUp'] = new JumpAction()
    this.keyMap['a'] = new PunchAction()
    this.keyMap['A'] = new PunchAction()
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
export class JumpAction extends CharacterActionControl implements CharacterActionInterface {

  constructor() {
    super()
    this.name = CharacterActionName.jump
    this.stateName = ActionStateName.jumping
  }

}

export class PunchAction extends CharacterActionControl implements CharacterActionInterface {

  constructor() {
    super()
    this.name = CharacterActionName.punch
    this.stateName = ActionStateName.punching
  }

}
