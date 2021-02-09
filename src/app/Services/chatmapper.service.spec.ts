import { TestBed } from '@angular/core/testing';

import { ChatmapperService } from './chatmapper.service';

describe('ChatmapperService', () => {
  let service: ChatmapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatmapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
