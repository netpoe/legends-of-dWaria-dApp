import { Injectable } from '@angular/core';
import { Character } from '@character/character';

@Injectable({
  providedIn: 'root'
})
export class CommandControl {

  constructor() { }

  map() {

  }

  bind(character: Character) {
    document.addEventListener('keydown', event => {
      const key = event.key || event.keyCode
      character.do(key)
    })
  }

}
