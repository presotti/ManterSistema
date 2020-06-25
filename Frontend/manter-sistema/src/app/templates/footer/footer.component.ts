import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SistemaService } from '../../servico/sistema.service';
import { Sistema } from '../../Modelo/Sistema';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() alterarFooter;

  @Input() resetFormulario;

  @Input() form;

  id: number;

  constructor(private sistemaService: SistemaService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  reset(){
    this.resetFormulario.reset();
  }

  pesquisar(){

  }

  SalvarOuAlterar(): void{
    if (this.id === 0){
      this.sistemaService.create(this.form.value).subscribe(() => {
        this.sistemaService.showMessage('Cadastrado com Sucesso!');
        this. router.navigate(['/']);
      });
    }
    else{
      this.sistemaService.update(this.id, this.form.value).subscribe(() => {
        this.sistemaService.showMessage('Alterado com Sucesso!');
        this. router.navigate(['/']);
      });
    }
  }

}
