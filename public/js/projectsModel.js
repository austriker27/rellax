'use strict';

let $sourceHTML = $('#projects-template').html();
let $compiledTemplate = Handlebars.compile($sourceHTML);
var $newHTML = $($compiledTemplate({
  project: [
    {
      title: 'fraction calculator | ios app',
      url: `https://itunes.apple.com/us/app/fraction-calculator-pro/id398107543`,
      img: `assets/imgs/mockup.png`,
      projectDescription: 'this app was the highest rated fraction calculator on the app store for nearly ten years. '
    },
    {
      title: 'posy rae | website',
      url: `http://posyrae.com`,
      img: `assets/imgs/mockup.png`,
      projectDescription: `we assisted with a website redesign and e-commerce build out for posy rae's amazing paper floral arrangements.`
    },
    {
      title: 'moving forward leadership | website',
      url: `http://movingforwardleadership.com`,
      img: `assets/imgs/mockup.png`,
      projectDescription: `for scott of the moving forward leadership blog we designed and developed a new website adding functionality to store podcasts, show notes and articles he wrote.`
    }
  ]
}));
$('#projects-anchor').append($newHTML);

// TODO: pass in objects from JSON into the above function rather than manual coding it.

// (function(module) {
  // function Project (projects) {
  //   this.title = projects.title;
  //   this.url = projects.url;
  //   this.img = projects.img;
  //   this.projectDescription = projects.projectDescription;
  // }
  //
  // projects.all = [];
  //
  // Project.prototype.toHtml = function() {
  //   let sourceHTML = $('#projects-template').html();
  //   let compiledTemplate = Handlebars.compile(sourceHTML);
  //   return compiledTemplate(this);
  //   // $('#projects-anchor').append(compiledTemplate);
  // }
  //
  // rawData.forEach(function(projectObject) {
  //   projects.all.push(new Project(projectObject));
  // });
  //
  // projects.all.forEach(function(project){
  //   $('#projects-anchor').append(project.toHtml());
  // });
// };
