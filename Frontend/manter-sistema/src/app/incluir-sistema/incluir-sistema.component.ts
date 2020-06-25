import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SistemaService } from '../servico/sistema.service';
import { Sistema } from '../Modelo/Sistema';

@Component({
  selector: 'app-incluir-sistema',
  templateUrl: './incluir-sistema.component.html',
  styleUrls: ['./incluir-sistema.component.css']
})
export class IncluirSistemaComponent implements OnInit {

  @Output() alteracao = true;

  @Output() formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      sigla: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', [Validators.maxLength(100), Validators.email]],
      url: ['', Validators.maxLength(100)]
    });

  }

}
