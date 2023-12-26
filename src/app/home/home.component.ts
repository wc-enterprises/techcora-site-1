import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  gridData = [
    {
      icon: '/assets/webicon.svg',
      paragraph1: 'Web development',
      paragraph2:
        'Building innovative, user-friendly websites for your digital success.',
    },
    {
      icon: '/assets/appicon.svg',
      paragraph1: 'App development',
      paragraph2:
        'Developing innovative apps to revolutionize your digital experience.',
    },
    {
      icon: '/assets/uiicon.svg',
      paragraph1: 'UI/UX design',
      paragraph2:
        'Innovative AI/ML application development for cutting-edge technological solutions.        ',
    },
    {
      icon: '/assets/aiicon.svg',
      paragraph1: 'AI/ML applications',
      paragraph2:
        'Building intuitive apps with stellar design for an unmatched user experience.        ',
    },
  ];
}
