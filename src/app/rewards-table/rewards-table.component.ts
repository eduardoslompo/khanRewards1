import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RewardsService, Reward } from '../services/rewards.service';
import { EditRewardDialogComponent } from '../edit-reward-dialog/edit-reward-dialog.component';

@Component({
  selector: 'app-rewards-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './rewards-table.component.html',
  styleUrls: ['./rewards-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RewardsTableComponent implements OnInit {
  rewards: Reward[] = [];
  displayedColumns: string[] = ['nome', 'ra', 'estrelasAtuais', 'estrelasAnteriores', 'saldoEstrelas', 'premiosColetados', 'acoes'];

  constructor(private rewardsService: RewardsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadRewards();
  }

  loadRewards(): void {
    this.rewardsService.getRewards().subscribe(
      data => {
        console.log('Rewards data:', data);
        this.rewards = data;
      },
      error => console.error('Error fetching rewards:', error)
    );
  }

  onEdit(reward: Reward): void {
    const dialogRef = this.dialog.open(EditRewardDialogComponent, {
      width: '400px',
      data: { ...reward }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && reward.id) {
        this.rewardsService.updateReward(reward.id, result).subscribe(() => {
          this.loadRewards();
        });
      }
    });
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(EditRewardDialogComponent, {
      width: '400px',
      data: {
        nome: '',
        ra: 0,
        estrelasAtuais: 0,
        estrelasAnteriores: 0,
        premiosColetados: []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rewardsService.addReward(result).subscribe(() => {
          this.loadRewards();
        });
      }
    });
  }

  getSaldoEstrelas(reward: Reward): number {
    return reward.estrelasAtuais - reward.estrelasAnteriores;
  }
}