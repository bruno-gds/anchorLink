import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'anchor-link';
  names = [
    { name: 'João', id: 1 },
    { name: 'Maria', id: 2 },
    { name: 'José', id: 3 },
    { name: 'Pedro', id: 4 },
    { name: 'Ana', id: 5 }
  ];

  jump(id: number) {
    document.getElementById(id.toString())!!.scrollIntoView();
  }
}
