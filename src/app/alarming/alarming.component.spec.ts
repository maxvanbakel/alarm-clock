import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmingComponent } from './alarming.component';

describe('AlarmingComponent', () => {
  let component: AlarmingComponent;
  let fixture: ComponentFixture<AlarmingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
