import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'nx-audio-slider',
  templateUrl: './audio-slider.component.html',
  styleUrls: ['./audio-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioSliderComponent {
  @ViewChild('progressBar')
  progressBar: ElementRef | undefined;
  height = 4;
  trackFillWidth = 0;
  thumbWidth = 12;
  thumbHeight = 12;
  
  constructor() {}

  onChange($event: any) {
    const currentValue = $event.target.value;
    const progressBarWidth = this.progressBar?.nativeElement.getBoundingClientRect().width
    this.trackFillWidth = this.thumbWidth + progressBarWidth/100 * currentValue - (this.thumbWidth/100 * currentValue);
  }
}
