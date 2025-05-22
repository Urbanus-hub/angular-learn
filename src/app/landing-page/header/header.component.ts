import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
