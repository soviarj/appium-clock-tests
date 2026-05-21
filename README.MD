# 📱 Android Clock App UI Tests (Appium + WebdriverIO)

This project contains automated UI tests for the Android Clock application using **Appium** and **WebdriverIO (WDIO)** with TypeScript.

The tests cover basic functionality such as:
- Verifying current time display format
- Adding a world clock (e.g., New York)
- Removing a city from the clock list

---

## 📦 Tech Stack

- Node.js
- TypeScript
- WebdriverIO
- Appium
- Android Emulator / Real Android Device
- Mocha test framework

---

## ✅ Prerequisites

Before running the tests, make sure you have the following installed:

### 1. Node.js
- Version: **18+ recommended**
- Download: https://nodejs.org/

### 2. Java JDK
- Required for Appium + Android tools
- Recommended: **JDK 11 or 17**

### 3. Android Studio
- Install Android Studio: https://developer.android.com/studio
- Set up:
  - Android SDK
  - Android Emulator OR connect a real device

### 4. Appium Server
Install globally:

```bash
npm install -g appium
```

Start Appium server:

appium

### 5. Appium Driver (UiAutomator2)

appium driver install uiautomator2

### 6. Environment Variables

Make sure these are set:

- JAVA_HOME
- ANDROID_HOME (or ANDROID_SDK_ROOT)
- Android platform-tools added to PATH

### 7. Installation

Clone the repository:

git clone https://github.com/your-username/android-clock-tests.git
cd android-clock-tests

Install dependencies:

npm install

🚀 Running Tests

Start Appium server (in separate terminal):
appium

Run all tests:
npx wdio run wdio.conf.ts

Run specific test file:
npx wdio run wdio.conf.ts --spec test/specs/clock.e2e.ts

🧪 Test Cases

1. Verify current time format
Opens Clock app
Reads current time
Validates format HH:MM

2. Add and remove a world clock (New York)
Opens Clock app
Adds "New York" to world clock list
Verifies it is displayed
Removes it (or toggles state)
Verifies it is no longer displayed

📁 Project Structure

test/
 ├── specs/
 │    └── clock.e2e.ts
 ├── pageobjects/
 │    └── clock.page.ts

⚠️ Notes / Known Issues

Android UI can be flaky depending on emulator/device performance
Some elements may require longer waits (waitForDisplayed)
Tests are sensitive to UI changes in the Clock app (Google updates)

🛠 Troubleshooting

Appium cannot find elements
Ensure correct resource-id or UI selector
Increase timeout values
Add waitForDisplayed() before interaction

Emulator issues
Restart emulator
Clear app data
Reinstall app if needed