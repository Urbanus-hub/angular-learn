import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }
  onSubmit(form: NgForm) {
    if(form.valid) {
      console.log('Login form submitted!', form.value);
      // Add your login logic here
    }
  }
  toSignUp(){
    this.router.navigate(['/signup']);
  }
  toHome():void{
    this.router.navigate(['/home'])
  }
}