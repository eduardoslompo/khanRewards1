import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';
import { RewardsService } from '../services/rewards.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class RankingComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nome', 'premios'];
  dataSource: any[] = [];

  constructor(private service: RewardsService) {}

  ngOnInit() {
    this.loadRanking();
  }

  private loadRanking() {
    this.service.getRewards().subscribe(data => {
      this.dataSource = data.sort((a, b) => b.premiosColetados.length - a.premiosColetados.length);
    });
  }
}