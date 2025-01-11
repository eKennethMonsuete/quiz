import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },

  {
    path: 'quiz',
    loadComponent: () =>
      import('./simple-quiz/simple-quiz.component').then(
        (c) => c.SimpleQuizComponent
      ),
    providers: [],
  },
];
