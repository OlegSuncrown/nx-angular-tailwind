import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayButtonComponent {

  constructor() { }
}
