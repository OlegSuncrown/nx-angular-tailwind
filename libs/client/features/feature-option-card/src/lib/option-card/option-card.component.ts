import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { PlayerStoreStore } from '@nx/client/data-access/player-store/player-store';
import { QuizItem } from '@nx/shared/types/api-quiz';

@Component({
  selector: 'nx-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
  providers: [PlayerStoreStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionCardComponent implements OnInit, OnDestroy {
  @Output() readonly isPlaying = this.playerStore.isPlaying$;

  @Input() levelIsCompleted = false;
  @Input() imageUrl: string | undefined;
  @Input() set selectedOption(selectedOption: QuizItem | undefined) {
    if (selectedOption?.audio) {
      const url = this.URL + selectedOption?.audio;
      this.loadSong(url);
    } else {
      this.playerStore.resetStore();
    }
  }

  @Input() set stop(isPlaying: boolean) {
    if (isPlaying) {
      this.playerStore.pause();
    }
  }

  URL = 'https://levi9-song-quiz.herokuapp.com/api/';
  vm$ = this.playerStore.vm$;

  constructor(private playerStore: PlayerStoreStore) {}

  ngOnInit(): void {
    this.playerStore.audioEvents$.subscribe();
  }

  ngOnDestroy(): void {
    this.playerStore.resetStore();
  }

  loadSong(url: string) {
    this.playerStore.loadAudio(url);
  }

  togglePlay(isPlaying: boolean) {
    if (isPlaying) {
      this.playerStore.pause();
    } else {
      this.playerStore.play();
    }
  }

  onChange(value: number) {
    this.playerStore.seekTo(value);
  }
}
