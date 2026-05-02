import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Supabase } from '../services/supabase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private supabase: Supabase, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const { data } = await this.supabase.auth.getSession();
    
    if (data.session) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
