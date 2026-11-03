import { Injectable } from '@angular/core';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
}

@Injectable({ providedIn: 'root' })
export class LibrosService {
  private readonly libros: Libro[] = [
    { id: 1, titulo: 'La casa de los espíritus', autor: 'Isabel Allende', genero: 'novela' },
    { id: 2, titulo: 'El infinito en un junco', autor: 'Irene Vallejo', genero: 'ensayo' },
    { id: 3, titulo: 'Los peligros de fumar en la cama', autor: 'Mariana Enriquez', genero: 'relato' },
    { id: 4, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', genero: 'novela' },
    { id: 5, titulo: 'Una habitación propia', autor: 'Virginia Woolf', genero: 'ensayo' },
  ];

  obtenerTodos(genero?: string): Libro[] {
    if (!genero) {
      return this.libros;
    }

    return this.libros.filter((libro) => libro.genero === genero.toLowerCase());
  }

  obtenerPorId(id: number): Libro | undefined {
    return this.libros.find((libro) => libro.id === id);
  }

  idSiguiente(id: number): number {
    const indice = this.libros.findIndex((libro) => libro.id === id);
    return this.libros[(indice + 1) % this.libros.length]?.id ?? this.libros[0].id;
  }
}