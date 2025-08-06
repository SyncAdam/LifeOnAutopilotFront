import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'LifeOnAutopilot';
  protected readonly navButtons = ["Home", "Meals", "Finance", "Inventory"];

  screenHeight: number = window.innerHeight;
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  } 

  isMobile = signal(this.getMobile());

  getMobile() {
    if (this.screenWidth < 800)
      return true;
    else
      return false;
  }
}
