import { PlayerStoreStore } from './player-store.store';

describe('PlayerStoreStore', () => {
  const componentStore = new PlayerStoreStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
