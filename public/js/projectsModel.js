'use strict';

let $sourceHTML = $('#projects-template').html();
let $compiledTemplate = Handlebars.compile($sourceHTML);
var $newHTML = $($compiledTemplate({
  project: [
    {
      title: 'fraction calculator | ios app',
      url: `http://#.com`,
      // img: `../imgs/fractionCalc-mockup.jpg`,
      projectDescription: 'here are some words about the project and how we made it awesome.'
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
