/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: config.js
Version: 2.0.0

Purpose:
Application configuration and constants.
------------------------------------------------------------
*/

const CONFIG = {

    APP_NAME: "Warehouse Operations Toolkit",

    VERSION: "2.0.0",

    STORAGE_PREFIX: "wot",

    DEFAULT_THEME: "light",

    DEFAULT_PAGE: "dashboard",

    DATE_FORMAT: "DD-MM-YYYY",

    PAPER_SIZE: "A4",

    LABEL: {

        WIDTH_MM: 50,

        HEIGHT_MM: 30

    },

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
   Module Registry
========================================================== */

CONFIG.MODULES = {

    dashboard: null,

    item: null,

    bag: null,

    location: null,

    bulk: null

};

Object.freeze(CONFIG);
