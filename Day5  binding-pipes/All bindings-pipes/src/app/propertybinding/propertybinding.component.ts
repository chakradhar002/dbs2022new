import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  allowNewServer = false;
  constructor() { }

  ngOnInit(): void {
  }
  fullName: string = 'Robert Junior';  


}
