import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  constructor(private router:Router){

  }
  active:boolean=true;
  love:boolean=false;
closeCart(bool:boolean){
 this.active=bool;
 console.log(this.active)
}
signUp():void{
this.router.navigate(['/signup']);
}
logIn():void{
this.router.navigate(['/login']);
}

}

