import { Component, OnInit } from '@angular/core';
import { ServiceService} from 'src/app/components/services/service.service';

@Component({
  selector: 'app-donna',
  templateUrl: './donna.page.html',
  styleUrls: ['./donna.page.scss'],
})
export class DonnaPage implements OnInit {
  index: number;

  constructor(private service: ServiceService) {

   
    
   }

  ngOnInit() {
    this.index=2;
    
  
  }

}