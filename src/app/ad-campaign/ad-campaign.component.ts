import { Component, OnInit } from '@angular/core';

import { CampaignDataService } from './campaign-data.service';

@Component({
  selector: 'app-ad-campaign',
  templateUrl: './ad-campaign.component.html',
  styleUrls: ['./ad-campaign.component.css']
})
export class AdCampaignComponent implements OnInit {

  constructor(private campaignDataServcie: CampaignDataService) { }

  ngOnInit() {
  }

}
