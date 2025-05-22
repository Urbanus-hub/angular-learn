import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  // Footer navigation links
  navLinks = [
    { text: 'Home', url: '/' },
    { text: 'New arrivals', url: '/new' },
    { text: 'Men', url: '/children' },
    { text: 'Women', url: '/women' },
    {text:'Children',url:'/children'}
  ];
  
  // Social media links
  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'instagram', url: 'https://instagram.com' },
    { icon: 'linkedin', url: 'https://linkedin.com' }
  ];
}