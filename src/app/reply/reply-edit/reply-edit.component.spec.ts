import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyEditComponent } from './reply-edit.component';

describe('ReplyEditComponent', () => {
  let component: ReplyEditComponent;
  let fixture: ComponentFixture<ReplyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
