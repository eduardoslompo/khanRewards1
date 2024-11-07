import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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


}
