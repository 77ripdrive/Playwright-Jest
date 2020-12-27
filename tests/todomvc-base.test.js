jest.setTimeout(40 * 1000)

describe("Actions with TodoMVC", () => {

    it("should have the exact text 'todos' in the h1", async() => {
        await page.goto("http://todomvc-app-for-testing.surge.sh/");
        await expect(page).toEqualText("h1", "todos")
        await expect(page).toHaveSelector('"todos"', {
                state: "attached"
            })
            //       await page.screenshot({ path: `./artifacts/screenshot-todos.png` });
    })

    it("should add new todo to the list", async() => {
        await page.type('.new-todo', 'Open Windows ');
        await page.keyboard.press('Enter');
        await expect(page).toHaveText('.todo-list li:nth-child(1) label', 'Open Windows');
        //       await page.screenshot({ path: `./artifacts/screenshot-todos-list.png` });
    })

    afterAll(async() => {
        await browser.close();
    })
})