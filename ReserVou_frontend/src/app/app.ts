import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatToolbarModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  constructor(private router: Router) { }
    irParaHome() {
      this.router.navigate(['/home']);
  }
    irParaListaDeUsuarios() {
      this.router.navigate(['/listarUsuarios']);
  }
    irParaListaDeEstabelecimentos() {
      this.router.navigate(['/listarEstabelecimentos']);
  }
    irParaAdicionarUsuario() {
      this.router.navigate(['/novoUsuario']);
  }
    irParaAdicionarEstabelecimento() {
      this.router.navigate(['/novoEstabelecimento']);
  }
}