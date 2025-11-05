describe('Apidemos - Text Entry Dialog', () => {
    it('should fill in name and password', async () => {

        const appMenu = await $('~App'); 
        await appMenu.click();

        const alertDialogsMenu = await $('~Alert Dialogs');
        await alertDialogsMenu.click();
        
        const textEntryDialogMenu = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("Text Entry"))');
        await textEntryDialogMenu.click();

        
        const nameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        await nameField.setValue('Indah');

    
        const passwordField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
        await passwordField.setValue('12345');
        
        const okButton = await $('//android.widget.Button[@resource-id="android:id/button1"]');
        await okButton.click();

    });
});
