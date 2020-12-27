jest.setTimeout(40 * 1000)

describe("Actions with Geolocation", () => {

    it("should open a map from Latvia", async() => {
        const context = await browser.newContext({
            geolocation: {
                latitude: 56.963461909404366,
                longitude: 24.125699606643977,
            },
            permissions: ['geolocation'],
            locale: 'lv-LV',
            colorScheme: 'dark',
        });
        const page = await context.newPage();
        await page.goto('https://www.google.by/maps');
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `./artifacts/screenshot-geo.png` });
    })

    afterAll(async() => {
        await browser.close();
    })
})