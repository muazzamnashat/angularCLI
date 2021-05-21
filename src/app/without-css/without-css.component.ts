import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nashat-without-css',
  template: ` <p>without-css works!</p> `,
  styles: [],
})
export class WithoutCssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
