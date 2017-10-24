'use strict';


  // Project.prototype.toHtml = function() {
  //   let sourceHTML = $('#project-template').html();
  //   let actualTemplate = Handlebars.compile(sourceHTML);
  //   $('.projectsAnchor').append(Project.projects.map(actualTemplate));
  // };

  let sourceHTML = $('projects-template').html();
  let compiledTemplate = Handlebars.compile(sourceHTML);
  $('.projects-anchor').append(map(compiledTemplate));
