import { test, expect } from './fixtures';

test('should navigate to the about page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
});
