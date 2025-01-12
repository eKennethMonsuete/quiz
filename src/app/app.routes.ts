import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
