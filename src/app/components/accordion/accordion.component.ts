import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService} from 'src/app/components/services/service.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() data: string;
  information:any[];
  app:any[];
  
  constructor( private http: HttpClient, private router: Router, private service: ServiceService ) { 
    this.http.get('assets/information.json').subscribe(res => {
      this.information= res['items'];
  
    });
  }

  ngOnInit() {
    //this.information[this.data].open
    console.log(this.data);
    
      
  }

  ngAfterViewInit(){
    console.log("after")
  }



  toggleSection(index){

    
    this.service.setData(index);
 
    if( !this.information[index].open){
      this.information.forEach(i => {
        if(i != this.information[index]) {
          i.show= false;
          i.selected=false;
        }
      })
    }else{
      this.information.forEach(i => {
        if(i != this.information[index]){
          i.show = true;
          i.selected=true;
        }else{
          i.show = true;
          i.selected=false;
        }
      })
    }

    this.information[index].open = ! this.information[index].open;
    if(this.information[index].open){
    //this.items = { 'information': this.information };   
    //this.information = [this.information[index]];

      this.information
      .filter((item, itemIndex ) => itemIndex != index)  // apri un items e chiude 
      .map(item => item.open = false);                  //quello aperto in precedenza
    }/*else{
       this.information = this.items.information;
    }*/
  }

  toggleItem(index, childIndex){
    //this.information[index].children[childIndex].open = ! this.information[index].children[childIndex].open;
    // this.router.navigate(['/detail', {param: this.information[index].children[childIndex].name}]);
    this.router.navigate (['/detail'], {state: {param:  this.information[index].children[childIndex]} })
  }

}
