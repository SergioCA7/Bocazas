import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNewAlertComponent } from './tab-new-alert.component';

describe('TabNewAlertComponent', () => {
  let component: TabNewAlertComponent;
  let fixture: ComponentFixture<TabNewAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNewAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNewAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
