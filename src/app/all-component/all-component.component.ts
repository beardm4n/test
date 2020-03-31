import { Component, OnInit } from '@angular/core';

import { components } from '../components';

@Component({
  selector: 'app-all-component',
  templateUrl: './all-component.component.html',
  styleUrls: ['./all-component.component.scss'],
})
export class AllComponentComponent implements OnInit {

  components = components;

  constructor() { }

  ngOnInit(): void {
  }
}
