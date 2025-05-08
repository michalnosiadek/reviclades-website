import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  standalone: false,
})
export class AboutPageComponent {
  hovered: number | null = null;

  team = [
    {
      name: 'Jan Krol',
      image: '/assets/images/team/jan.png',
      bio: `Jan's love for gaming sparked in his teens, laying the groundwork for a coding journey that began at 14. For him, Reviclades is more than a project—it's a mission to build a world players can truly belong to.`,
    },
    {
      name: 'Vadim Aniko',
      image: '/assets/images/team/vadim.png',
      bio: `Shaped by childhood favorites like Heroes of Might and Magic and Wakfu, Vadim merged a love for fantasy with an engineer’s mind. Now, he brings that magic into every mechanic of Reviclades.`,
    },
    {
      name: 'Michał Fizia',
      image: '/assets/images/team/fizia-2.png',
      bio: `As Creative Director, Michał crafts immersive lore, vivid characters, and captivating dialogue. A versatile visionary, he also shapes the game's soundscape, abilities, and spirit—fueling the team's shared dream.`,
    },
    {
      name: 'Aleksander Moskwa',
      image: '/assets/images/team/aleksander-2.png',
      bio: `Aleksander shapes Reviclades' visual identity, from stunning VFX to intuitive UI/UX. His love for fantasy breathes life into the game's world, branding, and characters, blending technical skill with artistic passion.`,
    },
    {
      name: 'Michał Nosiadek',
      image: '/assets/images/team/nosiadek.png',
      bio: `From game systems to web design, Michał brings ideas to life with art and imagination. His passion for storytelling and fantasy fuels every line of code, creating worlds players love to explore.`,
    },
  ];
}
