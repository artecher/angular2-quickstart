import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul class="heroes">
      <li
        *ngFor="#hero of heroes"
        (click)="onSelect(hero)"
        [ngClass]="{selected: hero === selectedHero}"
        >
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h1>{{selectedHero.name}} details!</h1>
      <div>id: {{selectedHero.id}}</div>
      <div><span>name: </span><input [(ngModel)]="selectedHero.name"></div>
    </div>

  `,
  styles: [`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `]
})

export class AppComponent {
  public title = 'Heroes';
  public heroes: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
  ];
  public selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
