import { Builder, By, Key, until } from 'selenium-webdriver';

describe('selenium test', () => {
    it('open test', (async () => {
        let driver = await new Builder().forBrowser('internet explorer').build();
        await driver.manage().window().maximize();
        // プロトコルがfileだとダメだった。
        await driver.get('http://127.0.0.1:8081/src/sample.html');
        const title = await driver.getTitle();
        expect(title).toBe('サンプルのHTML');
        const test1 = await driver.findElement(By.id('test1')).getText();
        expect(test1).toBe('テキスト');
    }),600000);
});
