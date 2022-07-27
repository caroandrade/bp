import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styles: [`
              .iconTipo{
                  color: #007F90;
                  position: relative;
                  display: block;
                  padding: 10px;
                 
          }

          .iconosAlineados{

                
                display: flex;
                justify-content: space-between;
                align-items: center;
          }
  `
  ]
})
export class RedesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
}
