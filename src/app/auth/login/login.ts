import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Supabase } from '../../services/supabase';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(private supabase: Supabase, private router: Router) {}

  async onSubmit() {
    this.loading = true;
    this.errorMessage = '';

    const { error } = await this.supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });

    if (error) {
      this.errorMessage = error.message;
      this.loading = false;
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}