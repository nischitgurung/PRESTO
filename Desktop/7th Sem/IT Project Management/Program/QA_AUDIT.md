# QA Audit Log for XYZ Restro Website

This document outlines the Quality Assurance checklist for the static restaurant website. Each item should be tested to ensure the website meets quality standards.

**Tester:** __________________
**Date:** __________________

---

### 1. Content Verification

| Test Case ID | Description | Status (Pass/Fail) | Notes |
| :--- | :--- | :--- | :--- |
| CON-01 | Verify the restaurant name is "XYZ Restro" in the page title. | | |
| CON-02 | Verify the restaurant name is "XYZ Restro" in the main header. | | |
| CON-03 | Check all navigation links ("Home", "Specials", "Menu", "Location") for spelling errors. | | |
| CON-04 | Review all text content on the page for typos and grammatical errors. | | |
| CON-05 | Verify the prices for all menu items are correct and displayed clearly. | | |
| CON-06 | Verify the descriptions for all menu items are accurate. | | |
| CON-07 | Check the footer for the correct copyright year (2025) and text. | | |

---

### 2. UI & Visuals

| Test Case ID | Description | Status (Pass/Fail) | Notes |
| :--- | :--- | :--- | :--- |
| UI-01 | Verify the website uses the specified blue and green color theme consistently. | | |
| UI-02 | Check that all placeholder images for menu items load correctly. | | |
| UI-03 | Ensure fonts are loaded correctly and are consistent with the design. | | |
| UI-04 | Verify that menu items have a card-like appearance with a box-shadow. | | |
| UI-05 | Check for any visual glitches, alignment issues, or overlapping elements. | | |
| UI-06 | Confirm hover effects on menu items and navigation links are working. | | |

---

### 3. Functionality

| Test Case ID | Description | Status (Pass/Fail) | Notes |
| :--- | :--- | :--- | :--- |
| FUNC-01 | Click each navigation link and verify it scrolls to the correct section of the page. | | |
| FUNC-02 | Verify the embedded Google Map in the "Location" section loads and is interactive. | | |
| FUNC-03 | Confirm the map displays the correct location (Pokhara, Nepal). | | |

---

### 4. Responsiveness

| Test Case ID | Description | Status (Pass/Fail) | Notes |
| :--- | :--- | :--- | :--- |
| RESP-01 | **Desktop (1920px):** Verify the layout is correct and all elements are properly aligned. | | |
| RESP-02 | **Tablet (768px):** Verify the navigation collapses correctly and the menu grid adjusts. | | |
| RESP-03 | **Mobile (375px):** Verify the site is readable and navigable without horizontal scrolling. | | |
| RESP-04 | Check that images resize correctly and do not distort the layout on any device size. | | |

---

### 5. Accessibility (A11y)

| Test Case ID | Description | Status (Pass/Fail) | Notes |
| :--- | :--- | :--- | :--- |
| A11Y-01 | Verify all `<img>` tags have descriptive `alt` attributes. | | |
| A11Y-02 | Ensure the HTML structure is semantic (e.g., using `<header>`, `<nav>`, `<main>`, `<section>`). | | |
| A11Y-03 | Check for sufficient color contrast between text and background. | | |

---

### 6. Browser Compatibility

| Test Case ID | Browser | Status (Pass/Fail) | Notes |
| :--- | :--- | :--- | :--- |
| CROSS-01 | Google Chrome (Latest) | | |
| CROSS-02 | Mozilla Firefox (Latest) | | |
| CROSS-03 | Microsoft Edge (Latest) | | |
| CROSS-04 | Safari (Latest) | | |
