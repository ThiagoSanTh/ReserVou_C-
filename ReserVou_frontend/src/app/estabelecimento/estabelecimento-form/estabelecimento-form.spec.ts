import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoFormComponent } from './estabelecimento-form';

describe('EstabelecimentoForm', () => {
  let component: EstabelecimentoFormComponent;
  let fixture: ComponentFixture<EstabelecimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
