/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: config.js
Version: 2.1.0

Purpose:
Application configuration and constants.
------------------------------------------------------------
*/

const CONFIG = {

    /* ======================================================
       Application
    ====================================================== */

    APP_NAME: "Warehouse Operations Toolkit",

    VERSION: "2.1.0",

    STORAGE_PREFIX: "wot",

    /* ======================================================
       Default Settings
    ====================================================== */

    DEFAULT_THEME: "light",

    DEFAULT_PAGE: "dashboard",

    DATE_FORMAT: "DD-MM-YYYY",

    PAPER_SIZE: "A4",

    /* ======================================================
       Storage Keys
    ====================================================== */

    STORAGE_KEYS: {

        theme: "theme",

        lastPage: "lastPage",

        pdfLayout: "pdfLayout",

        qrSize: "qrSize",

        settings: "settings"

    },

    /* ======================================================
   DOM Selectors
====================================================== */

SELECTORS: {

    pages: ".page",

    navButtons: "[data-page]",

    themeToggle: "#theme-toggle"

},

    /* ======================================================
       Label Settings
    ====================================================== */

    LABEL: {

        WIDTH_MM: 50,

        HEIGHT_MM: 30

    },

    /* ======================================================
       Bag Types
    ====================================================== */

    BAG_TYPES: {

        XS: "XS6",

        S: "S6",

        M: "M6",

        L: "L6",

        K11: "K11"

    }

};

/* ==========================================================
   Pages
========================================================== */

CONFIG.PAGES = {

    dashboard: {

        id: "page-dashboard",

        title: "Dashboard"

    },

    item: {

        id: "page-item",

        title: "Item QR"

    },

    bag: {

        id: "page-bag",

        title: "Bag QR"

    },

    location: {

        id: "page-location",

        title: "Location QR"

    },

    bulk: {

        id: "page-bulk",

        title: "Bulk QR"

    }

};

/* ==========================================================
   Freeze Configuration
========================================================== */

Object.freeze(CONFIG.STORAGE_KEYS);

Object.freeze(CONFIG.LABEL);

Object.freeze(CONFIG.BAG_TYPES);

Object.freeze(CONFIG.PAGES);

Object.freeze(CONFIG);
