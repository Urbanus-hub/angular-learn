import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
  // constructor(private router: Router) {}
  router=inject(Router);
  http=inject(HttpClient);

  onSubmit(form: NgForm) {
    if(form.valid) {
      
      this.http.post("https://olio-ecommerce-default-rtdb.firebaseio.com/users.json",form.value).subscribe((res)=>{
        console.log(res)
        form.reset();
        this.router.navigate(['/login']);
      })
      // You can add your form submission logic here
    }
  }
  
  navigateToLogin() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}


