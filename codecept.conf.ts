export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      keepCookies: true,
      restart: false,
      waitForTimeout: 80000,
      desiredCapabilities: {
        app: '/Users/it062305/dev/learning/app-release.apk',
        platform: 'Android',
        device: 'emulator-5554',
        appPackage:"com.carpooling",
        chromedriverpath: "/Users/it062305/dev/learning/chromedriver ",
        automationName: 'UIAutomator2',
        smartWait: 80000,
        unicodeKeyboard: true,
        resetKeyboard: true,

      },
      chromeOptions: {
        w3c: false,
      },
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'mobileAutomation'
}