import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetailsContainerComponent } from './episode-details-container.component';

describe('EpisodeDetailsContainerComponent', () => {
  let component: EpisodeDetailsContainerComponent;
  let fixture: ComponentFixture<EpisodeDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDetailsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
