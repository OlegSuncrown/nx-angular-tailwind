import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setPlayerName } from '@nx/client/data-access/quiz-store';

@Component({
  selector: 'nx-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss'],
})
export class StartQuizComponent {
  nameControl: FormControl = new FormControl('');

  constructor(private store: Store) {}

  onSetName(playerName: string) {
    this.store.dispatch(setPlayerName({ playerName }));
  }
}