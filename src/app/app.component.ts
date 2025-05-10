import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/components/topBar/topBar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {}
