const {test}= require('@playwright/test');

test('Browser Context Playwright Test', async  ({browser})=>
{
//open browser & page
const context = await browser.newContext();
 const page = await context.newPage();
await page.goto('https://sso.teachable.com/secure/9521/identity/login/password');

});

test.only('Page Playwright Test', async  ({browser,page})=>
{
//open browser & page
 
await page.goto('https://google.com');

});
