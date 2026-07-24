# Warehouse Operations Toolkit

A web-based toolkit for generating and printing warehouse QR labels.

The application is designed to be fast, simple, reusable, and suitable for daily warehouse operations.

---

## Project Goals

- Save time during warehouse operations.
- Reduce repetitive work.
- Generate consistent and unique QR codes.
- Print labels efficiently on A4 paper.
- Work offline whenever possible.
- Keep the code clean and reusable.

---

## Current Modules

### 📦 Item QR

Generate item replacement QR labels.

Format:

b_<ItemNumber>_<DD-MM-YYYY>

Example:

b_1047_24-07-2026

---

### 👜 Bag QR

Generate unique bag QR identifiers.

Supported bag types:

- XS6 (Extra Small)
- S6 (Small)
- M6 (Medium)
- L6 (Large)
- K11 (General / Large Appliances)

Current format:

PREFIX + YYYY + Random + MM + DD + HH + MM + SS + Milliseconds + Optional XXXX

Example:

S62026A0724153045123450001

The last four digits (XXXX) are optional and are only used if additional uniqueness is required.

---

### 🗂 Bulk QR

Generate multiple QR labels in one operation.

Future features:

- Batch generation
- PDF export
- ZIP download

---

### 📍 Location QR

Input:

A 1 Q

Output:

1397057 AISLE A RACK 1 BIN Q

---

## Printing

Primary paper size:

- A4

Goals:

- Reduce paper waste
- Compact labels
- Fast printing
- Easy cutting

---

## Development Principles

This project follows a few important rules.

### 1. Time Saving First

Every feature should reduce typing or clicks.

### 2. Reusable Code

Avoid duplicate code whenever possible.

Examples:

- One QR Engine
- One PDF Engine
- One Label Engine
- One Download Engine
- One Storage Engine

### 3. Simple User Interface

The application should be easy to use, even by someone who has never seen it before.

### 4. Offline Ready

The application should continue working without internet after the required resources have been loaded.

### 5. Modular Design

Each feature should be independent so new warehouse tools can be added later without rewriting existing code.

---

## Planned Versions

### v2.0

Application Framework

- Dashboard
- Navigation
- Shared Components
- Dark Mode
- Responsive Layout

### v2.1

Item QR

### v2.2

Bag QR

### v2.3

Location QR

### v2.4

Bulk QR

### v2.5

Label Printing

- PNG
- PDF
- Print Layout

### v2.6

Offline Support

- Cache
- Installable App (PWA)

---

## Future Ideas

Possible future modules:

- Barcode Generator
- Shelf QR
- Pallet QR
- Excel Import
- History
- Search
- Duplicate Checker
- Settings
- Multiple Warehouse Profiles

---

## Technology

Frontend:

- HTML5
- CSS3
- JavaScript (Vanilla)

Deployment:

- GitHub Pages

Target Devices:

- Desktop
- Mobile

---

## Author

Project Owner:
Singam Maheswara Reddy

Development:
Built collaboratively with ChatGPT.
