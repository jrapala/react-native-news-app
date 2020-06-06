# Juliette's React Native Project Template

A template for developing cross-platform React Native apps using TypeScript.

## Getting Started with iOS Development (macOS Users)

---

### Install Watchman

`brew install watchman`

### Install Xcode and iOS Simulators

Install Xcode through the Mac App Store (version 9.4 or newer). Be sure that you have simulators installed on your system as well. To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

### Opening Stand Up in Xcode

The Xcode project to use is the `ios/StandUp.xcworkspace` directory.

### Install Ruby

This project requires Ruby 2.7.0. It can be installed with `rbenv`:

`brew install rbenv`

Then run `rbenv init` and follow the instructions to finish installation.

To install 2.7.0: `rbenv install 2.7.0`

To use 2.7.0: `rbenv local 2.7.0` or `rbenv global 2.7.0` (to override global version), followed by `rbenv rehash`

### Install Packager

`gem install bundler`

### Install CocoaPods

`bundle install`

## Getting Started with Android Development (macOS Users)

---

### Install Watchman

`brew install watchman`

### Install the Java Development Kit

`brew cask install adoptopenjdk/openjdk/adoptopenjdk8`

If you have already installed JDK on your system, make sure it is JDK 8 or newer.

### Install Android Studio

Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

-   Android SDK
-   Android SDK Platform
-   Performance (Intel ® HAXM) (See here for AMD)
-   Android Virtual Device

### Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

-   Android SDK Platform 28
-   Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### Configure the ANDROID_HOME Environment Variable

If using Bash, add the following to your `.bash_profile` or `.bashrc` config file and load with config with `source`:

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

## Getting Started with Android Development (Windows Users)

---

### Install Node, Python2, and the Java Development Kit

These can be installed via Chocolatey:

```
choco install -y nodejs.install python2 jdk8
```

### Install Android Studio

Follow the steps outlined in the Android Studio for macOS setup.

### Install the Android SDK

Follow the steps outlined in the Android SDK for macOS setup.

### Configure the ANDROID_HOME Environment Variable

Create a new `ANDROID_HOME` environmental variable in `System and Security` that points to the path to your Android SDK.

An example:

```
C:\Users\myname\AppData\Local\Android\Sdk
```

The SDK is installed, by default, at the following location:

```
c:\Android\tools\bin
```

You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

### Add Platform Tools to Path

Navigate to edit the `Path` environmental variable in `System and Security`. Click New and add the path to platform-tools to the list.

The default location for this folder is:

```
C:\Android\tools\bin\platform-tools
```

## Development

---

### Install Dependencies

Run `npm i` to install project dependencies.

### Running the iOS Application (macOS Users)

To run the app on a simulator:

```
npx react-native run-ios
```

To run the app on a device, plug in your device and add a `--device` flag to the command above.

If you have multiple devices connected, run `instruments -s devices` to see a list of your connected devices and add a `--device <device-name>` flag to run the app on the specified device.

To run the app on a different simulator, add a flag such as `--simulator="iPhone 5s"`. The `xcrun simctl list devices` command will let you see all of your available simulators.

You can also run the app directly from within Xcode.

If your bundler did not start, run `npx react-native start` in a new terminal window.

### Running the Android Application (macOS and Windows Users)

Plug in an Android device or open up a virtual device/emulator. To start up a virtual device, open Android Studio and open the `AVD Manager`. You may need to first create a virtual device if none are listed. Clicking the green triangle will launch the device.

You may also launch an emulator from the command line. `emulator -list-avds` will list all of your emulators. To launch a listed emulator, run `emulator -avd <avd-name>`.

Once you have a device available, you can run the following to start the app:

```
npx react-native run-android
```

If your bundler did not start, run `npx react-native start` in a new terminal window.

You can also run the app directly from within Android Studio by selecting "Run".

### Accessing the Developer Menu

The developer menu can be accessed in debug builds. Instructions for simulators/emulators are below.

If using a physical device, shake the device to view the menu.

#### iOS (macOS Users)

`⌘D` or Hardware > Shake Gesture

#### Android (macOS Users)

`⌘M` or `adb shell input keyevent 82`

#### Android (Windows Users)

`Ctrl+M` or `adb shell input keyevent 82`

## Adding Dependencies

---

To install a new dependency, run `npm i package-name` in the root of the project. Then run `npm run podInstall` to
add it to the iOS project (instead of a standard `pod install`). No further steps required for Android.

## Troubleshooting

---

If you run into errors launching your app, here are a few options to try to get you back up and running.

### Cross-Platform

#### Dependency Cleanup

```
rm -rf node_modules
npm i
```

Running `npm cache clean -f` before reinstalling will clean your npm cache.

#### Watchman Cleanup

```
watchman watch-del-all
```

#### Metro Bundler Cleanup

```
rm -rf $TMPDIR/metro-*
```

You can also reset the cache while starting up the bundler with `npx react-native start --reset-cache`

### iOS

#### Dependency Cleanup

```
rm -rf ios/Pods/
npm run podInstall
```

Running `pod cache clean --all` before reinstalling will clear your pod cache.

#### Xcode Cleanup

To clean your Xcode project, open Xcode and try Product > Clean.

Removing your Xcode derived data may help as well:

`rm -rf ~/Library/Developer/Xcode/DerivedData/*`

If you have recently updated XCode, you may need to reset your preferences:

`defaults delete com.apple.dt.Xcode`

### Android

#### Gradle Cleanup

To clean your Gradle cache:

`cd android && ./gradlew clean && cd ..`

This can also be accomplished by selecting Build > Clean Project in Android Studio.

File > Invalidate Caches > Restart will help if you have recently added or removed Android build files.
