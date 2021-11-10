import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonUndergroundComponent } from './london-underground.component';

describe('LondonUndergroundComponent', () => {
  let component: LondonUndergroundComponent;
  let fixture: ComponentFixture<LondonUndergroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondonUndergroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonUndergroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
