import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface PlayerStoreState {
  audioFile: any
};

const initialState: PlayerStoreState = {
  audioFile: ''
};

@Injectable()
export class PlayerStoreStore extends ComponentStore<PlayerStoreState> {
  constructor() {
    super(initialState);
  }
}
