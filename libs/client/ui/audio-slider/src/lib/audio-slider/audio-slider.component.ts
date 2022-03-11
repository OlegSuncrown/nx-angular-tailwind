import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'nx-audio-slider',
  templateUrl: './audio-slider.component.html',
  styleUrls: ['./audio-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSliderComponent {
  @Input() value = 0;
  @Input() max = 100;
  @Output() emitValue = new EventEmitter<number>()
  @ViewChild('progressBar') progressBar: ElementRef | undefined;

  height = 8;
  trackFillWidth = 0;
  thumbWidth = 12;
  thumbHeight = 12;

  constructor() {}

  onChange($event: any) {
    const currentValue = +$event.target.value;
    this.emitValue.emit(currentValue)
    // const currentValue = $event.target.value;
    // const progressBarWidth = this.progressBar?.nativeElement.getBoundingClientRect().width;
    // this.trackFillWidth = this.thumbWidth + (progressBarWidth / this.max) * currentValue - (this.thumbWidth / this.max) * currentValue;
  }
}
