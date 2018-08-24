import { CharacterActionControl } from '@control/action';
import { CharacterCombo } from '@control/combo';
import { CharacterActionInterface } from '@control/action.interface';

export class Character {

  control: CharacterActionControl
  combo: CharacterCombo

  constructor() {
    this.control = new CharacterActionControl()
    this.combo = new CharacterCombo()
    this.map()
  }

  map() {
    this.control.mapActions()
    this.combo.mapActionNames()
    return this
  }

  do(key: string | number) {
    const action: CharacterActionControl = this.control.getAction(key)
    if (action) {
      action.execute()
      if (!this.combo.isListening) {
        this.combo.clear()
        this.combo.listen()
      }
      this.combo.build(action)
    }
    return this
  }
}
