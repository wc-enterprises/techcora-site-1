import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipPosterComponent } from './internship-poster.component';

describe('InternshipPosterComponent', () => {
  let component: InternshipPosterComponent;
  let fixture: ComponentFixture<InternshipPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternshipPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternshipPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
