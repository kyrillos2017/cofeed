import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoverImageComponent } from './card-cover-image.component';

describe('CardCoverImageComponent', () => {
  let component: CardCoverImageComponent;
  let fixture: ComponentFixture<CardCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCoverImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
