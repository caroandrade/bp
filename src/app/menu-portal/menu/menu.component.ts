import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  constructor( ) {
   
   }

  ngOnInit(): void {
  }
irPortal(){
  
   
  window.location.href = "https://www.mendoza.edu.ar/";
  
}
irEje(){
  
  window.location.href = "https://www.mendoza.edu.ar/ejes-gestion-educativa-2020-2023/";
 
}
  
}

