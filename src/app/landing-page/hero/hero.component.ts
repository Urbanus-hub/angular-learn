import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  images:string[]=["jordans.png","fashiongal.png","fashionWoman.png","boyFashion.png"];
  random:number=0;
  change():number{
   let random=Math.floor(Math.random()*4)
   return random;
  }
ngOnInit():void{
  this.random=this.change();
  console.log(this.change())
}
}
