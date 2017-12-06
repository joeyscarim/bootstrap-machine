import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class DashboardResourcesComponent implements OnInit {

  bootstrapEssentials = [
    ['code', '#673ab7', 'Official Docs', 'The official Bootstrap 4 documentation', 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'],
    ['external-link-square', '#673ab7', 'CDN Links', 'The Bootstrap 4 CDN links', 'https://getbootstrap.com'],
    ['sticky-note', '#388ecc', 'Cheatsheet', 'Documentation for common CSS classes, components, and grids', 'https://bootstrapcreative.com/resources/bootstrap-4-css-classes-index/']
  ];

  fontsAndIcons = [
    ['flag', '#1c9e74', 'Font Awesome', 'The best icon font to use with Bootstrap', 'https://fontawesome.com'],
    ['google', '#ff5252', 'Google Fonts', 'Web friendly font collection with CDN options', 'https://fonts.google.com'],
    ['font', '#222222', 'Inter UI', 'The web friedly font', 'https://rsms.me/inter/']
  ];

  freeStockPhotography = [
    ['file-image-o', '#222222', 'Pixabay', 'Over 1.1 million beautiful free images', 'http://pixabay.com'],
    ['file-image-o', '#222222', 'Unsplash', 'Community driven free image collection', 'http://unsplash.com'],
    ['file-image-o', '#222222', 'Startup Stock Photos', 'Free photos for startups', 'http://startupstockphotos.com'],
    ['file-image-o', '#222222', 'Pexels', 'Best free stock photos in one place', 'http://pexels.com']
  ];



  colorsAndGradients = [
    ['eyedropper', '#2980b9', 'Flat UI Colors', 'Simple flat color grid with easy selection', 'http://flatuicolors.com'],
    ['eyedropper', '#2195f3', 'Bootswatch', 'Free color themes for Bootstrap', 'https://bootswatch.com/'],
    ['eyedropper', '#222222', 'UI Gradients', 'Easy selection of background gradients', 'https://uigradients.com/']
    
  ];

  texturesAndPatterns = [
    ['paint-brush', '#9078bb', 'Hero Patterns', 'Web friendly patterns', 'http://heropatterns.com'],
    ['paint-brush', '#3661A2', 'Subtle Patterns', 'Web friendly patterns', 'https://www.toptal.com/designers/subtlepatterns/'],
    ['paint-brush', '#008c8c', 'Transparent Textures', 'Web friendly background textures', 'https://www.transparenttextures.com/'],
  ];

  addedFunctionality = [
    ['play-circle-o', '#428bca', 'Embed Responsively', 'Quickly generate Bootstrap friendly HTML & CSS for responsive video embeds', 'http://embedresponsively.com']
  ];

  community = [
    ['reddit', '#ff5520', 'r/bootstrapmachine', 'The Bootstrap Machine subreddit', 'https://www.reddit.com/r/bootstrapmachine'],
    ['reddit', '#ff5520', 'r/bootstrap', 'The Official Bootstrap subrebbit', 'https://reddit.com/r/bootstrap']
  ];

  learn = [
    ['flag', '#388ecc', 'BootstrapCreative', 'Learn how to build responsive websites with Bootstrap', 'https://bootstrapcreative.com/'],
    ['youtube-play', '#ff0000', 'Brad Hussey - Youtube Course', 'Free course that takes a deep dive into the new features included in Bootstrap 4', 'https://www.youtube.com/playlist?list=PLUoqTnNH-2XyNhhLuYrrmrmV46jVw6RHF']
    



  
  ];



  inspiration = [
    ['trophy', '#49c5b6', 'Awwwards', 'Best web design trends', 'https://www.awwwards.com'],
    ['camera', '#222222', 'Dribble', 'Show and tell for designers', 'https://dribbble.com/']
  ];

  // console.log(items[0][0]); // 1
  // console.log(items);

  constructor() {
    console.log(this.texturesAndPatterns);
   }

  ngOnInit() {
  }

}
