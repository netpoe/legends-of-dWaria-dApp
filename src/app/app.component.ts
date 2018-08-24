import { CommandControl } from '@control/command.control';
import { Component, OnInit } from '@angular/core';
import { DWarrior } from '@character/dwarrior.character';
import { GameService } from './@game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dwaria';

  constructor(
    public commandControl: CommandControl,
    public gameService: GameService
  ) { }

  ngOnInit() {
    const warrior = new DWarrior
    this.commandControl.bind(warrior)

    this.gameService.render()
  }
}
