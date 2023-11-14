import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { AuthService } from '../services/auth.service';
import getUser from '../utils/getUser';
import userLogout from '../utils/userLogout';

type User = {
  username: string;
  connected: boolean;
};

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SearchBarComponent,
  ],
})
export class HeaderComponent implements OnInit {
  public btnState: boolean = false;
  public user!: User;
  public username!: string | null;

  public data!: string | null;
  public isConnected: boolean = false;

  constructor(private _renderer: Renderer2, private _auth: AuthService) {}

  ngOnInit(): void {
    this.setTheme();
    this.initUser();
  }

  public initUser() {
    this.user = JSON.parse(getUser()!);
    this.username = this.user.username;
    this.isConnected = this.user.connected;
    console.log(this.isConnected);
  }

  public logout() {
    userLogout();
    window.location.reload();
  }

  public setTheme() {
    const theme = localStorage.getItem('shop_theme');
    this._renderer.setAttribute(
      document.documentElement,
      'data-theme',
      theme || 'light'
    );
    this.btnState = theme === 'dark' ? true : false;
  }

  public swapTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    this._renderer.setAttribute(
      document.documentElement,
      'data-theme',
      targetTheme
    );
    localStorage.setItem('shop_theme', targetTheme);
  }
}
