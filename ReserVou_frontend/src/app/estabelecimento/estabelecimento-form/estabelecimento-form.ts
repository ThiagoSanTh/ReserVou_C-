import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoService } from '../estabelecimento.service';
import { FormsModule } from '@angular/forms';
import { Estabelecimento } from '../estabelecimento.model';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  // ALTERADO: estava app-aluno-form
  selector: 'app-estabelecimento-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule
  ],
  templateUrl: './estabelecimento-form.html',
  styleUrl: './estabelecimento-form.scss'
})
export class EstabelecimentoFormComponent {
  Nome : string = '';
  Endereco : string = '';

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  ) {}

irParaLista() {
    this.router.navigate(['/']);
 }

  adicionar(){
    const novoEstabelecimento = new Estabelecimento(this.Nome, this.Endereco);
    this.estabelecimentoService.adicionar(novoEstabelecimento).subscribe({
      next: (resposta) => {
        this.router.navigate(['/']);
        alert("Estabelecimento Salvo com sucesso.");
      },
      error: (erro) => {
        console.error(erro);
        alert("Erro ao salvar o novo estabelecimento.");
      }
    });
  }
}
