/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: app.js
Version: 2.1.0

Purpose:
Application entry point.

Responsibilities:
- Initialize the application
- Initialize core services
- Initialize feature modules
------------------------------------------------------------
*/

const App = {

    /* ======================================================
       State
    ====================================================== */

    state: {

        initialized: false

    },

    /* ======================================================
       Initialization
    ====================================================== */

    /**
     * Initialize application.
     */
    init() {

        if (this.state.initialized) {

            return;

        }

        this.initializeCore();

        this.initializeModules();

        this.state.initialized = true;

        console.log(
            `${CONFIG.APP_NAME} v${CONFIG.VERSION} started`
        );

    },

    /* ======================================================
       Private Methods
    ====================================================== */

    /**
     * Initialize core modules.
     */
    initializeCore() {

        Theme.init();

        Router.init();

    },

    /**
     * Initialize feature modules.
     */
    initializeModules() {

        // Dashboard.init();

        // Item.init();

        // Bag.init();

        // Location.init();

        // Bulk.init();

    }

};

Object.freeze(App);

/* ==========================================================
   Application Startup
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        App.init();

    }

);
