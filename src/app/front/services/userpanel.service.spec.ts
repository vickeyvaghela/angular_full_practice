import { TestBed } from '@angular/core/testing';

import { UserpanelService } from './userpanel.service';

describe('UserpanelService', () => {
  let service: UserpanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
