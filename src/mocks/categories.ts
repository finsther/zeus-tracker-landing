import type { Category } from '@/types';

export const categories: Category[] = [
  // Géneros
  { id: 'cat-001', name: 'Acción', slug: 'accion', type: 'genre' },
  { id: 'cat-002', name: 'Drama', slug: 'drama', type: 'genre' },
  { id: 'cat-003', name: 'Ciencia Ficción', slug: 'ciencia-ficcion', type: 'genre' },
  { id: 'cat-004', name: 'Thriller', slug: 'thriller', type: 'genre' },
  { id: 'cat-005', name: 'Horror', slug: 'horror', type: 'genre' },
  { id: 'cat-006', name: 'Comedia', slug: 'comedia', type: 'genre' },
  { id: 'cat-007', name: 'Crimen', slug: 'crimen', type: 'genre' },
  { id: 'cat-008', name: 'Animación', slug: 'animacion', type: 'genre' },
  { id: 'cat-009', name: 'Documental', slug: 'documental', type: 'genre' },
  { id: 'cat-010', name: 'Romance', slug: 'romance', type: 'genre' },

  // Años recientes
  { id: 'cat-101', name: '2026', slug: '2026', type: 'year' },
  { id: 'cat-102', name: '2025', slug: '2025', type: 'year' },
  { id: 'cat-103', name: '2024', slug: '2024', type: 'year' },
  { id: 'cat-104', name: '2023', slug: '2023', type: 'year' },
  { id: 'cat-105', name: '2022', slug: '2022', type: 'year' },
  { id: 'cat-106', name: '2021', slug: '2021', type: 'year' },

  // Décadas
  { id: 'cat-201', name: 'Años 2020', slug: 'anos-2020', type: 'decade' },
  { id: 'cat-202', name: 'Años 2010', slug: 'anos-2010', type: 'decade' },
  { id: 'cat-203', name: 'Años 2000', slug: 'anos-2000', type: 'decade' },
  { id: 'cat-204', name: 'Años 90', slug: 'anos-90', type: 'decade' },
  { id: 'cat-205', name: 'Años 80', slug: 'anos-80', type: 'decade' },
];
