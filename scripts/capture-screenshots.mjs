import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const siteUrl = process.env.SITE_URL ?? "http://localhost:6005/";
const outputDir = "docs/screenshots";

const targets = [
  {
    name: "home-desktop",
    viewport: { width: 1440, height: 1200 },
    fullPage: true,
  },
  {
    name: "home-mobile",
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    fullPage: true,
  },
];

async function preparePage(page) {
  await page.goto(siteUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#hero-title");

  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = page.viewportSize()?.height ?? 900;

  for (let y = 0; y <= pageHeight; y += viewportHeight * 0.75) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(120);
  }

  await page.evaluate(async () => {
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => element.classList.add("is-visible"));

    await document.fonts?.ready;

    await Promise.all(
      Array.from(document.images).map(async (image) => {
        if (image.complete) {
          return;
        }

        try {
          await image.decode();
        } catch {
          await new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          });
        }
      })
    );

    window.scrollTo(0, 0);
  });

  await page.waitForTimeout(500);
}

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
});

try {
  for (const target of targets) {
    const context = await browser.newContext({
      viewport: target.viewport,
      deviceScaleFactor: target.deviceScaleFactor ?? 1,
    });

    const page = await context.newPage();
    await preparePage(page);

    await page.screenshot({
      path: `${outputDir}/${target.name}.jpg`,
      type: "jpeg",
      quality: 86,
      fullPage: target.fullPage,
    });

    await context.close();
  }
} finally {
  await browser.close();
}
