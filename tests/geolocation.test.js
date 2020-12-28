jest.setTimeout(60 * 1000)

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
        await page.goto('https://maps.google.com').waitForLoadState;
        await console.log(page.url())
        await page.click('input#searchboxinput.tactile-searchbox-input');
        await page.type('input#searchboxinput.tactile-searchbox-input', 'Minska ');
        await page.keyboard.press('Enter');
        // await page.waitForSelector('h1 > span:nth-child(1)');
        await expect(page).toHaveText('h1 > span:nth-child(1)', 'Minska');
        //       await page.screenshot({ path: `./artifacts/screenshot-geo.png` });
        await context.close();

    })

    afterAll(async() => {
        await browser.close();
    })

})