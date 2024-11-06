import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RewardsService, Reward } from './services/rewards.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RankingComponent } from './ranking/ranking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive, RankingComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  ra!: number;
  pontos: number | null = null;
  nome!: string;

  constructor(private rewardsService: RewardsService){}

    buscarPontos() {
      this.rewardsService.getStudentSaldo(this.ra).subscribe((reward: Reward | null) => {
        if (reward) {
          this.pontos = reward.estrelasAtuais - reward.estrelasAnteriores;
          this.nome = reward.nome;
        } else {
          this.pontos = null;
        }
      });
    }
 }