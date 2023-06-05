import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeProgramacionComponent } from './lenguaje-programacion.component';

describe('LenguajeProgramacionComponent', () => {
  let component: LenguajeProgramacionComponent;
  let fixture: ComponentFixture<LenguajeProgramacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguajeProgramacionComponent]
    });
    fixture = TestBed.createComponent(LenguajeProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
