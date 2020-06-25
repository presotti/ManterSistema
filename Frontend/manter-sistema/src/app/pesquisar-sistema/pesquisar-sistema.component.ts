import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Sistema } from '../Modelo/sistema';
import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SistemaService } from '../servico/sistema.service';

@Component({
  selector: 'app-pesquisar-sistema',
  templateUrl: './pesquisar-sistema.component.html',
  styleUrls: ['./pesquisar-sistema.component.css']
})
export class PesquisarSistemaComponent implements OnInit {

  @Output() alteracao = false;

  @Output() formulario: FormGroup;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  tamanho = 50;

  quantidadeMAX = 10;

  quantidadeMIN = 5;

  sistemas: Sistema[];

  nomeColuna: string[] = ['descricao', 'sigla', 'email', 'url', 'status', 'acoes'];

  dataSource: any;

  filtro(evento: string){
    this.dataSource.filter = evento.trim().toLowerCase();
  }

  constructor(private fb: FormBuilder, private sistemaService: SistemaService) {  }

  ngOnInit(): void {

    this.sistemaService.showAll().subscribe(sistema => {
      this.sistemas = sistema;
      //Modo de paginação abaixo
      this.dataSource = new MatTableDataSource(this.sistemas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.formulario = this.fb.group({
      descricao: [''],
      sigla: [''],
      email: ['']
    });
  }

}

