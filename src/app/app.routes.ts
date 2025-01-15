import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'novedades',
    loadComponent: () =>
      import('./pages/novedades/novedades.component').then(
        (c) => c.NovedadesComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '1',
      },
      {
        path: '1',
        loadComponent: () =>
          import('./components/novedades/ellas/ellas.component').then(
            (c) => c.EllasComponent
          ),
        data: { animation: 'News1' },
      },
      {
        path: '2',
        loadComponent: () =>
          import('./components/novedades/crema/crema.component').then(
            (c) => c.CremaComponent
          ),
        data: { animation: 'News2' },
      },
    ],
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.component').then(
        (c) => c.NosotrosComponent
      ),
  },
  {
    path: 'carta',
    loadComponent: () =>
      import('./pages/carta/carta.component').then((c) => c.CartaComponent),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(
        (c) => c.ContactoComponent
      ),
  },
];
