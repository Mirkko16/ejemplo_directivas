import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listadoEstudiantes:any[]=[
    {nombre:'Mirko', estado:'Regular'},
    {nombre:'Matias', estado:'Aprobo'},
    {nombre:'Luciano', estado:'Promocion'},
    {nombre:'Gustavo', estado:'Recursante'},
  ]

  mostrar:boolean=true;
  mostrarNomostrar(){
    this.mostrar=!this.mostrar;
  }
}
