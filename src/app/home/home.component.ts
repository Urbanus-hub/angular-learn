import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from '../landing-page/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent,MainComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
