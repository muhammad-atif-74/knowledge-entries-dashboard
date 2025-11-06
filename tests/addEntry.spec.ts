import { test, expect } from '@playwright/test';

test.describe('Add New Entry Flow', () => {
    test('should fill form, save entry, and navigate to dashboard', async ({ page }) => {
        await page.goto('http://localhost:5173/new'); // go to add form page

        await page.fill('#title', 'Test Knowledge Entry'); // fill out the fields
        await page.fill('#content', 'This is a simple test description for the new knowledge entry.');
        await page.fill('#createdAt', '2025-11-06');

        await page.click('button:has-text("Save")'); // click the save button

        await page.waitForURL('**/', { timeout: 5000 }); // redirect to dashboard

        // Step 5: Verify dashboard loaded
        await expect(page.getByRole('heading', { name: /Knowledge Entries/i })).toBeVisible(); // check if on the dashboard
    });
});
