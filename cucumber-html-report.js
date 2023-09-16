const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "116.xxx",
    },
    device: "Local test machine",
    platform: {
      name: "macOS",
      version: "13.5.2",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Sep 16th 2023, 02:31 PM EST" },
      { label: "Execution End Time", value: "Sep 16th 2023, 02:31 PM EST" },
    ],
  },
});