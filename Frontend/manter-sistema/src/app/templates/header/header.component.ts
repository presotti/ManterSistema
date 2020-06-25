import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() alterarHeader;

  title = '';
  obg = '';
  constructor() { }

  ngOnInit(): void {
    this.troca();
  }

  troca(){
    if (this.alterarHeader === true){
      this.title = 'Manter Sistema';
      this.obg = '* Campo Obrigatório';
    }
    else{
      this.title = 'Pesquisar Sistema';
      this.obg = '';
    }
  }


}
