import { TestBed } from '@angular/core/testing';

import { ConnexionService } from './connexion-service.service';

describe('ConnexionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnexionService = TestBed.get(ConnexionService);
    expect(service).toBeTruthy();
  });
});
