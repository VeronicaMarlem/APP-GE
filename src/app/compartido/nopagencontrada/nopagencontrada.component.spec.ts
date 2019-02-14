import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagencontradaComponent } from './nopagencontrada.component';

describe('NopagencontradaComponent', () => {
  let component: NopagencontradaComponent;
  let fixture: ComponentFixture<NopagencontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopagencontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopagencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
