import { Injectable } from '@angular/core';
import { MusicComposition } from './music-composition.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicCompositionService {

  public musicComposition: MusicComposition[] = [
    {
      composition: 'Highway to Hell',
      artist: 'AC/DC',
      time: '3:28'
    },
    {
      composition: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      time: '5:01'
    },
    {
      composition: 'Love Will Tear Us Apart',
      artist: 'Joy Division',
      time: '3:26'
    },
    {
      composition: 'Wouldn\'t It Be Nice',
      artist: 'The Beach Boys',
      time: '2:23'
    },
    {
      composition: 'Paperback Writer',
      artist: 'The Beatles',
      time: '2:19'
    },
    {
      composition: 'Riders on the Storm',
      artist: 'The Doors',
      time: '7:14'
    },
    {
      composition: 'Golden Brown',
      artist: 'The Stranglers',
      time: '3:32'
    },
    {
      composition: 'Don\'t Stop \'Til You Get Enough\n',
      artist: 'Michael Jackson',
      time: '6:03'
    },
    {
      composition: 'Complete Control',
      artist: 'The Clash',
      time: '3:12'
    },
    {
      composition: 'Sympathy For The Devil',
      artist: 'The Rolling Stones',
      time: '6:17'
    },
  ];

  constructor() { }
}
