const {test,expect}= require('@playwright/test');

test('Browser Context Playwright Test', async  ({browser})=>
{
//open browser & page
const context = await browser.newContext();
 const page = await context.newPage();
 
 const username = page.locator('input#username');
 const signin = page.locator("[type='submit']");
const cartTitles = page.locator(".card-title a");
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")

//CSS , XPATH

await username.fill("anitrai747@gmail.com");
await page.locator('input#password').fill("learning");
await page.locator("[type='submit']").click(); 
let extractMess = await page.locator("[style*='display: block;']").textContent();
console.log(extractMess);
 await expect(page.locator("[style*='display: block;']")).toContainText('Incorrect'); 
 await username.fill("");
 await username.fill("rahulshettyacademy");  
 await signin.click();
 let productTitle = await cartTitles.nth(0).textContent();
console.log(productTitle);

const allTitles = await cartTitles.allTextContents();
console.log(allTitles);

 //fill method for type 
//

});



test('Page Playwright Test', async  ({browser,page})=>
{
//open browser & page
 
await page.goto('https://google.com');
console.log(await page.title());
await expect(page).toHaveTitle("Google")
});


test.only('RahulShetty Page Automation Test', async  ({browser})=>
{
//open browser & page
const context = await browser.newContext();
 const page = await context.newPage();
 
 const username = page.locator('#userEmail');
 const signin = page.locator("#login");
 
await page.goto('https://rahulshettyacademy.com/client/auth/login');
 
 

 

await username.fill("anitrai747@gmail.com");
await page.locator('#userPassword').fill("Iamanitrai@747");
await signin.click(); 
let extractMess = await page.locator("[style*='display: block;']").textContent();
console.log(extractMess);
  

});