import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Libro, LibrosService } from '../../services/libros.service';

@Component({
  imports: [RouterLink],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros {
  private readonly route = inject(ActivatedRoute);
  private readonly librosService = inject(LibrosService);
  libros: Libro[] = [];

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.libros = this.librosService.obtenerTodos(params.get('genero') ?? undefined);
    });
  }
}
