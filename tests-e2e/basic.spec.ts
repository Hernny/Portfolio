import { test, expect } from '@playwright/test';

test('home renders and has key sections', async ({ page }) => {
  await page.goto('/');
  // Use anchors/ids to avoid accent matching issues
  await expect(page.locator('section#gallery')).toBeVisible();
  await expect(page.locator('section:has(h2:has-text("Certificaciones"))')).toBeVisible();
  await expect(page.locator('section:has(h2:has-text("Proyectos"))')).toBeVisible();
});
