import { TestBed } from '@angular/core/testing';

import { ChatparserService } from './chatparser.service';

describe('ChatparserService', () => {
  let service: ChatparserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatparserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
