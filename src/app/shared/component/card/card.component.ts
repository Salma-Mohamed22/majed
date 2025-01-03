import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // @Input() cards:{icon:string ,title:string, describtion: string }[] = [];
  @Input() icon = '';
  @Input() title = '';
  @Input() describtion = '';
}
