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
		path: 'autores',
		loadComponent: () => import('./pages/autores/autores').then((page) => page.Autores),
	},
	{
		path: '**',
		loadComponent: () => import('./pages/no-encontrado/no-encontrado').then((page) => page.NoEncontrado),
	},
];
