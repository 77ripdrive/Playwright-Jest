const config = require("../data/config");

class MainPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(config.webBaseUrl)
    }

    async checkTextField(locator, text) {
        await expect(page).toEqualText(locator, text)
    }

    async fillText(locator, text, pressKey) {
        await page.type(locator, text);
        await page.keyboard.press(pressKey);
    }

}
module.exports = { MainPage };