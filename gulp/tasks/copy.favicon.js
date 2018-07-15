'use strict';

module.exports = function() {
  $.gulp.task('copy:favicon', function() {
    return $.gulp.src('./*.ico', { since: $.gulp.lastRun('copy:favicon') })
      .pipe($.gulp.dest($.config.root));
  });
};
