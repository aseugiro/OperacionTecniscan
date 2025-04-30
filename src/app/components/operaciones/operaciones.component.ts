import { Component, OnInit } from '@angular/core';
import { OperacionService } from 'src/app/services/operacion.service';
@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css'],
  providers: [OperacionService]
})
export class OperacionesComponent implements OnInit {
  public formulario: any;

  constructor(
    private _operacionService: OperacionService
  ) { 
    this.formulario={
      operador1:'',
      operador2:'',
      operacion:'',
      resultado:''

    }

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.formulario);
    this._operacionService.getResultado(this.formulario.operacion,this.formulario.operador1,this.formulario.operador2).subscribe(
      response=>{
        this.formulario.resultado=response==0?'0':response;
      },
      exception =>{
        console.log(exception);
        this.formulario.resultado=exception.error.error;
      }

    )
  }

}
