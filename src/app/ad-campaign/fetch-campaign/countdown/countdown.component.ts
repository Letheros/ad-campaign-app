import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {CampaignDataService} from "../../campaign-data.service";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

  private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  message: string;

  constructor(elm: ElementRef,
              private campaignDataService: CampaignDataService) {
    // this.futureString = elm.nativeElement.getAttribute('inputDate');
    this.futureString = this.campaignDataService.activatedCampaign.end_time;
  }

  parseTime(rest: any) {
    let days, hours, minutes, seconds;
    days = Math.floor(rest / 86400);
    rest -= days * 86400;
    hours = Math.floor(rest / 3600) % 24;
    rest -= hours * 3600;
    minutes = Math.floor(rest / 60) % 60;
    rest -= minutes * 60;
    seconds = rest % 60;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
    // return {
    //   days: days,
    //   hours: hours,
    //   minutes: minutes,
    //   seconds: seconds
    // };
  }
  ngOnInit() {
    this.future = new Date(this.futureString);
    this.$counter = Observable.interval(1000)
      .map(
        (x) => {
        this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
        return x;
    });
    this.subscription = this.$counter.subscribe((x) => this.message = this.parseTime(this.diff));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
