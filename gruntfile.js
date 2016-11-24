module.exports = function (grunt) {
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		jslint: {
			client: {
				src:[
					'js/**/*.js'

				],
				files: [
					'js/**/*.js'
				],
				directives: {
				browser: true,
				predef: [
					'jquery'
				]

				}

			}

		},
		csslint: {
			lax: {
				options: {

					import:false
				},
				src: ['**/*.css']
			} 
		},
		watch: {
			tasks: ['csslint'],
			files: ['**/*.css']
		}
		
		});
require('load-grunt-tasks')(grunt);
	grunt.registerTask('init' , ['jslint']);
	
	};