import { CharacterActionInterface } from '@character/action.interface';
import { CharacterActionState, ActionStateName } from '@character/action.state';

export enum CharacterMethodName {
  walk = 'walk',
  jump = 'jump',
  punch = 'punch',
}

export class CharacterAction implements CharacterActionInterface {

  keyMap: any = {}

  state: CharacterActionState

  current: string

  constructor() {
    this.state = new CharacterActionState()
  }

  mapMethods() {
    this.keyMap['ArrowRight'] = CharacterMethodName.walk
    this.keyMap['ArrowUp'] = CharacterMethodName.jump
    this.keyMap['a'] = CharacterMethodName.punch
    this.keyMap['A'] = CharacterMethodName.punch
  }

  getMethod(key: string | number) {
    return this.keyMap[key]
  }

  execute(method: CharacterMethodName) {
    this[method]()
    return this
  }

  walk() {
    this.state.set(ActionStateName.walking)
    return this
  }

  jump() {
    this.state.set(ActionStateName.jumping)
    return this
  }

  punch() {
    this.state.set(ActionStateName.punching)
    return this
  }

}
