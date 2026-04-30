import type { Review } from '@/types';

export const recentReviews: Review[] = [
  {
    id: 'r-001',
    user: {
      name: 'Camila Ortega',
      avatarImage: '/images/avatars/camila-ortega.jpg',
    },
    content: 'El último bastión es exactamente lo que el género necesitaba. La segunda temporada supera con creces a la primera: personajes más complejos, un ritmo impecable y un final que no vi venir para nada. De lo mejor que he visto en años.',
    rating: 9.5,
    createdAt: '2026-04-18T14:32:00Z',
    contentTitle: 'El último bastión',
    contentType: 'series',
  },
  {
    id: 'r-002',
    user: {
      name: 'Rodrigo Vásquez',
      avatarImage: '/images/avatars/rodrigo-vasquez.jpg',
    },
    content: 'El peso del silencio me dejó sin palabras. La actuación principal es una obra maestra de expresividad sin diálogos. La dirección de Valentina Ríos logra que sientas cada injusticia en la piel.',
    rating: 9.0,
    createdAt: '2026-04-21T09:15:00Z',
    contentTitle: 'El peso del silencio',
    contentType: 'movie',
  },
  {
    id: 'r-003',
    user: {
      name: 'Lucía Paredes',
      avatarImage: '/images/avatars/lucia-paredes.jpg',
    },
    content: 'La conspiración Alcántara es adictiva desde el primer minuto. El guión no subestima al espectador y cada episodio termina con un giro que te obliga a ver el siguiente. Ojalá hubiera más series así de valientes políticamente.',
    rating: 9.0,
    createdAt: '2026-04-19T21:47:00Z',
    contentTitle: 'La conspiración Alcántara',
    contentType: 'series',
  },
  {
    id: 'r-004',
    user: {
      name: 'Diego Montiel',
      avatarImage: '/images/avatars/diego-montiel.jpg',
    },
    content: 'Cenizas del mañana tiene una propuesta visual increíble. Las escenas bajo el agua en la ciudad sumergida son de las más hermosas que he visto en pantalla. La historia entre los dos hermanos es lo que sostiene todo.',
    rating: 8.5,
    createdAt: '2026-04-22T16:03:00Z',
    contentTitle: 'Cenizas del mañana',
    contentType: 'movie',
  },
  {
    id: 'r-005',
    user: {
      name: 'Valentina Cruz',
      avatarImage: '/images/avatars/valentina-cruz.jpg',
    },
    content: 'El arquitecto es de esas series que te hacen reconsiderar todo lo que creías saber sobre el protagonista en cada temporada. La tercera es brutal. Si no la has visto, empiézala este fin de semana.',
    rating: 9.5,
    createdAt: '2026-04-20T11:28:00Z',
    contentTitle: 'El arquitecto',
    contentType: 'series',
  },
  {
    id: 'r-006',
    user: {
      name: 'Matías Herrera',
      avatarImage: '/images/avatars/matias-herrera.jpg',
    },
    content: 'Perro viejo es cine de acción con alma. No esperaba que me fuera a emocionar tanto, pero la relación entre el protagonista y la chica que protege está escrita con una sensibilidad que pocas películas del género logran.',
    rating: 8.5,
    createdAt: '2026-04-23T08:55:00Z',
    contentTitle: 'Perro viejo',
    contentType: 'movie',
  },
  {
    id: 'r-007',
    user: {
      name: 'Ana Belén Rojas',
      avatarImage: '/images/avatars/ana-belen-rojas.jpg',
    },
    content: 'Fracturas es incómoda en el mejor sentido posible. Cada conversación entre los personajes es una bomba de tiempo. Solo tiene 8 episodios pero deja más huella que series de 40. La recomiendo sin dudarlo.',
    rating: 9.0,
    createdAt: '2026-04-24T19:12:00Z',
    contentTitle: 'Fracturas',
    contentType: 'series',
  },
];
