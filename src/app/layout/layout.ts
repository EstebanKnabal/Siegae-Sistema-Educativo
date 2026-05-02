import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Supabase } from '../services/supabase';
import { LucideAngularModule, Home, BookOpen, Users, UserCheck, Settings, ChevronLeft, ChevronRight, LogOut } from 'lucide-angular';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout implements OnInit {
  userEmail = '';
  sidebarOpen = true;

  readonly Home = Home;
  readonly BookOpen = BookOpen;
  readonly Users = Users;
  readonly UserCheck = UserCheck;
  readonly Settings = Settings;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly LogOut = LogOut;

  constructor(private supabase: Supabase, private router: Router) {}

  async ngOnInit() {
    const { data } = await this.supabase.auth.getSession();
    this.userEmail = data.session?.user?.email || '';
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  async logout() {
    await this.supabase.auth.signOut();
    this.router.navigate(['/login']);
  }
}
