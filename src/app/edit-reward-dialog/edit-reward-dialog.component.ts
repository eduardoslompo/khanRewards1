import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Reward } from '../services/rewards.service';
import { RewardsService } from '../services/rewards.service';

@Component({
  selector: 'app-edit-reward-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './edit-reward-dialog.component.html',
  styleUrls: ['./edit-reward-dialog.component.css'],
})
export class EditRewardDialogComponent {
  premiosString: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditRewardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reward,
    private rewardsService: RewardsService
  ) {
    this.premiosString = this.data.premiosColetados.join(', ');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const premiosArray = this.premiosString
      .split(',')
      .map(premio => premio.trim())
      .filter(premio => premio.length > 0);

    const updatedData = {
      ...this.data,
      premiosColetados: premiosArray
    };

    this.dialogRef.close(updatedData);
  }

  onDelete(): void {
    if (this.data.id) {
      this.rewardsService.deleteReward(this.data.id).subscribe(() => {
        this.dialogRef.close({ deleted: true });
      });
    }
  }
}