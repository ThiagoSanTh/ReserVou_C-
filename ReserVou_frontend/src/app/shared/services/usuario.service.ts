import { Injectable, inject } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UsuarioService {
    private http = inject(HttpClient);
    private readonly API = 'https://localhost:7089/api/Usuario';

    obterTodos(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.API);
    }

    adicionarUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.API, usuario); // ALTERADO AQUI
    }
}
