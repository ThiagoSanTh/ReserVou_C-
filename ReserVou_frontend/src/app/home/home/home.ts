import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    constructor(
          private router: Router) { }

    irParaHome() {
        this.router.navigate(['/home']);
  }

    irParaListaDeEstabelecimentos() {
      this.router.navigate(['/listarEstabelecimentos']);
  }

    irParaAdicionarEstabelecimento() {
      this.router.navigate(['/novoEstabelecimento']);
  }
    irParaListaDeUsuarios() {
      this.router.navigate(['/listarUsuarios']);
  }

    irParaAdicionarUsuario() {
      this.router.navigate(['/novoUsuario']);
  } 
}
