export interface Series {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  backdropImage: string;
  genre: string[];
  year: number;
  rating: number;
  totalSeasons: number;
  totalEpisodes: number;
  isTrending: boolean;
  tags: string[];
}
