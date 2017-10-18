import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {CampaignDataService} from '../campaign-data.service';
import {Campaign} from '../../shared/campaign.model';

@Component({
  selector: 'app-fetch-campaign',
  templateUrl: './fetch-campaign.component.html',
  styleUrls: ['./fetch-campaign.component.css']
})
export class FetchCampaignComponent implements OnInit {
  campaignArray: Campaign[];
  userCampaign: Campaign;
  @ViewChild('IDInput') userIDInput: ElementRef;
  constructor(private campaignDataService: CampaignDataService) {
  }

  ngOnInit() {
  }
  onFetchCampaign() {
    const data = this.campaignDataService.getCampaign();
    console.log(data);
    // this.userCampaign = this.campaignArray[index];
  }

}
