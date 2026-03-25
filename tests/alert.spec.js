import{test,expect}from'@playwright/test';

test.skip('alert test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    expect (dialog.accept());

    });
    await page.locator('//button[@id="alertBtn"]').click();

    await page.waitForTimeout(2000);
});



test.skip('confirm alert test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    expect (dialog.accept());

    });
    await page.locator('//button[@id="confirmBtn"]').click();

    

});

test.only('prompt alert test',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    // expect (dialog.accept('Harry Potter'));
    await dialog.accept('Hii Micca');

    });
    await page.locator('//button[@id="promptBtn"]').click();

    

});