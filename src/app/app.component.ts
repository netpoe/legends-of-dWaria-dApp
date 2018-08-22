import { CommandControl } from '@control/command.control';
import { Component, OnInit } from '@angular/core';
import { DWarrior } from '@character/dwarrior.character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dwaria';

  constructor(public commandControl: CommandControl) { }

  ngOnInit() {
    const warrior = new DWarrior();
    this.commandControl.bind(warrior)
  }
}
