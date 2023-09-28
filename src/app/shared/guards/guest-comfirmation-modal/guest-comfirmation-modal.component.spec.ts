import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestComfirmationModalComponent } from './guest-comfirmation-modal.component';

describe('GuestComfirmationModalComponent', () => {
  let component: GuestComfirmationModalComponent;
  let fixture: ComponentFixture<GuestComfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestComfirmationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestComfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
