import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  information:any[];
  items: {'information':any};

  
  constructor( private http: HttpClient) { 
    this.http.get('assets/information.json').subscribe(res => {
      this.information = res['items'];

      this.information[0].open = false;
    });
  }

  ngOnInit() {}

  toggleSection(index){
    this.information[index].open = ! this.information[index].open;

    if(this.information[index].open ){
      this.items = { 'information': this.information }; 
      console.log(this.information);     
      this.information = [this.information[index]];
      /*.filter((item, itemIndex ) => itemIndex != index)  // apri un items e chiude 
      .map(item => item.open = false);*/                   //quello aperto in precedenza
    }else{
      this.information = this.items.information;
      console.log(this.information);
    }
    
  }

  toggleItem(index, childIndex){
    this.information[index].children[childIndex].open = ! this.information[index].children[childIndex].open;
  }

}
