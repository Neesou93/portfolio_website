import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioObjectsComponent } from './portfolio-objects.component';

describe('PortfolioObjectsComponent', () => {
  let component: PortfolioObjectsComponent;
  let fixture: ComponentFixture<PortfolioObjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioObjectsComponent]
    });
    fixture = TestBed.createComponent(PortfolioObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
