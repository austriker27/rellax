'use strict';

var rellax = new Rellax('.rellax', {
  // center: true
  callback: function(position) {
      // callback every position change
      console.log(position);
  }
});

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    round: true,
  });
