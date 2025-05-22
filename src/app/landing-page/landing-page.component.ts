import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { HeroComponent } from './hero/hero.component';

import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ChildrenComponent } from './children/children.component';
import { FooterComponent } from './footer/footer.component';
import { WhyusComponent } from './whyus/whyus.component';
@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent,HeroComponent,WomenComponent,WhyusComponent, MenComponent,ChildrenComponent,FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
