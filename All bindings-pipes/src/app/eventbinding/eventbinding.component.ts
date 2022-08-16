import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  allowNewServer = false;  
  serverCreationStatus= 'No Server is created.';  
  count:number =0;
  
  constructor() {  
     setTimeout(() =>{  
       this.allowNewServer = true;  
     }, 5000);  
   }  
   
   ngOnInit() {  
   }  

   // this is the logic part  u need to create customized function
   onCreateServer(){
    this.serverCreationStatus='server is created';
    this.count++;
    console.log(this.count)

   }

}
