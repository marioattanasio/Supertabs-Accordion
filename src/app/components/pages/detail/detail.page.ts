import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input() childapp: string;

  public items:{};

  constructor(private route: ActivatedRoute) { 
      
   // this.items = this.route.snapshot.paramMap.get('param');   //in questo modo andiamo ad estrarre i Dati che abbiamo passato come singolo parametro da l'url;
   
 
  
  this.items= history.state.param;   //in questo modo andiamo ad estrarre i Dati che abbiamo passato come oggetto ;
    
  }

  ngOnInit() {
  }

}
