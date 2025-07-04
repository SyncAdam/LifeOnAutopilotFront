import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Calendar } from "../pages/calendar/calendar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, Calendar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'LifeOnAutopilot';
  protected readonly navButtons = ["General", "Calendar", "Finance", "Meals", "ToDo", "Notes", "Home"];

  isMobile = signal(false);  
}
