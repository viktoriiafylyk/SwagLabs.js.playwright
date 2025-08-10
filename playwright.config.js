import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',               // Папка, де лежать твої тести
    timeout: 10 * 1000,               // Максимальний час на один тест (30 секунд)
    expect: {
        timeout: 5000                   // Час очікування для expect (наприклад, чекати елемент 5 сек)
    },
    fullyParallel: true,              // Запуск тестів паралельно
    forbidOnly: !!process.env.CI,    // Заборонити test.only у CI
    retries: process.env.CI ? 2 : 0, // У CI перезапускати фейлові тести 2 рази
    workers: process.env.CI ? 1 : undefined,  // В CI запускати 1 воркер (щоб не було паралелізму)
    reporter: [['html', {outputFolder: 'playwright-report', open: 'never'}]], // Звіт у html
    use: {
        trace: 'on-first-retry',
        headless: true,                 // Запуск у headless режимі (без UI)
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',    // Запис відео тільки при провалі тесту
        screenshot: 'only-on-failure', // Скриншот при провалі тесту
        baseURL: 'https://www.saucedemo.com'  // Базова URL для зручності у тестах
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                headless: true,
            },
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                headless: true,
            },
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                headless: true,
            },
        }
    ],
});

