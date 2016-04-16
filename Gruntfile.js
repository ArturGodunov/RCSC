module.exports = function(grunt) {
	grunt.initConfig({
		jade: {
			dist: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: {
					'dist/index.html': 'src/jade/index.jade'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'dist/styles/styles.css': 'src/sass/layout.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 9', 'ie 10']
			},
			dist:{
				files:{
					'dist/styles/styles.css': 'dist/styles/styles.css'
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			html: {
				files: [
					'src/jade/**/*.jade'
				],
				tasks: ['jade:dist'],
				options: {
					spawn: false
				}
			},
			css: {
				files: [
                    'src/sass/**/*.scss'
                ],
				tasks: ['sass:dist'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'jade',
        'sass',
		'autoprefixer',
        'watch'
    ]);
};