'use strict';



// (function(module) {
  function Project (projects) {
    this.title = projects.title;
    this.url = projects.url;
    this.img = projects.img;
    this.projectDescription = projects.projectDescription;
  }

  projects.all = [];

  Project.prototype.toHtml = function() {
    let sourceHTML = $('#projects-template').html();
    let compiledTemplate = Handlebars.compile(sourceHTML);
    return compiledTemplate(this);
    // $('#projects-anchor').append(compiledTemplate);
  }

  rawData.forEach(function(projectObject) {
    projects.all.push(new Project(projectObject));
  });

  projects.all.forEach(function(project){
    $('#projects-anchor').append(project.toHtml());
  });
// };
