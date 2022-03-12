import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PlayerStoreStore } from '@nx/client/data-access/player-store/player-store';

@Component({
  selector: 'nx-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayerStoreStore],
})
export class QuestionCardComponent implements OnInit {
  @Input() set song(song: string | undefined | null) {
    const url = 'https://levi9-song-quiz.herokuapp.com/api/' + song;
    this.loadSong(url);
  }

  vm$ = this.playerStore.vm$;

  constructor(private playerStore: PlayerStoreStore) {}

  ngOnInit(): void {
    this.playerStore.audioEvents$.subscribe();
  }

  loadSong(url: string) {
    this.playerStore.loadAudio(url);
  }

  playOne() {
    this.playerStore.play();
  }

  playTwo() {
    this.playerStore.pause();
  }

  onChange(value: number) {
    this.playerStore.seekTo(value);
  }
}
