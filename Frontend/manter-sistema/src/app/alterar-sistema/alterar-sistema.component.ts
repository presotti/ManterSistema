import { Component, OnInit, Output } from '@angular/core';
import { SistemaService } from '../servico/sistema.service';
import { Sistema } from '../Modelo/Sistema';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-alterar-sistema',
  templateUrl: './alterar-sistema.component.html',
  styleUrls: ['./alterar-sistema.component.css']
})
export class AlterarSistemaComponent implements OnInit {

  @Output() alteracao = true;

  @Output() formulario: FormGroup;

  cor = '';

  sistema: Sistema;

  constructor(private sistemaService: SistemaService, private route: ActivatedRoute, private fb: FormBuilder ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sistemaService.showById(id).subscribe(sistemaId => {
      this.sistema = sistemaId;
    });

    this.formulario = this.fb.group({
      justificativa: ['', [Validators.required, Validators.minLength(5)]],
      url: ['']
    });
  }

  mudaCor(tamanho){
    console.log(tamanho);
    if (tamanho < 101){
      this.cor = 'limegreen';
    }
    else if (tamanho < 161){
      this.cor = 'darkorange';
    }
    else if (tamanho <= 199){
      this.cor = 'orangered';
    }
    else{
      this.cor = 'red';
    }
  }


}
