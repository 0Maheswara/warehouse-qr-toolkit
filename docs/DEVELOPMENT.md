# Development Notes

This document contains design decisions, implementation notes, and future ideas.

---

## Project Goals

- Save time during warehouse operations.
- Reuse code wherever possible.
- Keep the application fast and responsive.
- Support offline usage after initial setup.
- Build a modular application that is easy to extend.

---

## Shared Components

### QR Engine
Responsible for:
- Generate QR codes
- Return QR canvas
- Copy QR
- Download PNG

### Label Engine
Responsible for:
- A4 label layouts
- PDF generation
- Print optimization

### Storage Engine
Responsible for:
- Local settings
- Theme
- Last used values
- Preferences

### Router
Responsible for:
- Navigation
- Switching between modules
- Loading views

---

## QR Formats

### Item QR

Format:

b_<ItemNumber>_<DD-MM-YYYY>

Example:

b_1047_24-07-2026

---

### Bag QR

Prefixes:

- XS6
- S6
- M6
- L6
- K11

Format:

PREFIX + YYYY + Random + MM + DD + HH + MM + SS + Milliseconds + Optional XXXX

---

### Location QR

Input:

A 1 Q

Output:

1397057 AISLE A RACK 1 BIN Q

---

## Current Priority

1. Application Framework
2. Item QR
3. Bag QR
4. Location QR
5. Bulk QR
6. Labels & PDF
7. Offline Support

---

## Future Ideas

(Add new ideas here as the project grows.)
