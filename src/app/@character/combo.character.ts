import { CharacterAction } from '@character/action.character';

export class CharacterCombo {

  timeout = 500
  isListening = false
  combo: string

  listen() {
    this.isListening = true
    setTimeout(() => {
      this.isListening = false
    }, this.timeout)
  }

  clear() {
    this.combo = ''
  }

  perform(action: CharacterAction) {
    this.combo += `${action.state.name}+`
    console.log(this.combo)
  }

}
