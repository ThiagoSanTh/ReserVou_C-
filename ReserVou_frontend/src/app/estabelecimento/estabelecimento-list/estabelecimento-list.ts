import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from '../../shared/services/estabelecimento.service';
import { Estabelecimento } from '../../shared/models/estabelecimento.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-list',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: 'estabelecimento-list.html', 
  })

export class EstabelecimentoListComponent implements OnInit {
    estabelecimentos: Estabelecimento[] = [];
    displayedColumns = ['id', 'nome', 'endereco', 'tipo', 'acoes'];

    constructor(
      private estabelecimentoService: EstabelecimentoService, 
      private router: Router) { }

    ngOnInit(): void {
    this.estabelecimentoService.obterTodos().subscribe({
    next: (dados) => (this.estabelecimentos = dados),
    error: () => alert('Erro ao carregar estabelecimentos.'),
      });
  }

  irParaHome() {
    this.router.navigate(['/home']);
}

  irParaListaDeEstabelecimentos() {
    this.router.navigate(['/listarEstabelecimentos']);
}

  irParaAdicionarEstabelecimento() {
    this.router.navigate(['/novoEstabelecimento']);
} 

  editar(estabelecimento: Estabelecimento) {
  alert(`Editar estabelecimento ${estabelecimento.Nome} (simulação)`);
  }

  remover(estabelecimento: Estabelecimento) {
  alert(`Remover estabelecimento ${estabelecimento.Nome} (simulação)`);
// Aqui você chamaria service.remover(aluno.id)
 }
}

/*@Component({
  selector: 'app-estabelecimento-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estabelecimento-list.html',
  styleUrls: ['./estabelecimento-list.scss']
})

export class EstabelecimentoListComponent {
  estabelecimentos: Estabelecimento[];

  constructor(private estabelecimentoService: EstabelecimentoService) {
    this.estabelecimentos = this.estabelecimentoService.obterTodos();
  }
}*/