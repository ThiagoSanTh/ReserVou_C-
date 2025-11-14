import { TestBed } from '@angular/core/testing';

import { Estabelecimento } from './estabelecimento.model';

describe('Estabelecimento', () => {
  let service: Estabelecimento;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Estabelecimento);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
