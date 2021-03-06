import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavService } from '../sidenav/nav.service';
import { UserSettingsService, UserSettings } from '../common/user-settings.service';

const NoLog = true;  // set to false for console logging

@Component({
  selector: 'gm-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  private ClassName: string = this.constructor.name + ": ";
  messages: any[] = [];
  usSubscription: Subscription;
  location: string;
  backgroundStyle: any;

  constructor(public navService: NavService, private userSettingsService: UserSettingsService) {
  }

  ngOnInit() {

    this.userSettingsService.subscribeSettings(message => {
      // NoLog || console.log(this.ClassName + "receive message: " + message)
      let newSettings = this.userSettingsService.settings;
      NoLog || console.log(this.ClassName + "SCAO ", newSettings);
      this.changeLocation(newSettings);
    })
    this.changeBackground("generic");
  }

  openNav() {
    this.navService.openNav();
  }

  private changeLocation(item: UserSettings) {
    this.location = item.location;
    NoLog || console.log(this.ClassName + "location:" + this.location);
    this.changeBackground(this.location)
}

  changeBackground(location: string) {
    let background;

    // switch (location) {
    //   case 'Austin': { background = "url('/assets/images/Austin.png')"; break; }
    //   case 'Travis County': { background = "url('/assets/images/Travis_County.png')"; break; }
    //   case 'State of Texas': { background = "url('/assets/images/Texas_State_Capitol.png')"; break; }
    //   case 'United States': { background = "url('/assets/images/United_States_Capitol.png')"; break; }
    //   case 'Glendale HOA': { background = "url('/assets/images/condominiums.png')"; break; }
    //   case 'generic': { background = "url('/assets/images/Budget_Town_Hall.png')"; break; }
    // }

    switch (location) {
      case 'Boothbay Harbor': { background = "url('/assets/images/Boothbay_Harbor_inner_harbor.png')"; break; }
      case 'Lincoln County': { background = "url('/assets/images/Lincoln_County_Pemaquid_Lighthouse.png')"; break; }
      case 'State of Maine': { background = "url('/assets/images/Maine_Acadia_National_Park.png')"; break; }
      case 'United States': { background = "url('/assets/images/United_States_Capitol.png')"; break; }
      case 'Glendale HOA': { background = "url('/assets/images/condominiums.png')"; break; }
      case 'generic': { background = "url('/assets/images/Budget_Town_Hall.png')"; break; }
    }

    this.backgroundStyle = { 'background-image': background };
  }

}
