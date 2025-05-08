// src/app/news/news.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem } from './news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private data: NewsItem[] = [
    {
      id: 'ugadi-champ',
      title: 'New Champ: Ugadi',
      date: '2025-04-20',
      teaser: 'Meet Ugadi, a scholar of the Gorantulands!',
      imageUrl: 'assets/news/ugadi.jpg',
      content: `
 <p>
  Ugadi, the Protector of the Elder Tree, is a revered archmage and head of the University of Gorantuland. A legendary scholar and master of arcane forces, he defends the ancient forest's knowledge with unmatched power and wisdom.
</p>

<h3>Abilities</h3>
<ul>
  <li><strong>Fire Bolt</strong> – Launches a flaming projectile that ignites enemies on impact.</li>
  <li><strong>Wind Blast</strong> – Unleashes a concussive gust that knocks back foes in a wide arc.</li>
  <li><strong>Black Hole</strong> – Channels a gravitational singularity, pulling in enemies before it collapses in a burst of energy.</li>
</ul>

<h3>Gameplay Showcase</h3>
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0"
  allowfullscreen
></iframe>

  `,
    },
    {
      id: 'steam-launch',
      title: 'Steam Page',
      date: '2025-04-01',
      teaser: 'Our Steam page just went live—wishlist us now!',
      imageUrl: 'assets/news/steam.jpg',
      content: `<p>Check out at <a href="https://...">here</a>…</p>`,
    },
    {
      id: 'kickstarter-launch',
      title: 'Kickstarter',
      date: '2025-04-01',
      teaser: 'Our Kickstarter just went live—back us now!',
      imageUrl: 'assets/news/kickstarter.jpg',
      content: `<p>Check out our rewards <a href="https://...">here</a>…</p>`,
    },
  ];

  /** In real life you'd fetch over HttpClient.get<NewsItem[]>('…') */
  getAll(): Observable<NewsItem[]> {
    return of(this.data);
  }

  getById(id: string): Observable<NewsItem | undefined> {
    return of(this.data.find((n) => n.id === id));
  }
}
