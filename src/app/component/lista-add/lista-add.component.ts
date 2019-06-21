import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item:any = {
    name:'',
    modAdministracion:'',
    mecAccion:'',
    contraindicaciones:'',
    advertenciaPrecauciones:'',
    cantidad:0
  }

  constructor(private servicio:ConexionService) { }

  ngOnInit() {
  }

  agregar(){
    this.servicio.agregarItem(this.item);
    this.item.name = '';
    //this.servicio.agregarItem(this.item.modAdministracion);
    this.item.modAdministracion = '';
    //this.servicio.agregarItem(this.item.contraindicaciones);
    this.item.contraindicaciones = '';
    //this.servicio.agregarItem(this.item.advertenciaPrecauciones);
    this.item.advertenciaPrecauciones = '';
    //this.servicio.agregarItem(this.item.mecAccion);
    this.item.mecAccion = '';
    //this.servicio.agregarItem(this.item.cantidad);
    this.item.cantidad = 0;    
  }

}
