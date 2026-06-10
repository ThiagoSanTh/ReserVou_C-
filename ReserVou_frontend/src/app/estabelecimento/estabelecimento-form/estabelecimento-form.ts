import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoService } from '../../shared/services/estabelecimento.service';
import { FormsModule } from '@angular/forms';
import { Estabelecimento } from '../../shared/models/estabelecimento.model';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TipoEstabelecimento } from '../../shared/enums/tipo-estabelecimento-enum';

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
  public TipoEstabelecimento = TipoEstabelecimento;
  Nome : string = '';
  Endereco : string = '';
  Tipo! : TipoEstabelecimento;

    tiposEstabelecimento = [
      { nome: 'Hotel', valor: TipoEstabelecimento.Hotel },
      { nome: 'Pousada', valor: TipoEstabelecimento.Pousada },
      { nome: 'Airbnb', valor: TipoEstabelecimento.Airbnb },
      { nome: 'Hostel', valor: TipoEstabelecimento.Hostel },
      // Adicione aqui todos os outros tipos se houverem
    ];

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
  ) {}

  irParaHome() {
    this.router.navigate(['/home']);
}

  irParaListaDeEstabelecimentos() {
    this.router.navigate(['/listaeEstabelecimentos']);
}

  adicionarEstabelecimento(){
    const novoEstabelecimento = new Estabelecimento(this.Nome, this.Endereco, this.Tipo);
    this.estabelecimentoService.adicionarEstabelecimento(novoEstabelecimento).subscribe({
      next: (resposta) => {
        this.router.navigate(['/listarEstabelecimentos']);
        alert("Estabelecimento Salvo com sucesso.");
      },
      error: (erro) => {
        console.error(erro);
        alert("Erro ao salvar o novo estabelecimento.");
      }
    });
  }
}
