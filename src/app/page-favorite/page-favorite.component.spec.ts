import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavoriteComponent } from './page-favorite.component';

describe('PageFavoriteComponent', () => {
  let component: PageFavoriteComponent;
  let fixture: ComponentFixture<PageFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
