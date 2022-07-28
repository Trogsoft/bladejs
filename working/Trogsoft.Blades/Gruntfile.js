/// <binding AfterBuild='build' />
module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            build: {
                options: {
                    force: true
                },
                src: ['../../src/*.*', '../../dist/*.*']
            }
        },
        copy: {
            main: {
                files: [
                    {
                        cwd: 'wwwroot/js',
                        src: 'trogsoft.*.js',
                        expand: true,
                        dest: '../../src'
                    },
                    {
                        cwd: 'wwwroot/css',
                        expand: true,
                        src: 'trogsoft.blade.less',
                        dest: '../../src'
                    }
                ]
            }
        },
        less: {
            build: {
                src: '../../src/trogsoft.blade.less',
                dest: '../../src/trogsoft.blade.css'
            }
        },
        uglify: {
            build: {
                files: [
                    {
                        src: '../../src/*.js',
                        dest: '../../dist/trogsoft.blade.min.js'
                    },
                ]
            }
        },
        cssmin: {
            build: {
                src: '../../src/trogsoft.blade.css',
                dest: '../../dist/trogsoft.blade.min.css'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['clean', 'copy', 'less', 'uglify', 'cssmin']);

};