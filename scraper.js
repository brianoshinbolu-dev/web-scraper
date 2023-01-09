const puppeteer = require('puppeteer');

async function login (email, password) {
    //launch broswer
    const browser = await puppeteer.launch();

    //open a new page
    const page = await browser.newPage();

    //Navigate to the login page
    await page.goto('https://www.betensured.com/login');

    //Enter Email and Password
    await page.type('#email', email);
    await page.type('#password', password);

    
    //click the login button
    await page.click('input.button')
    
    console.log('loging in')

    // Wait for the Login to complete
    await page.waitForNavigation();

    await browser.close();
    
}




login('oshinbolubriantunde@gmail.com','oshinbolu1234' )









//Close the browser
console.log('All Done')