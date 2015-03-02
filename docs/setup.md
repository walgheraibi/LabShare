#Setup Environment

###Needed globals

+ Nodejs - is an event-driven, non-blocking I/O model and comes with the Node Package Manager(npm)
+ grunt-cli - The command line interface for Grunt, a javascript task runner.
+ bower - a package manager for the web. Is used to manage ui client dependencies

#### Installing node
1. Navigate to (nodejs.org) and follow the install instructions for your system
2. Verify global access to node by running command `node --version` in the terminal/console
3. If something other than a version number is output, may need to update PATH for node and npm

####Installation of the other globals
The rest of the globals can be installed using the node package manager.
`npm install -g grunt-cli bower cordova`

###Setup for Mobile Application Development

####Android

#####SDK Install info: (https://developer.android.com/sdk/installing/index.html)
1. Download and install:
  * JAVA: (https://www.java.com/en/download/help/download_options.xml)
  * ANT: (http://ant.apache.org/manual/install.html)
2. Make sure you have added the env variables 'JAVA_HOME\bin' and 'ANT_HOME'

3. Download and install the android SDK.
4. Make sure that you have added the ANDROID_HOME env variable that points to the folder containing the sdk
5. Also make sure to add `$ANDROID_HOME/tools` and `$ANDROID_HOME/platform-tools` to your PATH

6. Once the Android SDK is installed you will need use the SDK manager to install the desired platforms for development.
  * Currently Cordova supports Android 2.3.x (Gingerbread, starting with Android API level 10) and 4.x.
  * Their general rule is to support those above 5% based on Google's [distribution dashboard](http://developer.android.com/about/dashboards/index.html)

4. For more info on Cordova and Android use their [platform guide](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide)

####IOS(Note: developing for IOS is only supported on Mac devices)

1. Install the latest version of Xcode by going to: (https://developer.apple.com/xcode/downloads/)
2. For more info on Cordova and IOS use their [platform guide](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_ios_index.md.html)

####For SASS

#####Ruby - dynamic open-source programming language
+ For more platform-specific instructions, go to: (https://www.ruby-lang.org/en/documentation/installation/)
+ Once ruby is installed, update the ruby environment with command `gem update --system`

#####Compass - an open-source CSS Authoring Framework
+ Once ruby is installed, you can install compass with command `gem install compass`