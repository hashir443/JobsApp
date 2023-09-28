import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedinModalComponent } from './not-loggedin-modal.component';

describe('NotLoggedinModalComponent', () => {
  let component: NotLoggedinModalComponent;
  let fixture: ComponentFixture<NotLoggedinModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLoggedinModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotLoggedinModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
