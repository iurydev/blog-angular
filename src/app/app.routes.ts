import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/top-posts/top-posts.component').then(
        (c) => c.TopPostsComponent
      ),
  },
];
