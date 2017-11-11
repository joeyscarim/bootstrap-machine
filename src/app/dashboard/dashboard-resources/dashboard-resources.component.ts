import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-resources',
  templateUrl: './dashboard-resources.component.html',
  styleUrls: ['./dashboard-resources.component.css']
})
export class DashboardResourcesComponent implements OnInit {

  bootstrapEssentials = [
    ['#673ab7', 'Official Docs', 'abc', 'http://heropatterns.com'],
    ['#673ab7', 'CDN Links', 'cde', 'http://heropatterns.com'],
    ['#673ab7', 'Cheatsheet', 'fgh', 'http://heropatterns.com']
  ];

  fontsAndIcons = [
    ['#1c9e74', 'Font Awesome', 'abc', 'http://heropatterns.com'],
    ['#ff5252', 'Google Fonts', 'cde', 'http://heropatterns.com'],
    ['#222222', 'Inter UI', 'fgh', 'http://heropatterns.com']
  ];

  freeStockPhotography = [
    ['#222222', 'Pixabay', 'Over 1.1 million beautiful free images', 'http://pixabay.com'],
    ['#222222', 'Unsplash', 'Community driven free image collection', 'http://unsplash.com'],
    ['#222222', 'Startup Stock Photos', 'Free photos for startups', 'http://startupstockphotos.com'],
    ['#222222', 'Pexels', 'Best free stock photos in one place', 'http://pexels.com']
  ];



  design = [
    ['#27ae60', 'Flat UI Colors', 'Simple flat color grid with easy selection', 'http://flatuicolors.com']
   
  ];

  texturesAndPatterns = [
    ['#673ab7', 'Hero Patterns', 'abc', 'http://heropatterns.com'],
    ['#673ab7', 'Subtle Patterns', 'cde', 'http://heropatterns.com'],
    ['#673ab7', 'Transparent Textures', 'fgh', 'http://heropatterns.com'],
    ['#673ab7', 'UI Gradients', 'rfg', 'http://heropatterns.com']
  ];

  // console.log(items[0][0]); // 1
  // console.log(items);

  constructor() {
    console.log(this.texturesAndPatterns);
   }

  ngOnInit() {
  }

}
