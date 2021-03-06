module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'index.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    nodeunit: {
      all: ['index.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['jshint']);
  //grunt.registerTask('test', ['jshint', 'nodeunit']);

  grunt.registerTask('test', 'runs my tasks', function () {
    var tasks = ['jshint', 'nodeunit'];

    // Use the force option for all tasks declared in the previous line
    grunt.option('force', true);
    grunt.task.run(tasks);
});

};