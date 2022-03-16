import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { fromEvent, merge, Subject, takeUntil, tap } from 'rxjs';

export interface PlayerStoreState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number;
  currentTime: number;
  canplay: boolean;
  error: boolean;
}

const initialState: PlayerStoreState = {
  playing: false,
  readableCurrentTime: '00:00',
  readableDuration: '00:00',
  duration: 100,
  currentTime: 0,
  canplay: false,
  error: false,
};

@Injectable()
export class PlayerStoreStore extends ComponentStore<PlayerStoreState> {
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart',
  ];

  private stop$ = new Subject<void>();
  audioObj = new Audio();

  audioEvents$ = merge(
    ...this.audioEvents.map((event) => fromEvent(this.audioObj, event))
  ).pipe(
    takeUntil(this.stop$),
    tap((event: Event) => {
      switch (event.type) {
        case 'loadstart':
          this.setState((state) => {
            return {
              ...state,
              ...initialState,
            };
          });
          break;
        case 'canplay':
          this.setState((state) => {
            return {
              ...state,
              readableDuration: this.formatTime(this.audioObj.duration),
              duration: this.audioObj.duration,
              canplay: true,
            };
          });
          break;
        case 'playing':
          this.patchState({ playing: true });
          break;
        case 'pause':
          this.patchState({ playing: false });
          break;
        case 'timeupdate':
          this.setState((state) => {
            return {
              ...state,
              currentTime: this.audioObj.currentTime,
              readableCurrentTime: this.formatTime(this.audioObj.currentTime),
            };
          });
          this.patchState({ currentTime: this.audioObj.currentTime });
          break;
        case 'error':
          this.setState((state) => {
            return {
              ...state,
              ...initialState,
              error: true,
            };
          });
          break;
      }
    })
  );
  constructor() {
    super(initialState);
  }

  readonly vm$ = this.select((state) => state);
  readonly isPlaying$ = this.select((state) => state.playing);
  
  loadAudio(url: string) {
    this.audioObj.src = url;
    this.audioObj.load();
    this.audioObj.volume = 0.1;
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  seekTo(seconds: number) {
    this.audioObj.currentTime = seconds;
  }

  resetStore() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;

    this.stop$.next();
    // this.stop$.complete();
    this.setState((state) => {
      return {
        ...state,
        ...initialState,
      };
    });
  }

  private formatTime(time: number) {
    const roundedTime = Math.floor(time);

    const minutes = Math.floor(roundedTime / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(roundedTime % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnedMinutes}:${returnedSeconds}`;
  }
}
