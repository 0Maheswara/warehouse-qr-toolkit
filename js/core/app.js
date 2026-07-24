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

    status: CONFIG.MODULE_STATUS.IDLE

},

    /* ======================================================
       Initialization
    ====================================================== */

    /**
     * Initialize application.
     */
init() {

    if (

        this.state.status ===

        CONFIG.MODULE_STATUS.READY

    ) {

        return;

    }

    this.state.status =

        CONFIG.MODULE_STATUS.INITIALIZING;

    try {

        this.initializeCore();

        this.initializeModules();

        this.state.status =

            CONFIG.MODULE_STATUS.READY;

        console.log(

            `${CONFIG.APP_NAME} v${CONFIG.VERSION} started`

        );

    }

    catch (error) {

        this.state.status =

            CONFIG.MODULE_STATUS.ERROR;

        console.error(error);

    }

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
