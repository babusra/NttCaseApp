This document contains info about how to build debug and rum the project easily.

First of all

# necessary things

Node v16.13.1
Yarn v.1.22.19 (package manager)
Android Studio SDK v.32
xCode v.12

# when you run the project

'cd ios && pod install' and 'yarn'

# run expo

'npx start expo'

# run ios

'yarn ios' || 'npx react-native run-ios' || open to NttCaseApp.xcodeproj with xCode and Clean Build Folder then run

# run android

'yarn android' || 'npx react-native run-android'

# to start project

'yarn start'

# when new package added

'cd ios && pod install' and 'yarn'

# APK build

'cd android && ./gradlew clean && ./gradlew assembleRelease && open android/app/build/outputs/apk/release'
