class ClockPage {

        // TABS
    get clockTab() {
        return $('android=new UiSelector().description("Clock")');
    }

    get clockText() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/digital_clock")');
    }

    private get alarmTab() {
        return $('android=new UiSelector().description("Alarm")');
    }

    // BUTTONS
    get addCityButton() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/fab")');
    }

    // SEARCH
    get searchInput() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/open_search_view_edit_text")');
    }

    // FIRST RESULT IN SEARCH LIST
    get firstCityResult() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/city_name")');
    }

    get currentTime() {
        return $('android=new UiSelector().resourceId("com.google.android.deskclock:id/digital_clock")');
    }

    async getClockText() {
        return (await this.clockText.getText()).trim();
    }

    async getDeviceTimeDate(): Promise<Date> {
        return new Date(await driver.getDeviceTime());
    }

    async openAlarmTab() {
        await this.alarmTab.waitForDisplayed({ timeout: 10000 });
        await this.alarmTab.click();
    }

    async openApp() {
        await driver.activateApp('com.google.android.deskclock');
    }

    async isCurrentTimeDisplayed() {

        await this.currentTime.waitForDisplayed({
            timeout: 10000
        });

        const text = await this.currentTime.getText();

        return text.length > 0;
    }

    async openClockTab() {

        await this.clockTab.waitForDisplayed({ timeout: 10000 });
        await this.clockTab.click();
    }

    async addCity(city: string) {

        await this.openClockTab();

        await this.addCityButton.waitForDisplayed({ timeout: 10000 });
        await this.addCityButton.click();

        await this.searchInput.waitForDisplayed({ timeout: 10000 });
        await this.searchInput.setValue(city);

        await driver.pressKeyCode(66);

        await this.firstCityResult.waitForDisplayed({ timeout: 10000 });

        await this.firstCityResult.click();
    }

    async isCityDisplayed(city: string) {

        const cityElement = $(
            `android=new UiSelector().textContains("${city}")`
        );

        await cityElement.waitForDisplayed({ timeout: 10000 });

        return await cityElement.isDisplayed();
    }

    async cityNotDisplayed(city: string) {

        const cityElement = $(
            `android=new UiSelector().textContains("${city}")`
        );

        const result = await cityElement.waitForDisplayed({
            reverse: true,
            timeout: 10000
        });
        
        return result;
    }

}

export default new ClockPage();