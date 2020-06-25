import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirSistemaComponent } from './incluir-sistema.component';

describe('IncluirSistemaComponent', () => {
  let component: IncluirSistemaComponent;
  let fixture: ComponentFixture<IncluirSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
