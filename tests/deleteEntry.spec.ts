import { test, expect } from '@playwright/test';

test.describe('Delete Knowledge Entry', () => {
  test('should delete the first entry successfully (desktop or mobile)', async ({ page, isMobile }) => {
    await page.goto('http://localhost:5173'); // navigate to dashboard

    
    await expect(page.getByRole('heading', { name: 'Knowledge Entries' })).toBeVisible(); // Wait for entries to load

    // Check if mobile or desktop
    const viewport = await page.viewportSize();
    const isDesktop = viewport && viewport.width >= 768;

    console.log('Running in:', isDesktop ? 'Desktop' : 'Mobile');

    if (isDesktop) {
      // For desktop check for table table 
      const lastRow = page.locator('table tbody tr').last();
      await expect(lastRow).toBeVisible();

      // Click the delete (trash) icon inside the last row
      const deleteButton = lastRow.locator('svg[class*="FiTrash2"]').first();
      await deleteButton.click();
    } else {
      // For mobile — list view
      const lastItem = page.locator('.list .list-item').last();
      await expect(lastItem).toBeVisible();

      const deleteButton = lastItem.locator('svg[class*="FiTrash2"]').first();
      await deleteButton.click();
    }

    // Confirm the delete dialog
    const confirmButton = page.getByRole('button', { name: /confirm/i });
    if (await confirmButton.isVisible()) {
      await confirmButton.click();
    }

    // Expect success toast or updated UI
    await page.waitForTimeout(500);
    await expect(page.locator('text=Entry deleted successfully')).toBeVisible();
  });
});
