import { TestBed } from '@angular/core/testing';

import { MiniPlayer } from './mini-player';

describe('MiniPlayer', () => {
  let service: MiniPlayer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniPlayer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
