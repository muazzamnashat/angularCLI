import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithCssComponent } from './with-css.component';

describe('WithCssComponent', () => {
  let component: WithCssComponent;
  let fixture: ComponentFixture<WithCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
