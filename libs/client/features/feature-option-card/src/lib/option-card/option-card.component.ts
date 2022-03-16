import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { QuizItem } from '@nx/shared/types/api-quiz';

@Component({
  selector: 'nx-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionCardComponent implements OnInit {
  @Input() selectedOption!: QuizItem;
  
  constructor() { }

  ngOnInit(): void {
    console.log('OptionCardComponent')
  }

}
