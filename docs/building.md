# BUILDING

1) You don't need to change the source code in order to use the ls-seed framework. Based on the ls-seed framework, you can include your own CSS, JS and HTML files.

2) It is a client-end APP built by Grunt (Windows and Mac version) and Cordova (Android, iOS version).

###Making Windows and Mac  applications.

Note: NodeJS, grunt-cli, and Bower need to be installed globally first.

After installing NodeJS from http://nodejs.org/, run 'npm install -g grunt-cli bower'.

###Build steps
In the command line:

0) git clone https://github.com/LabShare/ls-seed.git. 

// Please make sure you have read and write permission of the folder where you clone and store the ls-seed project!

1) Switch to the folder where you stored the ls-seed project.

2) npm install

3) bower install

4) grunt build

###Run the Windows and Mac APP
You can find the app in ls-seed/ls_seed/release/ls_seed folder. There will be two folders one is for Windows another is for Mac.


###Making mobile applications

####Before you bake mobile application
1) Apache Cordova makes it possible for us to use the same code (html, js and css) to build mobile applications.
You just need to install different platform SDKs.

2) More API documentation can be found at this url:
http://cordova.apache.org/docs/en/3.5.0//guide_cli_index.md.html#The%20Command-Line%20Interface


####Build steps

0) In the command line, please make sure you are in the root folder. All the source file for mobile version have been stored in mobile 

#### Create the APP
2) mkdir cordova

Create cordova folder inside the mobile

3) cd cordova

// go to this new folder

4) npm install -g cordova

// Install cordova at the folder 'cordova'

// if you don't have the permission please use 'sudo' to grant permission

5) cordova create lsseed com.example.lsseed LsSeed 

// Create the framework App named lsseed with default settings.

#### Replace the source code in 'www' folder
6) cd lsseed/www

// Switch to 'www' folder

7) rm -r index.html js css img

// Delete the index.html, js, img and css folders inside 'www'.folder.

8) copy our lsseed source files in folder 'ls_seed/ls_seed_source/*' into 'cordova/lsseed/www' folder

In command line:

cp -r ./../../../ls_seed/ls_seed_source

or

xcopy ..\..\..\ls_seed\ls_seed_source /s

#### install android and iOS sdk
After you finished the step 8 above. Please install android and ios sdk.

For Android

1) Download and install the android SDK. After downloading, make sure that you have "tools and platform-tools" in path

2) Download and install JAVA and ANT into your machine. After that, make sure you have 'JAVA_HOME\bin' and 'ANT_HOME' 

3) run android and install v19 (or newest version) API and SDK tools

4) more details please check out document for Android:
http://cordova.apache.org/docs/en/3.5.0//guide_platforms_android_index.md.html#Android%20Platform%20Guide

For IOS
Install Xcode and upgrade to newest version.

#### Builds iOS and Android apps
1) cd..
// Move to 'ls-seed/cordova/lsseed' folder

2) cordova platform add android

3) cordova platform add ios

4) cordova plugin add org.apache.cordova.console

5) cordova plugin and org.apache.cordova.inappbrowser

6) cordova build

#### Deploy to Android Emulator and iOS Simulator
1)cordova emulate android
// For android

When you cange your code in the future, you can just type: 'cordova android run' or 'cordova ios run' in order to bake the APP.

2)Click Run on the Simulator.
// For iOS

###Testing Steps

1. Make sure all dependencies are installed using npm install and bower install.
2. grunt test
    - The browser used for unit tests can be changed in test/karma.conf.js
    - Code coverage reports are generated in test/coverage
    - New unit test files need to end in '_Spec' in order to be found by karma