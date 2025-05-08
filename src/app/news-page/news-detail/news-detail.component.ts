// src/app/news-page/news-detail/news-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NewsItem } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  standalone: false,
})
export class NewsDetailComponent implements OnInit {
  item?: NewsItem; // may start undefined
  safeVideoUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private svc: NewsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.svc.getById(id).subscribe((n) => {
      this.item = n;
      if (n?.videoUrl) {
        // sanitize it once here
        this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          n.videoUrl
        );
      }
    });
  }
}
