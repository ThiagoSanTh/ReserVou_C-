import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../shared/services/usuario.service';
import { Usuario } from '../../shared/models/usuario.model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';
import { TipoUsuario } from './../../shared/enums/tipo-usuario-enum';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: 'usuario-list.html', 
  })

export class UsuarioListComponent implements OnInit {
    public TipoUsuario = TipoUsuario;
    
    usuarios : Usuario[] = [];
    displayedColumns = ['id', 'nome', 'tipo', 'acoes'];

    constructor(
      private usuarioService: UsuarioService, 
      private router: Router) { }

    ngOnInit(): void {
    this.usuarioService.obterTodos().subscribe({
    next: (dados) => {this.usuarios = dados},
    error: (erro) => {alert('Erro ao carregar usuarios.')},
      });
  }

  irParaHome() {
    this.router.navigate(['/home']);
}
  
  irParaListaDeUsuarios() {
    this.router.navigate(['/listarUsuarios']);
}

  irParaAdicionarUsuario() {
    this.router.navigate(['/novoUsuario']);
}

  editar(usuario: Usuario) {
  alert(`Editar usuario ${usuario.Nome} (simulação)`);
  }

  remover(usuario: Usuario) {
  alert(`Remover usuario ${usuario.Nome} (simulação)`);
  }
}