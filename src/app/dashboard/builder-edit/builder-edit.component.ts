import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ClipboardModule } from 'ngx-clipboard';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-builder-edit',
  templateUrl: './builder-edit.component.html',
  styleUrls: ['./builder-edit.component.css']
})
export class DashboardBuilderEditComponent implements OnInit {

  string: string;
  stringPlain: string;
  category = 'Navbar';

  ngOnInit() {
  }

  constructor(private dragula: DragulaService, public clipboardModule: ClipboardModule, private router: Router) {

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
    });
  }

  exitButton() {
    swal({
      title: 'Are you sure?',
      text: 'Your progress and current template will be lost.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, exit',
      cancelButtonText: 'Stay here',
      confirmButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('/dashboard/builder');
      }
    });
  }

  copyToClipboard() {
    window.getSelection().selectAllChildren( document.getElementById( 'outputCode' ) );
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    swal('Copied!', 'Thank you for using Boostrap Machine!' , 'success');
  }

    toggleHead() {
      const startOfPage = '<!doctype html>\n' +
     '<html lang="en">\n' +
        '<head>\n' +
          '<title>Built with Bootstrap Machine</title>\n\n' +
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
            '\n\n<!-- jQuery, Popper.js, & Bootstrap JS -->\n' +
            '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>\n' +
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>\n' +
            '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>\n\n' +
        '</body>\n' +
        '</html>\n' ;

      if (this.string.includes('<head>')) {
        this.string = this.stringPlain;
      } else {
        this.stringPlain = this.string;
        this.string = startOfPage + this.string + endOfPage;
      }
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

    this.string = this.string.replace(/( )*<div class="START"><\/div>/g, '');
    this.string = this.string.replace(/<div class="END"><\/div>\n( )*<\/div>/g, '');

    this.string = this.string.replace(/\n\n/g, '\n');

    this.string = this.string.trim();
  }

}
