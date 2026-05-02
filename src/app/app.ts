import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Supabase } from './services/supabase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'plataforma-educativa';

  constructor(private supabase: Supabase) {}

  async ngOnInit() {
    const { data, error } = await this.supabase.auth.getSession();
    if (data.session) {
      console.log('✅ Hay sesión activa:', data.session.user.email);
    } else {
      console.log('ℹ️ No hay sesión activa. Usuario debe iniciar sesión.');
    }
  }
}