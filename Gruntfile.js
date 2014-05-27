module.exports = function(grunt) {
  //load plugins
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-exec',
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
      cafemocha: {
          all: { src: 'qa/tests-*.js', options: { ui: 'tdd'}, }
        },
      jshint: {
              app: ['website.js', 'public/js/**/*.js', 'lib/**/*.js'],
              qa: ['Gruntfile.js', 'public/qu/**/*.js', 'qa/**/*.js'],
      },
    });

    // register tasks
    grunt.registerTask('default', ['cafemocha', 'jshint']);
};
