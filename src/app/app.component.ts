import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [HttpClientModule,RouterModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'olioApp';
  searchTerm="";
  getData(data:string){
    this.searchTerm=data;
    console.log(this.searchTerm);
  }
}
