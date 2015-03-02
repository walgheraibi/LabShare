# BUILDING

1) You don't need to change the source code in order to use the ls-seed framework. Based on the ls-seed framework, you can include your own CSS, JS and HTML files.

2) It is a client-end APP built by Grunt (Windows and Mac version) and Cordova (Android, iOS version).

### Setup Environment
+ Make sure you have properly set up your environment before continuing on this page.
+ [Setup](setup.md)

###Clone Repo and Install Development and Client Dependencies
In the command line:

1. `git clone https://github.com/LabShare/ls-seed.git`

Please make sure you have read and write permission of the folder where you clone and store the ls-seed project!

2. Switch to the folder where you stored the ls-seed project.

3. `npm install //use 'sudo npm install' if permissions needed`

4. `bower install`

###Set names for project
In the package.json file, you will see two properties that you can configure for your application
+ name: The name of your project
+ mobilePackageName: Name for the package of the mobile application in the form 'com.example.hello'

### Run Native Application(Windows, OSX, Linux32, Linux64)
1. Build native applications by running command `grunt build`
2. This will generate an application for each platform in the release folder
3. The release path is '/release/<project name>/' where you'll find a folder for each platform
4. For OSX, Linux, and Windows, you'll find an executable that can be run.
+ For mac, cd into `/release/<project_name>/osx/<project_name>.app/Contents/Resources`, then use command `../MacOS/node-webkit app.nw`

### Run Web application
1. The web application can be tested by using the command `npm start` which will run a static server on port 8080
2. Go to preferred browser and enter url 'http://localhost:8080'.
3. When continuing to make changes and test in browser, be sure open up the developer console for that browser and change the settings so that caching is disabled when the console is open

### Run Node Express server
1. `grunt expressServer` - listens on port 9090 by default

###Building Mobile applications
Go to: [Mobile](mobile.md)