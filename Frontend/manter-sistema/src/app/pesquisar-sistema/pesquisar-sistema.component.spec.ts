import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarSistemaComponent } from './pesquisar-sistema.component';

describe('PesquisarSistemaComponent', () => {
  let component: PesquisarSistemaComponent;
  let fixture: ComponentFixture<PesquisarSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
