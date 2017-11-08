import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-dashboard-builder-edit',
  templateUrl: './builder-edit.component.html',
  styleUrls: ['./builder-edit.component.css']
})
export class DashboardBuilderEditComponent implements OnInit {

  // @ViewChild('right') code;

  // testhtml: any;
  // @ViewChild('#testhtml') div: ElementRef;

  // @ViewChild('#testhtml', {read: ElementRef}) private div: ElementRef;
  
  
//   constructor() { }

//   ngOnInit() {
//   }

// }


// import { Component, OnInit } from '@angular/core';


// @Component({ ... })
// export class AppComponent implements OnInit {
  // msg = '';

  // items = [
  //   'Candlestick',
  //   'Dagger',
  //   'Revolver',
  //   'Rope',
  //   'Pipe',
  //   'Wrench'
  // ];

  //   people = [
  //   'Apple',
  //   'Banana',
  //   'Peach',
  //   'Pear',
  //   'Watermelon',
  //   'Fish'
  // ];

  constructor(private dragula: DragulaService) {

    // private dragulaService: DragulaService
    dragula.setOptions('first-bag', {
      // copy: true,
      // copySortSource: true,
      copy: function (el, source) {
        // To copy only elements in left container, the right container can still be sorted
        return source.id === 'left';
      },
      copySortSource: false,
      accepts: function(el, target, source, sibling) {
        // To avoid draggin from right to left container
        return target.id !== 'left';
      }
    });

    // dragula.setOptions('first-bag', {
    //   copy: true,
    //   copySortSource: true
    // });


  }

  exportCode() {
    // console.log("the code!" + this.div);
    const elem: Element = document.getElementById("right");
    alert(elem);
    console.log(elem);
    
    
  }

  ngOnInit() {
    // this.dragula
    //   .drag
    //   .subscribe(value => {
    //     this.msg = `Dragging the ${ value[1].innerText }!`;
    //   });

    // this.dragula
    //   .drop
    //   .subscribe(value => {
    //     this.msg = `Dropped the ${ value[1].innerText }!`;

    //     setTimeout(() => {
    //       this.msg = '';
    //     }, 1000);
    //   });
  }
}
