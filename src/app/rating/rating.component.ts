import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  private rating: number;

  @ViewChildren('star') stars: QueryList<ElementRef>

  constructor() { }

  ngOnInit(): void {
    this.rating = 0;
  }

  get isDisabled() {
    if (this.rating === 0) {
      return true
    }
  }

  click(e) {
    if (e.target.tagName === 'I') {
      const stars = this.stars.map((item) => item.nativeElement);
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove('current-active');
      }
      e.target.classList.add('active', 'current-active');
    }
    this.rating = +e.target.dataset.rate;
  }

  onMouseover(e) {
    if (e.target.tagName === 'I') {
      const stars = this.stars.map((item) => item.nativeElement);
      if (e.target.classList.contains('star')) {
        for (let i = 0; i < stars.length; i++) {
          stars[i].classList.remove('active');
        }
        e.target.classList.add('active');
        for (let i = 0; i < stars.length - 1; i++) {
          if (stars[i].classList.contains('active')) {
            break;
          } else {
            stars[i].classList.add('active');
          }
        }
      }
    }
  }

  onMouseout(e) {
    if (e.target.tagName === 'I') {
      const stars = this.stars.map((item) => item.nativeElement);
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.add('active');
      }
      for (let i = stars.length - 1; i >= 0; i--) {
        if (stars[i].classList.contains('current-active')) {
          break;
        } else {
          stars[i].classList.remove('active');
        }
      }
    }
  }

  send() {
    confirm(`You sent rating - ${this.rating} stars`);
  }
}
