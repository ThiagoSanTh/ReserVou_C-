import { Injectable, inject } from '@angular/core';
import { Estabelecimento } from './estabelecimento.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root', // Singleton!
})

export class EstabelecimentoService {
    private http = inject(HttpClient);
    private readonly API = 'https://localhost:7089/api/Estabelecimento';

    obterTodos(): Observable<Estabelecimento[]> {
        return this.http.get<Estabelecimento[]>(this.API);
    }

    adicionar(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
        return this.http.post<Estabelecimento>(this.API, estabelecimento); // ALTERADO AQUI
}

}

/*export class EstabelecimentoService {
    private estabelecimentos: Estabelecimento[] = [
        new Estabelecimento( 'Hotel do Gabriel', "Rua 1", 1),
        new Estabelecimento( 'Pousada do Thiago', "Rua 2", 2),
        new Estabelecimento( 'AirBnb da Larissa', "Rua 3", 3),
        new Estabelecimento( 'Hostel da Vitória', "Rua 4", 4),
 ];

 constructor() {}
 
 // Método para listar todos os estabelecimentos
    obterTodos(): Estabelecimento[] {
        return this.estabelecimentos;
 }

 // Método para adicionar um estabelecimento
    adicionar(estabelecimento: Omit<Estabelecimento, 'id_estabelecimento'>) {
        const id_estabelecimento = this.estabelecimentos.length + 1;
        const novoEstabelecimento = new Estabelecimento(
        estabelecimento.nome_estabelecimento, estabelecimento.endereco_estabelecimento, id_estabelecimento);
        this.estabelecimentos.push(novoEstabelecimento);
    }
}*/