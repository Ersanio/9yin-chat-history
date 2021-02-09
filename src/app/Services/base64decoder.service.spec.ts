import { TestBed } from '@angular/core/testing';

import { Base64decoderService } from './base64decoder.service';

describe('Base64decoderService', () => {
  let service: Base64decoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64decoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
