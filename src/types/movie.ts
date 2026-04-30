export interface Movie {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  backdropImage: string;
  genre: string[];
  year: number;
  rating: number;
  duration: number;
  director: string;
  isFeatured: boolean;
}
