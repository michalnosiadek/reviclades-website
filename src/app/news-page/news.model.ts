// src/app/news/news.model.ts
export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO or whatever you prefer
  teaser: string;
  imageUrl?: string;
  videoUrl?: string;
  content: string; // full HTML or markdown
}
