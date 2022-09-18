import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeOverviewComponent } from './episode-overview.component';

describe('EpisodeOverviewComponent', () => {
  let component: EpisodeOverviewComponent;
  let fixture: ComponentFixture<EpisodeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
