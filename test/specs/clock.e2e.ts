import ClockPage from '../pageobjects/clock.page';

describe('Clock tests', () => {

    it('should show current time in clock app', async () => {
        await ClockPage.openApp();
        const text = await ClockPage.getClockText();

        expect(text.replace(/AM|PM/g, '').trim())
            .toMatch(/^\d{1,2}:\d{2}$/);
    });

    it('should add New York clock', async () => {
        await ClockPage.openApp();
        
        await ClockPage.addCity('New York');
        const displayed = await ClockPage.isCityDisplayed('New York');
        await expect(displayed).toBe(true);

        await ClockPage.addCity('New York');
        const removed = await ClockPage.cityNotDisplayed('New York');
        await expect(removed).toBe(true);
    });

});