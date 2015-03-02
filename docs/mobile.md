#Building Mobile Applications

###Setup Cordova project
`grunt setupMobile`
  1. Creates the mobile directory where mobile app files will be stored
  2. Creates a cordova project based on the project name and package specified in the package.json
  3. Adds base set of plugins the the cordova application.
  4. Replaces the contents of www/ with your client project files
###Add Platforms that will be used
`grunt addAndroid`
`grunt addIos`

###Build the mobile apps
`grunt buildMobile`
  1. cleans the www/ folder and replaces with the updated project files
  2. builds the application for each of the added platforms

### Deploy to Emulator
Android - `grunt emulateAndroid` (Note: Must create an AVD in order to emulate application)
IOS - Can be done by opening up Xcode. Go to the [platform guide](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide) for more info

### Deploy to Device
Android - `grunt runAndroid` (Note: device must be enable for development and connected to computer)
IOS - Can be done by joining the developer program and using xcode. More info in the [platform guide](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)