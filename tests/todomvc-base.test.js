jest.setTimeout(40 * 1000)

describe("Actions with TodoMVC", () => {
    let firstToDo = 'Open Windows';

    it("should have the exact text 'todos' in the h1", async() => {
        await page.goto("http://todomvc-app-for-testing.surge.sh/");
        await expect(page).toEqualText("h1", "todos")
        await expect(page).toHaveSelector('"todos"', {
                state: "attached"
            })
            //        await page.screenshot({ path: `./artifacts/screenshot-todos.png` });
    })


    it("should add new todo to the list", async() => {
        await page.click('.new-todo');
        await page.type('.new-todo', firstToDo);
        await page.keyboard.press('Enter');
        const todoText = page.textContent('.todo-list li:nth-child(1) label');
        await expect(page).toHaveText('.todo-list li:nth-child(1) label', firstToDo);
        console.log(todoText);
        // await page.screenshot({ path: `./artifacts/screenshot-todos-list.png` });
    })

    afterAll(async() => {
        await browser.close();
    })
})