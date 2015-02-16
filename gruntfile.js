module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		  options: {
			separator: ';'
		  },
		  dist: {
			src: ['StarterTemplate/app/**/*.js', '!StarterTemplate/app/lib/**/*.js'],
			dest: 'build/<%= pkg.name %>.js'
		  }
		},
		uglify: {
		  options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		  },
		  build: {
			src: 'build/<%= pkg.name %>.js',
			dest: 'build/<%= pkg.name %>.min.js'
		  }
		},
		jshint: {
				files: ['gruntfile.js', 'StarterTemplate/app/**/*.js', '!StarterTemplate/app/lib/**/*.js'],
				options: {
				// options here to override JSHint defaults
				globals: {
				  jQuery: true,
				  console: true,
				  module: true,
				  document: true
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};