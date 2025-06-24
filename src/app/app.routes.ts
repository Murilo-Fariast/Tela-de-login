import { Routes } from '@angular/router';
import { HomeappComponent } from './homeapp/homeapp.component';
import { CrudPostagemComponent } from './crud-postagem/crud-postagem.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponentComponent } from './login-component/login-component.component';

export const routes: Routes = [
  { path: '', component: HomeappComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'postagens', component: CrudPostagemComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent }
];
