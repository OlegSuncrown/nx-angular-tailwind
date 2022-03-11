import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PlayerStoreStore } from '@nx/client/data-access/player-store/player-store';

@Component({
  selector: 'nx-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayerStoreStore]
})

export class QuestionCardComponent implements OnInit {
  vm$ = this.playerStore.vm$

  constructor(private playerStore: PlayerStoreStore) {}

  ngOnInit(): void {
    this.playerStore.audioEvents$.subscribe()
  }

  loadSong() {
    const song = 'https://levi9-song-quiz.herokuapp.com/api/audio/2-4.mp3'
    this.playerStore.loadAudio(song);
  }

  playOne() {
    this.playerStore.play();
  }

  playTwo() {
    this.playerStore.pause();
  }

  onChange(value: number) {
    this.playerStore.seekTo(value);
    console.log(value)
  }
}
