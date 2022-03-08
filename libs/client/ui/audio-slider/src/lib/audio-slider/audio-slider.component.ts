import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'nx-audio-slider',
  templateUrl: './audio-slider.component.html',
  styleUrls: ['./audio-slider.component.scss'],
})
export class AudioSliderComponent {
  @ViewChild('progressBar')
  progressBar: ElementRef | undefined;

  width: any = '0%';
  thumbWidth = 15;
  constructor() {}

  // ngOnInit(): void {
  // }

  onChange($event: any) {
    // this.width = $event.target.value + '%'
    const currentValue = $event.target.value;
    const progressBarWidth = this.progressBar?.nativeElement.getBoundingClientRect().width
    this.width = this.thumbWidth + progressBarWidth/100 * currentValue - (this.thumbWidth/100 * currentValue) + 'px';
    console.log(this.width);
  }
}
