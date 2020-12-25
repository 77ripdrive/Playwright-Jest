const config = require("../data/config");

class MainPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(config.webBaseUrl)
    }

}
module.exports = { MainPage };