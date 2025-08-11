# 🛠 Swag Labs Automation with Playwright (JavaScript)

This project automates end-to-end testing for the Swag Labs website [https://www.saucedemo.com/] 
using Playwright and the Page Object Model (POM) pattern.

It demonstrates best practices for structuring an automation framework, managing test data, and generating detailed reports.

## 📂 Project Structure 

```
swaglabs-playwright/
├── src/
│    ├── pages/                 # Page Object Model (POM) classes
│         ├── LoginPage.js
│         ├── InventoryPage.js
│         ├── CartPage.js
│    ├── modals/ 
│    ├── component/
│
├── utils/                 # Utilities and test data
├── fixtures/              # Optional: reusable test fixtures
├── tests/                # All test specifications
│ 
├── playwright.config.js   # Playwright configuration file
├── package.json           # Node.js project metadata
├── README.md              # Project documentation
└── .gitignore             # Ignored files for Git
```

## #️⃣ Installation

#### - Clone the repository:

`git clone https://github.com/viktoriiafylyk/SwagLabs.js.playwright.git`

`cd swaglabs-playwright`

#### - Install dependencies:

`npm install`

#### - Install Playwright browsers:

`npx playwright install`

## ▶️ Running Tests

#### - Run all tests in headless mode:

`npm test`

#### - Run tests in headed mode (browser UI visible):

`npm run test:headed`

#### - Run a specific test file:

`npx playwright test tests/login.spec.js`

#### - Run tests with a specific tag (if using tags):

`npx playwright test --grep "@smoke"`

## 📊 Viewing Reports
This project uses Playwright's built-in HTML reporter.

#### After running tests, generate and view the report:

`npm run report`

A browser window will open showing detailed test results with screenshots, videos, and execution logs.


## 🎯 Generating Code with npx playwright codegen

Playwright provides a built-in Codegen tool that automatically generates test code while you interact with a browser in real time.

#### - Start codegen for a specific site:

`npx playwright codegen https://www.saucedemo.com/`

#### - Specify browser and target language:

`npx playwright codegen --browser=chromium --target=javascript https://www.saucedemo.com/`

#### - Save recorded code to a file:

`npx playwright codegen https://www.saucedemo.com/ --output=tests/generated-login.spec.js`