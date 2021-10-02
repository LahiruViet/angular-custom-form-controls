import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexCodeInputComponent } from './hex-code-input.component';

describe('HexCodeInputComponent', () => {
  let component: HexCodeInputComponent;
  let fixture: ComponentFixture<HexCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexCodeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
