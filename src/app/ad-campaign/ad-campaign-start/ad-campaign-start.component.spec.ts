import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCampaignStartComponent } from './ad-campaign-start.component';

describe('AdCampaignStartComponent', () => {
  let component: AdCampaignStartComponent;
  let fixture: ComponentFixture<AdCampaignStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCampaignStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCampaignStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
