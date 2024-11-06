import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojakhanComponent } from './lojakhan.component';

describe('LojakhanComponent', () => {
  let component: LojakhanComponent;
  let fixture: ComponentFixture<LojakhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LojakhanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LojakhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
