export enum ComboStateName {
  jumpingAndPunching = 'jumpingAndPunching',
}

export class CharacterComboState {

  name: string

  set(name: ComboStateName) {
    console.log(`Character is ${name}!!!`)
    this.name = name
  }

  is(name: ComboStateName): boolean {
    return this.name === name
  }
}
