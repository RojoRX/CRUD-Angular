import { Component } from '@angular/core';
import { empty } from 'rxjs';
//importamos el modelo con la clase persona
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRUD';

  personaArray: Persona[] = [
    {id: 1, name:"Carlo", country:"Rivas", ci:12345678}
  ];
  

  //Variable para ngModel 
  selectedPersona: Persona= new Persona(0,"","",0);

  addOrEdit(){
    if(this.selectedPersona.id === 0){
      this.selectedPersona.id=this.personaArray.length+1;
      this.personaArray.push(this.selectedPersona);
    }
    this.selectedPersona=new Persona(this.selectedPersona.id,this.selectedPersona.name,this.selectedPersona.country,this.selectedPersona.ci);
    this.selectedPersona.name="";
    this.selectedPersona.country="";
    this.selectedPersona.ci=0;

    
  }

  editar(persona: Persona){
    this.selectedPersona=persona;
  }

  delete(){
    if(confirm("Estas seguro de eliminar esto?"))
    {
      this.personaArray = this.personaArray.filter(x => x!= this.selectedPersona);
      this.selectedPersona.name="";
      this.selectedPersona.country="";
      this.selectedPersona.ci=0;
    }
    console.log(this.personaArray);
  }
  
  
}
