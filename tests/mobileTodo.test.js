const { webkit, devices } = require('playwright');
const iPhone11Pro = devices['iPhone 11 Pro'];

describe('Mobile emulation', () => {
    it('should see "todos" in mobile', async() => {
        const browser = await webkit.launch({
            headless: true,
        });
        const context = await browser.newContext({
            ...iPhone11Pro,
        });
        const page = await context.newPage();
        await page.goto("http://todomvc-app-for-testing.surge.sh/");
        await expect(page).toEqualText("h1", "todos")
        await expect(page).toHaveSelector('"todos"', {
                state: "attached"
            })
            //     await page.screenshot({ path: './artifacts/iphone11pro.png' });
        await context.close();
    })

    afterAll(async() => {
        await browser.close();

    })

});