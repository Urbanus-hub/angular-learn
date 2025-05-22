
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css'],
  animations: [
    // your animations here
  ],
  imports:[CommonModule]
})
export class WhyusComponent {
  features = [
    // your features array here
  ];

  onMouseEnter(feature: any) {
    // your mouse enter logic here
  }

  onMouseLeave(feature: any) {
    // your mouse leave logic here
  }
}