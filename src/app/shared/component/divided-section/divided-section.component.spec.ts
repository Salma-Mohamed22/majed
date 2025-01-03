import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedSectionComponent } from './divided-section.component';

describe('DividedSectionComponent', () => {
  let component: DividedSectionComponent;
  let fixture: ComponentFixture<DividedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividedSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
