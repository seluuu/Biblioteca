import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Libro, LibrosService } from '../../services/libros.service';

@Component({
  imports: [RouterLink],
  selector: 'app-detalle-libro',
  styleUrl: './detalle-libro.css',
  templateUrl: './detalle-libro.html',
})
export class DetalleLibro {
  readonly id = input.required<string>();
  private readonly router = inject(Router);
  private readonly librosService = inject(LibrosService);

  get libro(): Libro | undefined {
    return this.librosService.obtenerPorId(Number(this.id()));
  }

  siguienteLibro(): void {
    this.router.navigate(['/libros', this.librosService.idSiguiente(Number(this.id()))]);
  }

  irACuenta(): void {
    this.router.navigateByUrl('/mi-cuenta');
  }
}