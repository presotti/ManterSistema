import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarSistemaComponent } from './alterar-sistema.component';

describe('AlterarSistemaComponent', () => {
  let component: AlterarSistemaComponent;
  let fixture: ComponentFixture<AlterarSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
