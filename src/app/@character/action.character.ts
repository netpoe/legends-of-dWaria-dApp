import { CharacterActionInterface } from '@character/action.interface.character';
import { CharacterActionState, ActionStateName } from '@character/action.state.character';

export class CharacterAction implements CharacterActionInterface {

  keyMap: any = {}

  state: CharacterActionState

  current: string

  constructor() {
    this.state = new CharacterActionState()
  }

  mapActions() {
    this.keyMap['ArrowRight'] = 'walk'
    this.keyMap['ArrowUp'] = 'jump'
    this.keyMap['a'] = 'punch'
    this.keyMap['A'] = 'punch'
  }

  walk() {
    this.state.set(ActionStateName.walking)
  }

  jump() {
    this.state.set(ActionStateName.jumping)
  }

  punch() {
    this.state.set(ActionStateName.punching)
  }

}
