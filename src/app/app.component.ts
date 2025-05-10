import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';
import { TopBarComponent } from './shared/components/topBar/topBar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent implements OnInit {
  store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
