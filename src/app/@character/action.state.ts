export enum ActionStateName {
  walking = 'walking',
  jumping = 'jumping',
  punching = 'punching',
}

export class CharacterActionState {

  name: string

  set(name: ActionStateName) {
    console.log(`Character is ${name}`)
    this.name = name
  }

  is(name: ActionStateName): boolean {
    return this.name === name
  }
}
