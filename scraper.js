const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


// //launch broswer
// const browser = puppeteer.launch();

// //open a new page
// const page = browser.newPage();


const sure31 = '/html/body/section/div[3]/div/div/div[2]/div[4]/div[3]/div/div/table[3]';





// async function scrapePredictionTable(xpath){

//     //launch broswer
//     const browser = await puppeteer.launch();

//     //open a new page
//     const page = await browser.newPage();

//     // Navigate to the page with the prediction table
//     await page.goto('https://www.betensured.com/categories/football/Sure-3');

//     console.log('Sure 3 page opening Done')

//     // Wait for the prediction table to load
//     await page.waitForSelector(xpath);

//     // Evaluate the XPath expression to get the table element
//   const tableElement = await page.evaluate(() => {
//         return document.evaluate(xpath,
//         document,
//         null,
//         XPathResult.FIRST_ORDERED_NODE_TYPE,
//         null
//         ).singleNodeValue;
//     }
//     );

//     console.log('path opening Done')

//     // Use cheerio to parse the HTML of the table element
//     const $ = cheerio.load(tableElement.outerHTML);

//     // Extract the data from the table using cheerio
//     const rows = $('tr').map((i, row) => {
//         return $('td', row).map((j, cell) => {
//             return $(cell).text();
//             }).get();
//     }).get();

//     console.log(rows);

//     await browser.close();

//     //login done
//     console.log('Scraping done Done')

// }





async function login (email, password) {
    //launch broswer
    const browser = await puppeteer.launch({
        headless: false
      });

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
    
    //login done
    console.log('Login Done')

    // scrapePredictionTable(sure31);

    // Navigate to the page with the prediction table
    await page.goto('https://www.betensured.com/categories/football/Sure-3');

    console.log('Sure 3 page opening Done')

    // Wait for the prediction table to load
    await page.waitForSelector('/html/body/section/div[3]/div/div/div[2]/div[4]/div[3]/div/div/table[3]',{
        timeout: 60000
      });

    // Evaluate the XPath expression to get the table element
  const tableElement = await page.evaluate(() => {
        return document.evaluate('/html/body/section/div[3]/div/div/div[2]/div[4]/div[3]/div/div/table[3]',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
        ).singleNodeValue;
    }
    );

    console.log('path opening Done')

    // Use cheerio to parse the HTML of the table element
    const $ = cheerio.load(tableElement.outerHTML);

    // Extract the data from the table using cheerio
    const rows = $('tr').map((i, row) => {
        return $('td', row).map((j, cell) => {
            return $(cell).text();
            }).get();
    }).get();

    console.log(rows);

    await browser.close();

    //login done
    console.log('Scraping done Done')

}






login('oshinbolubriantunde@gmail.com','oshinbolu1234');

// async function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function main() {
//     console.log('Start delay');
//     await sleep(15000); // delay time in milliseconds
//     console.log('End delay');
//   }
  
//   main();
  


// scrapePredictionTable(sure31);


