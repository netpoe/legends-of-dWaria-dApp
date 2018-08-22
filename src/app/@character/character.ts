import { CharacterAction } from '@character/action.character';
import { CharacterCombo } from '@character/combo.character';

export class Character {

  action: CharacterAction
  combo: CharacterCombo

  constructor() {
    this.action = new CharacterAction()
    this.combo = new CharacterCombo()
    this.mapActions()
  }

  mapActions() {
    this.action.mapActions()
    return this
  }

  do(key: string | number) {
    const method = this.action.keyMap[key]
    if (method) {
      this.action[method]()
      if (!this.combo.isListening) {
        this.combo.clear()
        this.combo.listen()
      }
      this.combo.perform(this.action)
    }
    return this
  }
}
