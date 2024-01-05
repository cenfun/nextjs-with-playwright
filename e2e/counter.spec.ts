import { test, expect } from './fixtures';

test('should count by click', async ({ page }) => {
    await page.goto('/');

    await page.getByText('Click me').click();
    await expect(page.locator('.count')).toContainText('You clicked 1 times');

    await page.getByText('Click me').click();
    await expect(page.locator('.count')).toContainText('You clicked 2 times');
});
