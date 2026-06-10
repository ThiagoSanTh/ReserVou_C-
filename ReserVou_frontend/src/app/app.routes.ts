import { Routes } from '@angular/router';
import { EstabelecimentoListComponent } from './estabelecimento/estabelecimento-list/estabelecimento-list';
import { EstabelecimentoFormComponent } from './estabelecimento/estabelecimento-form/estabelecimento-form';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form';
import { Home } from './home/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'listarUsuarios', component: UsuarioListComponent },
    { path: 'novoUsuario', component: UsuarioFormComponent },
    { path: 'listarEstabelecimentos', component: EstabelecimentoListComponent },
    { path: 'novoEstabelecimento', component: EstabelecimentoFormComponent }
]