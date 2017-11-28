import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ClipboardModule } from 'ngx-clipboard';


@Component({
  selector: 'app-dashboard-builder-edit',
  templateUrl: './builder-edit.component.html',
  styleUrls: ['./builder-edit.component.css']
})
export class DashboardBuilderEditComponent implements OnInit, AfterViewInit {

  string: string;
  stringPlain: string;
  // text: string;
  // isCopied1: boolean = false;
  // isCopied2: boolean = false;  
  category: string = 'Navbar';

  ngOnInit() {
  }

  ngAfterViewInit()	{
    // const elements: NodeListOf<Element> = document.getElementsByClassName("zoom");
    // alert(elements[0]);
    // elements[0].getBoundingClientRect();
    // elements[1].getBoundingClientRect();
    // elements[2].getBoundingClientRect();
    // elements[3].getBoundingClientRect();
    // elements[4].getBoundingClientRect();

    // angular.element(".myDiv")[0].offsetHeight;
    
    // $("li").css("height", maxHeight);

    // const linkHeight: <int> =  elements[0].clientHeight();
    
    
    
  }

  constructor(private dragula: DragulaService, public clipboardModule: ClipboardModule) {

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

    // var originalHeight = myElement.innerHeight; // 720
    
    // originalElement.style.transform = 'scale(1.5)';
    // const elem: Element = document.getElementsByClassName('zoom');
    


  }

 

  copyToClipboard() {
        // const selBox = document.createElement('textarea');

        // selBox.style.position = 'fixed';
        // selBox.style.left = '0';
        // selBox.style.top = '0';
        // selBox.style.opacity = '0';
        // selBox.value = this.string;

        // document.body.appendChild(selBox);
        // selBox.focus();
        // selBox.select();
        window.getSelection().selectAllChildren( document.getElementById( 'outputCode' ) );
        document.execCommand('copy');
        // document.selection.empty();
      // } else if ( window.getSelection ) {
          window.getSelection().removeAllRanges();
        // window.getSelection().selectAllChildren(null);
        
        // document.body.removeChild(selBox);

        alert("Copied!");
    }

    toggleHead() {

      // const startOfPage = '<html>\n<body>\n\n';

      const startOfPage = '<!doctype html>\n' +
     '<html lang="en">\n' +
        '<head>\n' +
          '<title>Launchpad!</title>\n\n' +
          '<!-- Required meta tags -->\n' +
          '<meta charset="utf-8">\n' +
          '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\n' +
          '<!-- Bootstrap CSS -->\n' +
         '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">\n\n' +
          '<!-- Font Awesome CSS -->\n' +
          '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">    \n\n' +
      '</head>\n' +
        '<body>\n\n';
      
            const endOfPage =

            '<!-- jQuery, Popper.js, & Bootstrap JS -->\n' +
            '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n' +
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>\n' +
            '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>\n' +
        
        '</body>\n' +
        '</html>\n' ;
      
      // const selBox = document.createElement('textarea');
      if (this.string.includes('<head>')) {
        this.string = this.stringPlain;
      } else {
        this.stringPlain = this.string;
        this.string = startOfPage + this.string + endOfPage;
      }
      // selBox.style.position = 'fixed';
      // selBox.style.left = '0';
      // selBox.style.top = '0';
      // selBox.style.opacity = '0';
      // selBox.value = this.string;

      // document.body.appendChild(selBox);
      // selBox.focus();
      // selBox.select();
      // window.getSelection().selectAllChildren( document.getElementById( 'outputCode' ) );
      // document.execCommand('copy');
      // document.body.removeChild(selBox);
      

  

      // alert("Copied!");
  }

  updateString() {
    const elem: Element = document.getElementById('right');
    this.string = elem.innerHTML.toString();

    this.string = this.string.replace(/_ngcontent-c[0-9]*=""/g, '');
    this.string = this.string.replace(/<div  class="">/g, '');

    this.string = this.string.replace(/<app-element-(.*)  class="zoom howdy" style="height:[0-9]*px" _nghost-c[0-9]*="">/g, '');
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
