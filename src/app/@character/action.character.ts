import { CharacterActionInterface } from '@character/action.interface.character';

export class CharacterAction implements CharacterActionInterface {

  actionKeyMap: any = {}

  mapActions() {
    this.actionKeyMap['ArrowRight'] = 'walk'
    this.actionKeyMap['ArrowUp'] = 'jump'
  }

  do(key: string | number) {
    const action = this.actionKeyMap[key]
    if (action) {
      this[action]()
    }
  }

  walk() {
    console.log('walked')
  }

  jump() {
    console.log('jumped')
  }

}
