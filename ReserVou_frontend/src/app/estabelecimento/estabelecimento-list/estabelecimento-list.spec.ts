import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoListComponent } from './estabelecimento-list';

describe('EstabelecimentoList', () => {
  let component: EstabelecimentoListComponent;
  let fixture: ComponentFixture<EstabelecimentoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstabelecimentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
