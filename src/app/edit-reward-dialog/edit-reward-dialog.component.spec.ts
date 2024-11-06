import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRewardDialogComponent } from './edit-reward-dialog.component';

describe('EditRewardDialogComponent', () => {
  let component: EditRewardDialogComponent;
  let fixture: ComponentFixture<EditRewardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRewardDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRewardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
