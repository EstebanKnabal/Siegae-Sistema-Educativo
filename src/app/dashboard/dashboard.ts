import { Component, OnInit } from '@angular/core';
import { Supabase } from '../services/supabase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  cursos: any[] = [];

  constructor(private supabase: Supabase) {}

  async ngOnInit() {
    const { data: courses } = await this.supabase.from('courses').select('*');
    this.cursos = courses || [];
  }
}
