import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PlayerStoreStore } from '@nx/client/data-access/player-store/player-store';

@Component({
  selector: 'nx-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayerStoreStore],
})
export class QuestionCardComponent implements OnInit, OnDestroy {
  URL = 'https://levi9-song-quiz.herokuapp.com/api/';
  
  @Input() levelIsCompleted = false;
  @Input() imageUrl: string | undefined;
  @Input() set song(song: string | undefined) {
    if (song) {
      const url = this.URL + song;
      this.loadSong(url);
    } else {
      this.playerStore.resetStore();
    }
  }

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
