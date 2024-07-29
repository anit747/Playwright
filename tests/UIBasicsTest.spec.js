const {test,expect}= require('@playwright/test');


test('Browser Context Playwright Test', async  ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const username = page.locator('input#username');
await username.fill("anitrai747@gmail.com");
await page.locator('input#password').fill("learning");
await page.locator("[type='submit']").click(); 
let extractMess = await page.locator("[style*='display: block;']").textContent();
console.log(extractMess);
 await expect(page.locator("[style*='display: block;']")).toContainText('Incorrect'); 

});

test('UI Controls',async ({page})=>
    {

 
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const username = page.locator('input#username');
        const documenLink = page.locator("[href*='documents-request']")
        await username.fill("anitrai747@gmail.com");
        await page.locator('input#password').fill("learning");

        const dropdown = page.locator("select.form-control");
        await dropdown.selectOption("consult");
        await page.locator(".radiotextsty").last().click();
        await page.locator("#okayBtn").click();
        await expect(page.locator(".radiotextsty").last()).toBeChecked();
        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect (await page.locator("#terms").isChecked()).toBeFalsy();
        await expect (documentLink).toHaveAttribute("class","blinkingText")
 


});



test.only('Child Window Handle',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documenLink = page.locator("[href*='documents-request']");

    const [newPage]= Promise.all(
    [context.waitForEvent('page') ,//listen for any new page . promise: penidng , rejected, fullfilled 

    documenLink.click(),
]);

const  text  =await  newPage.locator(".red").textContent();
console.log(text);
})