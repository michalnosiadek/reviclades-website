import { Component, AfterViewInit } from '@angular/core';
type RoadmapEntry = {
  type: 'image' | 'video' | 'audio';
  src: string;
  date: string;
  description: string;
  side: 'left' | 'right';
};
@Component({
  selector: 'app-roadmap-page',
  templateUrl: './roadmap-page.component.html',
  styleUrls: ['./roadmap-page.component.css'],
  standalone: false,
})
export class RoadmapPageComponent implements AfterViewInit {
  fullTimeline: RoadmapEntry[] = [
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/1.jpg',
      date: '08.2021',
      description:
        'The idea came up while talking about the times when we used to play turn-based games...',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/2.jpg',
      date: '10.2021',
      description:
        'Bored with using ready character assets, team suggested the first character...',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/3.jpg',
      date: '11.2021',
      description: 'Lore creation and first world map drawing...',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/4.jpg',
      date: '12.2021',
      description: 'We decided to convert game to the isometric grid...',
      side: 'right',
    },
    {
      type: 'video',
      src: 'assets/Stronka/roadmap/5.mp4',
      date: '02.2022',
      description: 'Test arena was made to help us try game in action.',
      side: 'left',
    },
    {
      type: 'video',
      src: 'assets/Stronka/roadmap/6v2.mp4',
      date: '05.2022',
      description:
        'Creation of new game engine focused on various abilities...',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/7.jpg',
      date: '07.2022',
      description:
        'New additions like: playable characters, music, animations...',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/8.jpg',
      date: '10.2022',
      description: 'First ready to use map...',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/9.jpg',
      date: '12.2023',
      description: 'Concept of world map.',
      side: 'left',
    },
    {
      type: 'video',
      src: 'assets/Stronka/roadmap/10.mp4',
      date: '05.2023',
      description: 'VFX, sound effects, card designs, character’s animations.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/11.jpg',
      date: '05.2023',
      description: 'Website concept + interactive world map prototype.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/12.jpg',
      date: '08.2023',
      description:
        'Series of test games when we decided to completely change play-styles...',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/13.jpg',
      date: '10.2023',
      description: 'In game UI upgrades.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/14.jpg',
      date: '12.2023',
      description:
        'Upgrades of descriptions, pictograms and other text based content.',
      side: 'right',
    },
    {
      type: 'video',
      src: 'assets/Stronka/roadmap/15.mp4',
      date: '01.2024',
      description: 'Polishing way we wanted to present our gameplay...',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/16.jpg',
      date: '02.2024',
      description: 'Beginning of replacing old deck builder.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/world-map.webp',
      date: '04.2024',
      description: 'First draft of the world map.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/fire.webp',
      date: '02.2024',
      description:
        'Developing new animations for various abilities and environment + testing them during gameplay.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/scenario-map.webp',
      date: '06.2024',
      description:
        'Fresh idea of creating a demo/scenario and concept of the map for it.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/ugadi-animation.webp',
      date: '07.2024',
      description:
        'Further development of PvE model + first look into boss model.',
      side: 'right',
    },
    {
      type: 'audio',
      src: 'assets/Stronka/roadmap/fire-berserker-voice-1.webm',
      date: '08.2024',
      description: 'Beginning of recording voice line by ourselves.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/cloud.webp',
      date: '09.2024',
      description: 'New addition of VFXs.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/scenario-grid.webp',
      date: '10.2024',
      description: 'Game assets presented on the new PvE map.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/trailer.webp',
      date: '11.2024',
      description: 'Sneak peek of the first trailer.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/ugadi.webp',
      date: '12.2024',
      description:
        'New portraits and dialogues for NPC and playable characters.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/scenario-gameplay.webp',
      date: '01.2025',
      description:
        'Implementing new features, such as transparent obstacles and damage element icon next to the damage value.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/fire-berserker.webp',
      date: '02.2025',
      description:
        'Website update focused on improving performance, enhancing visual consistency, and aligning the content with the latest branding.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/gorantulan-new.webp',
      date: '03.2025',
      description: 'Recent models for the NPC of the Gorantulan race.',
      side: 'right',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/ugadi-mockup.webp',
      date: '04.2025',
      description: 'Mockup models of the PvE boss, Ugadi the Wizard.',
      side: 'left',
    },
    {
      type: 'image',
      src: 'assets/Stronka/roadmap/scenario-scetch.webp',
      date: '05.2025',
      description: 'Hand-drawn sample of the PvE map.',
      side: 'right',
    },
  ];
  visibleTimeline: RoadmapEntry[] = [];
  batchSize = 6;

  ngAfterViewInit(): void {
    this.loadMore();

    window.addEventListener('scroll', () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (nearBottom) {
        this.loadMore();
      }
    });

    this.initMediaLazyLoading();
  }

  private loadMore() {
    const nextBatch = this.fullTimeline.slice(
      this.visibleTimeline.length,
      this.visibleTimeline.length + this.batchSize
    );
    this.visibleTimeline = [...this.visibleTimeline, ...nextBatch];

    setTimeout(() => this.initMediaLazyLoading(), 100);
  }

  private initMediaLazyLoading() {
    const lazyVideos =
      document.querySelectorAll<HTMLVideoElement>('video.lazy-video');
    const lazyAudios =
      document.querySelectorAll<HTMLAudioElement>('audio.lazy-audio');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const media = entry.target as HTMLMediaElement;
            if (media.dataset['src']) {
              media.src = media.dataset['src'];
              media.load();
              obs.unobserve(media);
            }
          }
        });
      });

      lazyVideos.forEach((video) => observer.observe(video));
      lazyAudios.forEach((audio) => observer.observe(audio));
    }
  }
}
