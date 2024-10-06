const {test,expect}= require('@playwright/test');

 test.beforeAll(async({browser})=>{

  const context =   await browser.newContext();

  const page = await  context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
 
    await page.locator('#userEmail').fill("anitrai747@gmail.com");
    await page.locator('#userPassword').fill("Iamanitrai@747");
    await page.locator("#login").click(); 
    await context.storageState({path:'state.json'});



 })


test('RahulShetty Page Automation Test', async  ({page})=>
{
 
 
//  const username = page.locator('#userEmail');
//  const signin = page.locator("#login");
 
 

// await page.waitForLoadState("networkidle");
await page.locator(".card-body b").first().waitFor();
let extractMess = await page.locator(".card-body b").allTextContents();
console.log(extractMess);
  

});