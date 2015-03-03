module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        },
        nodewebkit: {
            options: {
                    version: '0.11.4',
                    platforms: ['win', 'osx', 'linux32', 'linux64'],
                    buildDir: './release',               // Where the build version of my node-webkit app is saved
                    downloadUrl: 'http://dl.nwjs.io/'    // Temporary fix: NodeWebkit binaries are located at a new address
            },
            src: [                                       // Your node-webkit app source files
                './package.json',
                './index.html',
                './ui/**/*'
            ]
        },
        compass: {
            options: {
                sassDir: "ui/stylesheets",
                cssDir: "ui/stylesheets",
                generatedImagesDir: "ui/stylesheets/ui/images/",
                imagesDir: "ui/stylesheets/ui/images/",
                javascriptsDir: "ui/js",
                fontsDir: "ui/fonts",
                importPath: "ui/js/bower_components",
                httpImagesPath: "stylesheets/ui/images/",
                httpGeneratedImagesPath: "stylesheets/ui/images/",
                httpFontsPath: "fonts",
                relativeAssets: true
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    debugInfo: false,
                    noLineComments: true
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        copy: {
            toApp: {
                files: [
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/ls_seed/linux64/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/ls_seed/linux32/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/ls_seed/win/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/ls_seed/osx/ls_seed.app/Contents/Resources/VERSION'
                    }
                ]
            }
        },
        clean: {
            build: [
                "./release"
            ]
        },
        express: {
            dev: {
                options: {
                    script: './service/services/index.js',
                    background: false
                }
            }
        },
        bowerRequirejs: {
            main: {
                rjsConfig: 'ui/js/require-config.js',
                options: {
                    'exclude-dev': true
                }
            },
            test: {
                rjsConfig: 'test/main-test.js',
                options: {
                    baseUrl: './ui/js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-bower-requirejs');

    // Automatically generates the file paths for both requirejs config files.
    // In the .bowerrc file, this task is set to run after installing new bower components.
    grunt.registerTask('updatePaths', ['bowerRequirejs:main', 'bowerRequirejs:test']);

    // Used by CD
    grunt.registerTask('build', ['clean','nodewebkit','copy:toApp']);   // The name is fixed. You can't change the name.

    // Unit testing
    grunt.registerTask('test', ['karma:unit']);

    //Backend server
    grunt.registerTask('backendServer', ['express:dev']);

};
