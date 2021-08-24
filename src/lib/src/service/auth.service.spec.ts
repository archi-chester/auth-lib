import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should create service', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([AuthService], (service: AuthService) => {
    expect(service.getMeaning()).toBe(42);
  }));
});
