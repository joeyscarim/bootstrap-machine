import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-dashboard-builder-edit',
  templateUrl: './builder-edit.component.html',
  styleUrls: ['./builder-edit.component.css']
})
export class DashboardBuilderEditComponent implements OnInit {

  string: string;
  category: string = 'Navbar';

  ngOnInit() {
  }

  constructor(private dragula: DragulaService) {

    // private dragulaService: DragulaService
    dragula.setOptions('first-bag', {
      removeOnSpill: true,
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

    dragula.drop.subscribe((el) => {
     (el[1].childNodes[1].classList.add('howdy'));
    //  el[1].innerHTML.toString().replace(/<div  class="">/g, '');
     
    });

  }

  updateString() {
    const elem: Element = document.getElementById('right');
    this.string = elem.innerHTML.toString();

    this.string = this.string.replace(/_ngcontent-c[0-9]*=""/g, '');
    this.string = this.string.replace(/<div  class="">/g, '');

    this.string = this.string.replace(/<app-element-(.*)  class="zoom howdy" _nghost-c[0-9]*="">/g, '');
    this.string = this.string.replace(/<\/app-element-(.*)>/g, '');

    this.string = this.string.replace(/  /g, ' ');

    // <div class="END"></div>
    // </div>
    this.string = this.string.replace(/( )*<div class="START"><\/div>/g, '');
    
    this.string = this.string.replace(/<div class="END"><\/div>\n( )*<\/div>/g, '');

    // this.string = this.string.replace(/\n <\/div>\n/g, '');
    // this.string = this.string.replace(/\n\n<\/div>/g, '');
    this.string = this.string.replace(/\n\n/g, '\n');

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
    // console.log("a ok " + elem.innerHTML);
  }

}
