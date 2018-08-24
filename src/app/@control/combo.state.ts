export enum ComboStateName {
  jumpingAndPunching = 'jumpingAndPunching',
  doubleJumping = 'doubleJumping',
  trippleJumping = 'trippleJumping',
}

export class CharacterComboState {

  name: string

  isActive = false

  set(name: ComboStateName) {
    console.log(`Character is ${name}!!!`)
    this.isActive = true
    this.name = name
    return this
  }

  clear() {
    this.isActive = false
    this.name = ''
    return this
  }

  is(name: ComboStateName): boolean {
    return this.name === name
  }
}
