import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsBarComponent } from './shortcuts-bar.component';

describe('ShortcutsBarComponent', () => {
  let component: ShortcutsBarComponent;
  let fixture: ComponentFixture<ShortcutsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcutsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
