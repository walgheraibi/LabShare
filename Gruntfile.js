module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                        dest: './release/<%= pkg.name %>/linux64/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/<%= pkg.name %>/linux32/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/<%= pkg.name %>/win/VERSION'
                    },
                    {
                        cwd: './',
                        src: ['VERSION'],
                        dest: './release/<%= pkg.name %>/osx/<%= pkg.name %>.app/Contents/Resources/VERSION'
                    }
                ]
            },
            mobile: {
                cwd: './',
                src: ['index.html', 'ui/**/*'],
                dest: './mobile/<%= pkg.name %>/www/'
            }
        },
        clean: {
            build: [
                "./release"
            ],
            mobile: [
                "./mobile/<%= pkg.name %>/www/*"
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
        },
        shell: {
            _options: {
                failOnError: true,
                stdout: true
            },
            setup_mobile: {
                command: ['mkdir mobile',
                    'cd mobile',
                    'pwd',
                    'cordova create <%= pkg.name %> <%= pkg.mobilePackageName %> <%= pkg.name %>'
                ].join('&&')
            },
            add_android: {
                command: 'cordova platform add android',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'mobile/<%= pkg.name %>'
                    }
                }
            },
            add_ios: {
                command: 'cordova platform add ios',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'mobile/<%= pkg.name %>'
                    }
                }
            },
            add_plugins: {
                command: ['cordova plugin add org.apache.cordova.console',
                    'cordova plugin and org.apache.cordova.inappbrowser'
                ].join('&&'),
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'mobile/<%= pkg.name %>'
                    }
                }
            },
            build_mobile: {
                command: 'cordova build',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'mobile/<%= pkg.name %>'
                    }
                }
            },
            emulate_android: {
                command: 'cordova emulate android',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'mobile/<%= pkg.name %>'
                    }
                }
            },
            run_android: {
                command: 'cordova run android',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'mobile/<%= pkg.name %>'
                    }
                }
            },
            add_models: {
                command: 'gulp js'
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
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-bower-requirejs');

    // Automatically generates the file paths for both requirejs config files.
    // In the .bowerrc file, this task is set to run after installing new bower components.
    grunt.registerTask('updatePaths', ['bowerRequirejs:main', 'bowerRequirejs:test']);

    // Used by CD
    grunt.registerTask('build', ['shell:add_models','clean','nodewebkit','copy:toApp']);   // The name is fixed. You can't change the name.

    // Unit testing
    grunt.registerTask('test', ['karma:unit']);

    //Backend server
    grunt.registerTask('expressServer', ['express:dev']);

    //builds mobile application in the 'mobile' folder
    grunt.registerTask('setupMobile', ['shell:setup_mobile', 'shell:add_plugins', 'clean:mobile','copy:mobile']);
    grunt.registerTask('addAndroid', ['shell:add_android']);
    grunt.registerTask('addIos', ['shell:add_ios']);
    grunt.registerTask('buildMobile', ['clean:mobile', 'copy:mobile', 'shell:build_mobile']);
    grunt.registerTask('emulateAndroid', ['buildMobile', 'shell:emulate_android']);
    grunt.registerTask('runAndroid', ['buildMobile', 'shell:run_android']);
};
