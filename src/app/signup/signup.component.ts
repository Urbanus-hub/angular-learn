import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      console.log('Form submitted!', form.value);
      // You can add your form submission logic here
    }
  }
  
  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}