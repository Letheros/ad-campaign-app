import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {CampaignDataService} from '../campaign-data.service';
import {Campaign} from '../../shared/campaign.model';


@Component({
  selector: 'app-fetch-campaign',
  templateUrl: './fetch-campaign.component.html',
  styleUrls: ['./fetch-campaign.component.css']
})
export class FetchCampaignComponent implements OnInit {
  activatedCampaign = {id: null, ad_content: null};
  @ViewChild('userIDInput') userIDInputRef: ElementRef;
  constructor(private campaignDataService: CampaignDataService) {
  }

  ngOnInit() {
  }
  onFetchCampaign() {
    const id = this.userIDInputRef.nativeElement.value;
    if ((typeof id) === undefined || !id) {
      alert('Please input your User ID');
      return false;
    }
    this.campaignDataService.requireCampaignDataByID(id)
      .subscribe(
        (data: any) => {
          this.activatedCampaign = data;
          console.log(this.activatedCampaign);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
