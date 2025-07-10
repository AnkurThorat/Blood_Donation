import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorHomePageComponent } from './donor-home-page.component';

describe('DonorHomePageComponent', () => {
  let component: DonorHomePageComponent;
  let fixture: ComponentFixture<DonorHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorHomePageComponent]
    });
    fixture = TestBed.createComponent(DonorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
