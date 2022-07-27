import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styles: [`
    body { 
      padding-top: 30px;
    }
    .container-fluid{
      padding-left: 80px;
      padding-right: 60px;
      
      
    }
   
    
  `
  ]
})
export class BarraMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
