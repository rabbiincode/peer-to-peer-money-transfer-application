import { TestBed } from '@angular/core/testing';

import { TrackScrollPositionService } from './track-scroll-position.service';

describe('TrackScrollPositionService', () => {
  let service: TrackScrollPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackScrollPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
