import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeAddContainerComponent } from './episode-add-container.component';

describe('EpisodeAddContainerComponent', () => {
  let component: EpisodeAddContainerComponent;
  let fixture: ComponentFixture<EpisodeAddContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeAddContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
