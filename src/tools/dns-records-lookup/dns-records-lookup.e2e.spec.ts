import { expect, test } from '@playwright/test';

test.describe('Tool - DNS records lookup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dns-records-lookup');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('DNS records lookup - Tech Tools');
  });
});
