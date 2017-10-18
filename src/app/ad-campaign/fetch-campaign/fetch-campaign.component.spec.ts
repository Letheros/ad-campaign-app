import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCampaignComponent } from './fetch-campaign.component';

describe('FetchCampaignComponent', () => {
  let component: FetchCampaignComponent;
  let fixture: ComponentFixture<FetchCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
