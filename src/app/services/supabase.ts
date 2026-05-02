import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  get client() {
    return this.supabaseClient;
  }

  get auth() {
    return this.supabaseClient.auth;
  }

  get from() {
    return this.supabaseClient.from.bind(this.supabaseClient);
  }
}
