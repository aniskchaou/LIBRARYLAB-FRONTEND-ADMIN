import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSMSComponent } from './configuration-sms.component';

describe('ConfigurationSMSComponent', () => {
  let component: ConfigurationSMSComponent;
  let fixture: ComponentFixture<ConfigurationSMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationSMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
