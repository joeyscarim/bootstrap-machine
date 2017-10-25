import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-template-builder',
  templateUrl: './template-builder.component.html',
  styleUrls: ['./template-builder.component.css']
})
export class TemplateBuilderComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


// import { Component, OnInit } from '@angular/core';


// @Component({ ... })
// export class AppComponent implements OnInit {
  msg = '';

  items = [
    'Candlestick',
    'Dagger',
    'Revolver',
    'Rope',
    'Pipe',
    'Wrench'
  ];

    people = [
    'Apple',
    'Banana',
    'Peach',
    'Pear',
    'Watermelon',
    'Fish'
  ];

  constructor(private dragula: DragulaService) { }

  ngOnInit() {
    this.dragula
      .drag
      .subscribe(value => {
        this.msg = `Dragging the ${ value[1].innerText }!`;
      });

    this.dragula
      .drop
      .subscribe(value => {
        this.msg = `Dropped the ${ value[1].innerText }!`;

        setTimeout(() => {
          this.msg = '';
        }, 1000);
      });
  }
}