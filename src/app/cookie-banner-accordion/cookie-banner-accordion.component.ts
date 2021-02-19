import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Banner } from '../banner.model'


@Component({
  selector: 'app-cookie-banner-accordion',
  templateUrl: './cookie-banner-accordion.component.html',
  styleUrls: ['./cookie-banner-accordion.component.css']
})
export class CookieBannerAccordionComponent implements OnInit {

  constructor(private apiService: ApiService<Banner>) { }

  @Input() showAll: boolean = true;

  public banner = <Banner>{}

  ngOnInit() {
    this.apiService.getBanner().subscribe((data: Banner)=> {  
      this.banner = data;
		})  
  }

}
