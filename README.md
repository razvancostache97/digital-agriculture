# digital-agriculture
🌱 Agri-Tech QA & Tools Projects

This repository contains a collection of small projects related to agricultural software testing, localization, and bug tracking.

📂 Project Structure
Project 1 – Playwright Automated Tests

Automated frontend tests using Playwright
 for Agmeo and Climavi applications.

Covers login flows, navigation, UI interactions, and language switching.

Includes exploratory flows for Dry Stress, Low Water, and Risk categories.

Run Tests:

# Install dependencies
npm install

# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

Project 2 – Agricultural Terms JSON

JSON dictionary of agricultural terms with English → Romanian translations.
Useful for localization, glossaries, and translation consistency across projects.

Example:

{
  "Wheat": "Grâu",
  "Sunflower": "Floarea-soarelui",
  "Crop rotation": "Asolament"
}

Project 3 – QGIS JSON Import

Sample project for importing JSON maps into QGIS.

Demonstrates how to integrate external data layers.

Useful for agronomic field mapping and visualization.

Project 4 – Bug Reports & QA Tickets

Documentation of critical bugs identified in Agmeo:

[Bug] Fertilizer application standard rate resets to 0

Priority: P1 (High)

Issue: Standard rate value lost when switching between operations.

[Bug] Wrong translation after switching to English

Priority: P2 (Medium)

Issue: Some UI elements remain in German.

Each ticket includes:

Steps to reproduce

Expected vs actual result

Acceptance criteria

Attachments (Playwright test & screenshots)

🛠 Tech Stack

Playwright – End-to-end testing framework

Node.js – Runtime environment for Playwright tests

JSON – Data structure for translations & QGIS imports

QGIS – GIS software for spatial data visualization
