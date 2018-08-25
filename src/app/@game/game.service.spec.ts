import { TestBed, inject } from '@angular/core/testing';

import { Game } from '@game/game';

describe('Game', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Game]
    });
  });

  it('should be created', inject([Game], (service: Game) => {
    expect(service).toBeTruthy();
  }));
});
