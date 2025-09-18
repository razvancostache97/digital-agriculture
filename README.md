🌱 Agri-Tech QA & Tools Projects

This repository contains a collection of test automation scripts, translation resources, GIS imports, and bug reports developed for agricultural applications such as Agmeo and Climavi.

📂 Repository Structure

Project 1 – Playwright Automated Tests

Project 2 – Agricultural Terms JSON

Project 3 – QGIS JSON Import

Project 4 – Bug Reports & QA Tickets

🧪 Project 1 – Playwright Automated Tests
🔹 Overview

End-to-end tests written in Playwright
 for:

Agmeo login & account settings

Climavi login

Navigation between pages (e.g., Dry Stress, Low Water, Risk levels)

Language switching (German → English)

🔹 How to Run Tests
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run in headed mode (for debugging)
npx playwright test --headed

📘 Project 2 – Agricultural Terms JSON
🔹 Overview

A bilingual English → Romanian dictionary of agricultural terms.
Useful for:

Localization (UI translation consistency)

Building glossaries for agronomic projects

🔹 Example
{
  "Wheat": "Grâu",
  "Sunflower": "Floarea-soarelui",
  "Crop rotation": "Asolament"
}

🗺️ Project 3 – QGIS JSON Import
🔹 Overview

Demonstrates importing JSON maps into QGIS for:

Visualizing agricultural fields

Adding spatial data layers

Supporting precision farming analysis

🐞 Project 4 – Bug Reports & QA Tickets
🔹 Ticket 1 – Fertilizer Application Reset

Title: [Bug] Fertilizer application standard rate resets to 0

Priority: P1 – High

Issue: Standard rate field resets when switching operations.

Impact: Data loss during fertilizer planning.

🔹 Ticket 2 – Wrong Translation after Language Switch

Title: [Bug] Wrong translation displayed after switching language

Priority: P2 – Medium

Issue: Some UI labels remain in German.

Impact: Confusing experience for English users.

Each ticket includes:

Steps to reproduce

Expected vs actual behavior

Acceptance criteria

Attachments (screenshots & Playwright tests)

🛠 Tech Stack

Playwright – End-to-end testing

Node.js – Runtime environment

JSON – Data exchange format

QGIS – GIS mapping software
