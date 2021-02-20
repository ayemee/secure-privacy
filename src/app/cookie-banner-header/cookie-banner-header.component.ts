import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner-header',
  templateUrl: './cookie-banner-header.component.html',
  styleUrls: ['./cookie-banner-header.component.css']
})
export class CookieBannerHeaderComponent implements OnInit {

  constructor() { }

  public showAccordions: boolean = false;

  ngOnInit(): void {
  }

}
