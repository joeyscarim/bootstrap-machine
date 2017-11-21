import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-dashboard-builder-edit',
  templateUrl: './builder-edit.component.html',
  styleUrls: ['./builder-edit.component.css']
})
export class DashboardBuilderEditComponent implements OnInit {

  // @ViewChild('right') code;
string: string;
category: string = "Navbar";
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
      removeOnSpill: true,
      
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

    // dragula.drop.subscribe((value) => {
    //   this.onDrop(value.slice(1));
    // });

    dragula.drop.subscribe((el) => {
      // el.addClass('howdy');
     (el[1].childNodes[1].classList.add('howdy'));
    //  console.log(el.slice(1));

    //  const element = document.getElementById("div1");
    //  element.classList.add("otherclass");
      
      // this.onDrop(value.slice(1));
    });


    // dragula.setOptions('first-bag', {
    //   copy: true,
    //   copySortSource: true
    // });


  }

  updateString() {
    const elem: Element = document.getElementById("right");
    this.string = elem.innerHTML.toString();
    // string.replace('_ngcontent-c1', '');
    this.string = this.string.replace(/_ngcontent-c1=""/g, '');


    this.string = this.string.replace(/_ngcontent-c4="" /g, '');
    
    this.string = this.string.replace(/<div  class="">/g, '');
    this.string = this.string.replace(/<app-element-navbar02  _nghost-c4="">/g, '');
this.string = this.string.replace(/<\/app-element-navbar02>/g, '');
this.string = this.string.replace(/<\/div>/g, '');
this.string = this.string.replace(/\n   /g, '');

    this.string = this.string.trim();
    
    
  }

  update(value) {
    console.log(value);
    this.category = value;
  }

  exportCode() {
    // console.log("the code!" + this.div);
    const elem: Element = document.getElementById('right');
    // elem.classList.remove('navbar-brand');
    // elem.classList.remove("mystyle");
    // elem.classList.remove("mystyle");
    this.string = elem.innerHTML.toString();
    
    // string.replace('_ngcontent-c1', '');
    this.string = this.string.replace(/_ngcontent-c1=""/g, '');
    this.string = this.string.replace('app', '');
    
    alert(this.string);
    // alert((elem.innerHTML).replace('_ngcontent-c1=\"\"', ''));
    console.log("a ok " + elem.innerHTML);
    
    
  }

  // private onDrag(args) {
  //   const [e, el] = args;
  //   this.removeClass(e, 'ex-moved');
  // }

  ngOnInit() {
    // this.dragula
    //   .drag
    //   .subscribe(value => {
    //     this.msg = `Dragging the ${ value[1].innerText }!`;
    //   });

    // private onDrop(args) {
    //   let [e, el] = args;
    //   this.addClass(e, 'ex-moved');
    // }

    // this.dragula
    //   .drop
    //   .subscribe(value => {
    //     // this.msg = `Dropped the ${ value[1].innerText }!`;
    //     alert(value);
    //     value.addClass('ex-moved');
        

    //     setTimeout(() => {
    //       // this.msg = '';
    //     }, 1000);
    //   });
  }
}
