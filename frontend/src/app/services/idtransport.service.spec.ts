import { TestBed } from '@angular/core/testing';

import { IdtransportService } from './idtransport.service';

describe('IdtransportService', () => {
  let service: IdtransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdtransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
