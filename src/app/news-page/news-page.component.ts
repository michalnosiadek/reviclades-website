// src/app/news/news-page.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsItem } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  standalone: false,
})
export class NewsPageComponent implements OnInit {
  news: NewsItem[] = [];
  constructor(private svc: NewsService) {}
  ngOnInit() {
    this.svc.getAll().subscribe((data) => (this.news = data));
  }
}
