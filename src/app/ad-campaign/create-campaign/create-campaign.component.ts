import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CampaignDataService } from '../campaign-data.service';
import {Campaign} from '../../shared/campaign.model';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  @ViewChild('IDInput') IDInputRef: ElementRef;
  @ViewChild('durationInput') durationInputRef: ElementRef;
  @ViewChild('contentInput') contentInputRef: ElementRef;
  constructor(private campaignDataService: CampaignDataService) { }

  ngOnInit() {
  }

  onCreateCampaign() {
    const newID = this.IDInputRef.nativeElement.value;
    const newDuration = this.durationInputRef.nativeElement.value;
    const newContent = this.contentInputRef.nativeElement.value;
    const newCampaign = new Campaign(newID, newDuration, newContent);
    this.campaignDataService.addCampaign(newCampaign);
    this.campaignDataService.storeCampaign(newCampaign)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
