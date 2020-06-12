import { Component, OnInit, Input } from '@angular/core';
import { UomoPage } from './../pages/uomo/uomo.page';
import { DonnaPage } from './../pages/donna/donna.page'; 

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  uomoPage = UomoPage;
  donnaPage = DonnaPage;


  constructor() { }

  ngOnInit() {}

}
