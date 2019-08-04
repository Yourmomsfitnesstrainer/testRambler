exports.config = {
  tests: './*_test.js',
  output: 'LogScreen',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      waitForAction: 2500,
      waitForNavigation: "domcontentloaded",
      waitForTiomout: 2000,
      windowSize: "1280x720",
      fullPageScreenshots: "default",
      keepBrowserState: true,
      restart: false,
    }
  },
  Mochawesome: {
    uniqueScreenshotNames: true
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "./LogScreen",
      timestamp: true
    }
  },
  name: 'autotestSushiTokyo',
  translation: 'ru-RU'
}