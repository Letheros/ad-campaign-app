import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdCampaignComponent } from './ad-campaign/ad-campaign.component';
import { CreateCampaignComponent } from './ad-campaign/create-campaign/create-campaign.component';
import { FetchCampaignComponent } from './ad-campaign/fetch-campaign/fetch-campaign.component';
import { AdCampaignStartComponent } from './ad-campaign/ad-campaign-start/ad-campaign-start.component';
import { AppRoutingModule } from './app-routing.module';
import {CampaignDataService} from './ad-campaign/campaign-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdCampaignComponent,
    CreateCampaignComponent,
    FetchCampaignComponent,
    AdCampaignStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CampaignDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
