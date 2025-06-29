import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LifeOnAutopilot';
  isMobile = signal(true);  
  protected readonly fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  protected readonly fillerContent = Array.from(
    {length: 50},
    () =>
      `My babe is sooo cute`,
  );
}
