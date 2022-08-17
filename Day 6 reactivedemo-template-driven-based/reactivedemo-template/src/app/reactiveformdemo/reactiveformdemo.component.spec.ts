import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformdemoComponent } from './reactiveformdemo.component';

describe('ReactiveformdemoComponent', () => {
  let component: ReactiveformdemoComponent;
  let fixture: ComponentFixture<ReactiveformdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
