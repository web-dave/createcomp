import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{ name }}!</h1>`,
})
export class HelloComponent implements OnInit {
  name: string = '';
  constructor() {}

  ngOnInit(): void {}
}
