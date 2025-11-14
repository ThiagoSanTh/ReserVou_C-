import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoList } from './estabelecimento-list';

describe('EstabelecimentoList', () => {
  let component: EstabelecimentoList;
  let fixture: ComponentFixture<EstabelecimentoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
