import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts = [
    {
      subject: 'Post 1',
      content:
        'This is the content of post 1 and it is very long and boring and I am just typing random words to fill up the space.',
      date: '2019-01-01',
    },
    {
      subject: 'Post 2',
      content: 'This is the content of post 2',
      date: '2019-01-02',
    },
  ];
  constructor() {}
}
