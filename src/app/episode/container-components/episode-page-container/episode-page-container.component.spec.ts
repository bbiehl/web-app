import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodePageContainerComponent } from './episode-page-container.component';

describe('EpisodePageContainerComponent', () => {
  let component: EpisodePageContainerComponent;
  let fixture: ComponentFixture<EpisodePageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodePageContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodePageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
