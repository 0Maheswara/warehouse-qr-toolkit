# Warehouse Operations Toolkit

## Architecture Guide

Version: 1.0.0

---

# Purpose

This document defines the project architecture, coding standards, and development guidelines.

Every new file and feature should follow these rules.

---

# Project Structure

```
Warehouse Operations Toolkit
│
├── index.html
│
├── css
│   ├── style.css
│   └── ...
│
└── js
    │
    ├── core
    │   ├── app.js
    │   ├── config.js
    │   ├── logger.js
    │   ├── router.js
    │   ├── storage.js
    │   ├── theme.js
    │   └── utils.js
    │
    ├── modules
    │   ├── dashboard.js
    │   ├── item.js
    │   ├── bag.js
    │   ├── location.js
    │   └── bulk.js
    │
    └── engines
        ├── qr-engine.js
        ├── label-engine.js
        └── pdf-engine.js
```

---

# Layer Responsibilities

## Core

Core files initialize and manage the application.

Core files must never contain feature-specific logic.

Core includes:

- Config
- Storage
- Router
- Theme
- Logger
- Utilities
- App

---

## Modules

Each page has exactly one module.

Example:

Dashboard → dashboard.js

Item → item.js

Bag → bag.js

Location → location.js

Bulk → bulk.js

Modules control:

- UI
- User interaction
- Validation
- Calling engines

Modules must never perform heavy business logic.

---

## Engines

Engines perform business logic.

Examples:

QR generation

PDF generation

Label generation

Engines should never manipulate the DOM.

Engines should never attach event listeners.

Engines should never know which page called them.

---

# Dependency Rules

Allowed

```
Module

↓

Engine

↓

Library
```

Allowed

```
Module

↓

Core
```

Not Allowed

```
Engine

↓

Module
```

Not Allowed

```
Module

↓

Another Module
```

Not Allowed

```
Core

↓

Module
```

---

# Standard File Structure

Every JavaScript file should use this order.

```
Header

Metadata

Constants

Cache

State

Initialization

Public Methods

Private Methods

Event Handlers

Freeze
```

---

# Metadata

Every module should contain:

```javascript
meta: {

    name: "Module Name",

    version: "1.0.0"

}
```

---

# Cache

Only frequently used DOM elements belong here.

Example

```javascript
cache: {

    button: null,

    page: null

}
```

---

# State

Mutable values belong inside state.

Example

```javascript
state: {

    status: CONFIG.MODULE_STATUS.IDLE

}
```

Never create global mutable variables.

---

# Module Lifecycle

Every module follows:

```
IDLE

↓

INITIALIZING

↓

READY
```

If initialization fails

```
IDLE

↓

INITIALIZING

↓

ERROR
```

---

# Logging

Never use

```
console.log()

console.warn()

console.error()
```

Always use

```javascript
Logger.info()

Logger.warn()

Logger.error()

Logger.debug()
```

---

# Storage

Never access localStorage directly.

Always use

```javascript
Storage.save()

Storage.load()

Storage.remove()
```

---

# DOM Access

Never write

```javascript
document.getElementById(...)
```

inside business methods.

Cache DOM elements during initialization.

Use

```javascript
Utils.byId()

Utils.query()

Utils.queryAll()
```

---

# Configuration

Never hardcode values.

Store reusable values in CONFIG.

Examples

Paper Size

Theme

Selectors

Storage Keys

Default Page

Bag Types

Label Size

---

# Event Binding

Register all events inside

```
bindEvents()
```

Never scatter event listeners throughout the module.

---

# Public Methods

Public methods are intended for use by other modules.

Examples

```
init()

refresh()

reload()

generate()
```

---

# Private Methods

Private methods should only be used internally.

Examples

```
cacheElements()

bindEvents()

load()

validate()

updateUI()
```

---

# Event Handlers

Event handlers should only respond to events.

Examples

```
onClick()

onInput()

onChange()

onShow()
```

Business logic belongs in helper methods.

---

# Naming Convention

Files

```
item.js

bag.js

router.js
```

Methods

```
camelCase()
```

Constants

```
UPPER_CASE
```

Properties

```
camelCase
```

CSS Classes

```
kebab-case
```

IDs

```
kebab-case
```

---

# Code Style

Use meaningful names.

Keep methods focused on one responsibility.

Prefer small methods.

Avoid duplicate code.

Use comments to describe sections, not obvious statements.

---

# Development Workflow

1.

Create module

↓

2.

Cache elements

↓

3.

Bind events

↓

4.

Implement feature

↓

5.

Test

↓

6.

Commit

---

# Future Improvements

Planned features

- Settings
- About
- Help
- Keyboard shortcuts
- Localization
- Plugin system
- Animation manager
- Notification system
- Diagnostics page
- Unit testing

---

# Goal

Maintain a clean, modular, scalable, and easy-to-maintain codebase.

Every feature should integrate into the existing architecture without requiring structural changes.
