import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListContainerComponent } from './episode-list-container.component';

describe('EpisodeListContainerComponent', () => {
  let component: EpisodeListContainerComponent;
  let fixture: ComponentFixture<EpisodeListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeListContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
