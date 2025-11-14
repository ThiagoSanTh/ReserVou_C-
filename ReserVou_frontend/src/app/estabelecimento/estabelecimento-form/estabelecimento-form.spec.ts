import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoForm } from './estabelecimento-form';

describe('EstabelecimentoForm', () => {
  let component: EstabelecimentoForm;
  let fixture: ComponentFixture<EstabelecimentoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
