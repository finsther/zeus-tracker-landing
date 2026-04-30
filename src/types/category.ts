export interface Category {
  id: string;
  name: string;
  slug: string;
  type: 'genre' | 'year' | 'decade';
}
