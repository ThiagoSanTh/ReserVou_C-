import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../shared/services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TipoUsuario } from '../../shared/enums/tipo-usuario-enum';

@Component({
  // ALTERADO: estava app-aluno-form
  selector: 'app-usuario-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule
  ],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.scss'
})
export class UsuarioFormComponent {
  public TipoUsuario = TipoUsuario;
  Nome : string = '';
  Tipo! : TipoUsuario;

  tiposUsuario = [
    { nome: 'Hóspede', valor: TipoUsuario.Hospede },
    { nome: 'Administrador', valor: TipoUsuario.Administrador },
    { nome: 'Gerente', valor: TipoUsuario.Gerente },
    { nome: 'Anfitrião', valor: TipoUsuario.Anfitriao },
    { nome: 'Coanfitrião', valor: TipoUsuario.Coanfitriao }
    // Adicione aqui todos os outros tipos se houverem
  ];

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  irParaHome() {
    this.router.navigate(['/home']);
}

  irParaListaDeUsuarios() {
    this.router.navigate(['/listarUsuarios']);
}

  adicionarUsuario(){
    const novoUsuario = new Usuario(this.Nome, this.Tipo);
    this.usuarioService.adicionarUsuario(novoUsuario).subscribe({
      next: (resposta) => {
        alert("Usuário salvo com sucesso.");
        this.Nome = '';
        this.router.navigate(['/listarUsuarios']);        
      },
      error: (erro) => {
        console.error(erro);
        alert("Erro ao salvar o novo usuário.");
      }
    });
  }
}
