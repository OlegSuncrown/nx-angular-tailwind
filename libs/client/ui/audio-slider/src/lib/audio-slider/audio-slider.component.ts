import { Component } from '@angular/core';

@Component({
  selector: 'nx-audio-slider',
  templateUrl: './audio-slider.component.html',
  styleUrls: ['./audio-slider.component.scss']
})
export class AudioSliderComponent {

  constructor() { }

  // ngOnInit(): void {
  // }

  onChange($event: any) {
    console.log($event)
  }
}
