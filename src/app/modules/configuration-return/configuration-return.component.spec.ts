import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationReturnComponent } from './configuration-return.component';

describe('ConfigurationReturnComponent', () => {
  let component: ConfigurationReturnComponent;
  let fixture: ComponentFixture<ConfigurationReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
