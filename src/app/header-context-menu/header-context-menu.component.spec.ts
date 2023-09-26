import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContextMenuComponent } from './header-context-menu.component';

describe('HeaderContextMenuComponent', () => {
  let component: HeaderContextMenuComponent;
  let fixture: ComponentFixture<HeaderContextMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContextMenuComponent]
    });
    fixture = TestBed.createComponent(HeaderContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
