import { test, expect } from '@playwright/test';

test('home renders and has key sections', async ({ page }) => {
  await page.goto('/');
  // Use anchors/ids to avoid accent matching issues
  await expect(page.locator('section#about')).toBeVisible();
  await expect(page.locator('section#skills')).toBeVisible();
  await expect(page.locator('section#experience')).toBeVisible();
  await expect(page.locator('section#projects')).toBeVisible();
  // Gallery section is intentionally hidden/removed from navigation at the moment
  // so we skip asserting its presence.
  await expect(page.locator('section#contact')).toBeVisible();
});
