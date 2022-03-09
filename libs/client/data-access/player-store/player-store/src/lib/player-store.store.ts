import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { fromEvent } from 'rxjs';

export interface PlayerStoreState {
  audioObj: HTMLAudioElement;
}

const initialState: PlayerStoreState = {
  audioObj: new Audio(),
};

@Injectable({
  providedIn: 'root',
})
export class PlayerStoreStore extends ComponentStore<PlayerStoreState> {
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  
  song = 'https://levi9-song-quiz.herokuapp.com/api/audio/4-1.mp3'
  audioObj = new Audio()
  currentTime$ = fromEvent(this.audioObj, this.audioEvents[5])

  constructor() {
    super(initialState);
  }

  play() {
    this.audioObj.src = this.song;
    this.audioObj.load();
    this.audioObj.play();
  }

}
