import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeEditContainerComponent } from './episode-edit-container.component';

describe('EpisodeEditContainerComponent', () => {
  let component: EpisodeEditContainerComponent;
  let fixture: ComponentFixture<EpisodeEditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeEditContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
