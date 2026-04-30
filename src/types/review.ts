export interface ReviewUser {
  name: string;
  avatarImage: string;
}

export interface Review {
  id: string;
  user: ReviewUser;
  content: string;
  rating: number;
  createdAt: string;
  contentTitle: string;
  contentType: 'series' | 'movie';
}
