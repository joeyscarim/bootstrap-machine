import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-resources',
  templateUrl: './dashboard-resources.component.html',
  styleUrls: ['./dashboard-resources.component.css']
})
export class DashboardResourcesComponent implements OnInit {

  texturesAndPatterns = [
    ['#ff00ff', 'Hero Patterns', 'abc', 'http://heropatterns.com'],
    ['#ff00ff', 'Subtle Patterns', 'cde', 'http://heropatterns.com'],
    ['#ff00ff', 'Transparent Textures', 'fgh', 'http://heropatterns.com'],
    ['#ff00ff', 'UI Gradients', 'rfg', 'http://heropatterns.com']
  ];

  // console.log(items[0][0]); // 1
  // console.log(items);

  constructor() {
    console.log(this.texturesAndPatterns);
   }

  ngOnInit() {
  }

}
