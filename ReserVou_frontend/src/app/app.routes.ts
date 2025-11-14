import { Routes } from '@angular/router';
import { EstabelecimentoListComponent } from './estabelecimento/estabelecimento-list/estabelecimento-list';
import { EstabelecimentoFormComponent } from './estabelecimento/estabelecimento-form/estabelecimento-form';

export const routes: Routes = [
    { path: '', component: EstabelecimentoListComponent },
    { path: 'novo', component: EstabelecimentoFormComponent }
];