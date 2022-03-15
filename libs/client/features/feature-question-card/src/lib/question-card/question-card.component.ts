import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PlayerStoreStore } from '@nx/client/data-access/player-store/player-store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nx-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayerStoreStore],
})
export class QuestionCardComponent implements OnInit, OnDestroy {
  @Input() set song(song: string | undefined | null) {
    if (song) {
      const url = 'https://levi9-song-quiz.herokuapp.com/api/' + song;
      this.loadSong(url);
    } else {
      this.playerStore.pause();
    }
  }
  
  sub!: Subscription;
  vm$ = this.playerStore.vm$;

  constructor(private playerStore: PlayerStoreStore) {}

  ngOnInit(): void {
    this.sub = this.playerStore.audioEvents$.subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
