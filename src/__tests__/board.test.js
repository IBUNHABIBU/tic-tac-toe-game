
const puppeteer = require('puppeteer');
import Board from '../modules/board';
test('should click around', async () => {
  const board = new Board();
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto('file:///C:/Users/Salim/Desktop/Projects/Javascript/tictactoe/dist/index.html');
  await page.click('#input');
  await page.type('#input', 'Hassan');
  await page.click('#submit');
  const cell = await page.$('.cell');
  await cell.click();
  await cell.click();
},90000);

test('testing the board', () => {

})