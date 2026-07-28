import { TestBed } from '@angular/core/testing';

import { JamendoFetch } from './jamendo-fetch';

describe('JamendoFetch', () => {
  let service: JamendoFetch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JamendoFetch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
