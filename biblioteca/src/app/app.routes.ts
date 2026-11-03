import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{
		path: 'inicio',
		loadComponent: () => import('./pages/inicio/inicio').then((page) => page.Inicio),
	},
	{
		path: 'libros',
		loadComponent: () => import('./pages/libros/libros').then((page) => page.Libros),
	},
	{
		path: 'libros/:id',
		loadComponent: () => import('./pages/detalle-libro/detalle-libro').then((page) => page.DetalleLibro),
	},
	{
		path: 'autores',
		loadComponent: () => import('./pages/autores/autores').then((page) => page.Autores),
	},
	{
		path: 'mi-cuenta',
		loadComponent: () => import('./pages/mi-cuenta/mi-cuenta').then((page) => page.MiCuenta),
		children: [
			{ path: '', redirectTo: 'perfil', pathMatch: 'full' },
			{
				path: 'perfil',
				loadComponent: () => import('./pages/mi-cuenta/perfil/perfil').then((page) => page.Perfil),
			},
			{
				path: 'prestamos',
				loadComponent: () => import('./pages/mi-cuenta/prestamos/prestamos').then((page) => page.Prestamos),
			},
		],
	},
	{
		path: '**',
		loadComponent: () => import('./pages/no-encontrado/no-encontrado').then((page) => page.NoEncontrado),
	},
];
