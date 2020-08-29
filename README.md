# SDGs Mobile App

A simple React Native app for accessing sustainable development goals (SDGs) data as defined by the United Nations (https://sdgs.un.org/goals)

## Project setup

Setup Environment

https://reactnative.dev/docs/environment-setup

The following tools are required.

### Required tools

| Tools                                                                                          | Version  | Extra info                    |
| ---------------------------------------------------------------------------------------------- | -------- | ----------------------------- |
| XCode                                                                                          | 10.1+    |                               |
| Android Studio                                                                                 | 3.5.0+   |                               |
| Visual Studio Code                                                                             | 1.32.3+  |                               |
| [Node](https://nodejs.org/en/)                                                                 | 10.15.3+ |                               |
| CocoaPods                                                                                      | 1.7.2+   |                               |
| Ruby                                                                                           | 2.6.1    |                               |
| Detox                                                                                           | 17.4.4    |                               |

### Running on iOS locally

```bash
 # Install required npm dependencies
 npm install
 # Install pods
 cd ios
 pod install
 # go back to the root folder
 # run ios
 cd ..
 npm run ios
```

### Running on Android Locally

```bash
npm install
# connect your android device then run android
npm run android

# if you get build errors try clean and rebuild
pushd android & ./gradlew clean & popd
npm run android
```

### Run Linter

```bash
npm install
npm run validate
```


## Testing

### Unit test

```bash
npm install
npm run test
```

### E2E test (IOS only)

#### Setup Detox 

Environment setup

https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#step-1-environment-setup

Install AppleSimulatorUtils

https://github.com/wix/AppleSimulatorUtils

```bash

npm install
detox build --configuration ios
detox test --configuration ios
```
