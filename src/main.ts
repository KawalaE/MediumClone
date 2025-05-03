import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes), provideStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })],
});
