const { webkit, devices } = require('playwright');
const iPhone11 = devices['iPhone 11 Pro'];
jest.setTimeout(40 * 1000)

describe('Mobile emulation', () => {
    it('should see "todos" in mobile', async() => {
        const browser = await webkit.launch({
            headless: true,
        });
        const context = await browser.newContext({
            ...iPhone11,
        });
        const page = await context.newPage();
        await page.goto("http://todomvc-app-for-testing.surge.sh/");
        await expect(page).toEqualText("h1", "todos")
        await expect(page).toHaveSelector('"todos"', { state: "attached" })
            //       await page.screenshot({ path: './artifacts/iphone11pro.png' });
        await context.close();
        await browser.close();
    })

});