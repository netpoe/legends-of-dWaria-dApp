import { CommandControl } from '@control/command.control';
import { Component, OnInit } from '@angular/core';
import { DWarrior } from '@character/dwarrior.character';
import { Game } from '@game/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dwaria';

  constructor(
    public commandControl: CommandControl,
    public game: Game
  ) { }

  ngOnInit() {
    const warrior = new DWarrior
    this.commandControl.bind(warrior)

    this.game.render()
  }
}
