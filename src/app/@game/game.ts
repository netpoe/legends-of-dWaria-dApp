import { Injectable } from '@angular/core';
import * as PIXI from 'pixi.js';

@Injectable({
  providedIn: 'root'
})
export class Game {

  engine: PIXI.Application

  constructor() {
    this.engine = new PIXI.Application({
      width: window.screen.width,
      height: window.screen.height
    })
  }

  render() {
    document.body.appendChild(this.engine.view)
    return this
  }

}
