const {test,expect}= require('@playwright/test');

 


test.only('RahulShetty Page Automation Test', async  ({page})=>
{
 
 
//  const username = page.locator('#userEmail');
//  const signin = page.locator("#login");
 
await page.goto("https://rahulshettyacademy.com/client");
 
await page.locator('#userEmail').fill("anitrai747@gmail.com");
await page.locator('#userPassword').fill("Iamanitrai@747");
await page.locator("#login").click(); 

await page.waitForLoadState("networkidle");
let extractMess = await page.locator(".card-body b").allTextContents();
console.log(extractMess);
  

});