import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFatcsComponent } from './my-fatcs.component';

describe('MyFatcsComponent', () => {
  let component: MyFatcsComponent;
  let fixture: ComponentFixture<MyFatcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFatcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFatcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
