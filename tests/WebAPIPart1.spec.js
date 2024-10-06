const {test,expect,request}= require('@playwright/test');
const loginPayload = {userEmail: "anitrai747@gmail.com", userPassword: "Iamanitrai@747"};
let token;
test.beforeAll(async()=>
  {


const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: loginPayload
    }) //200,201


expect( loginResponse.ok() ).toBeTruthy();
const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;
console.log(token);

});


test.beforeEach(()=>{


});

test('Client App Login', async  ({page})=>
    {
     
     page.addInitScript(value => {

      window.localStorage.setItem("token", value);
     }, token);
     const email = "";
     const productName = "ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/");
    const products = page.locator(".card-body");

     
    let extractMess = await page.locator(".card-body b").allTextContents();
    console.log(extractMess);
    const count = await products.count(); 
    
    for(let i =0;i<count;i++){
    if(await products.nth(i).locator("b").textContent()=== productName)
        {
            //add to cart
            
           await products.nth(i).locator("text= Add To Cart").click();
             break;
    
    }
    
    }
    
    await page.locator("[routerlink*='cart']").click(); 
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy(); 
    
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind"); //to type sequentially 
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i =0;i<optionsCount;i++)
    {
      const text = await dropdown.locator("button").nth(i).textContent();
      if(text==" India")
        {
            await dropdown.locator("button").nth(i).click();
            break; 
    
      }
    
    }
    // await page.locator(".field [type = 'text']").fill("4542 9931 9292 2293");
    await page.locator("[class='field small'] [class='input txt']").fill("456");
    await page.locator("[class='field'] [class='input txt']").fill("Anit");
    await expect(page.locator(".user__name [type='text']").first()).toHaveText("anitrai747@gmail.com");
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);
    
    await page.locator("button[routerlink ='/dashboard/myorders']").first().click();
    await page.locator("tbody").waitFor();
    const OrdersCount = await page.locator("tbody tr");
    
    for(let i =0;i<await OrdersCount.count();i++){
    
       const rowOrderid = await  OrdersCount.nth(i).locator("th").textContent();
       if(orderID.includes(rowOrderid)){
       await OrdersCount.nth(i).locator("button").first().click();
       break;
    
       }
    }
    
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderID.includes(orderIdDetails)).toBeTruthy();
     });