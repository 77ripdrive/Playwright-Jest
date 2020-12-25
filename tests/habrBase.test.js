jest.setTimeout(40 * 1000)

describe('Habrahabr', () => {
    it.skip('should be titled "Habr"', async() => {
        await page.goto('https://habr.com');
        await expect(page.title()).resolves.toBe('All posts in a row / Habr');

    });

});