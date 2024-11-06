import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RewardsService, Reward } from '../services/rewards.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingComponent } from '../ranking/ranking.component';

@Component({
  selector: 'app-lojakhan',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive, RankingComponent],
  templateUrl: './lojakhan.component.html',
  styleUrl: './lojakhan.component.css'
})
export class LojakhanComponent {
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
