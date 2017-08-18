module.exports = function(grunt) {

  grunt.initConfig({ // Вказується конфігурація
   concat: { // злив усіх файлів в один!
      options: {
        separator: ';'
      },
      dist: { // пункти призначення запису файлів
        src: ['js/src/*.js'],
        dest: 'js/dist/main.js'
      }
    },
    uglify: { // мініфікація
        dist: {
            src: ['js/src/*.js'],
            dest: 'js/dist/main.min.js'
        }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    
  grunt.registerTask('default', ['concat']); // Реєструєм задачі для виконання!
  grunt.registerTask('dev', ['concat','uglify']); 

};