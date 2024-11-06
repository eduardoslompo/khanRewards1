import { Routes } from '@angular/router';
import { RewardsTableComponent } from './rewards-table/rewards-table.component';
import { LojakhanComponent } from './lojakhan/lojakhan.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { RankingComponent } from './ranking/ranking.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lojakhan', pathMatch: 'full' }, // Redireciona para /lojakhan como página inicial
  { path: 'lojakhan', component: LojakhanComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'tabela', 
    component: RewardsTableComponent,
    canActivate: [authGuard]
  },
  { path: 'ranking', component: RankingComponent }
];
