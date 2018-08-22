import { CharacterAction } from '@character/action';
import { CharacterCombo } from '@character/combo';

export class Character {

  action: CharacterAction
  combo: CharacterCombo

  constructor() {
    this.action = new CharacterAction()
    this.combo = new CharacterCombo()
    this.map()
  }

  map() {
    this.action.mapMethods()
    this.combo.mapMethods()
    return this
  }

  do(key: string | number) {
    const method = this.action.getMethod(key)
    if (method) {
      this.action.execute(method)
      if (!this.combo.isListening) {
        this.combo.clear()
        this.combo.listen()
      }
      this.combo.build(this.action)
    }
    return this
  }
}
