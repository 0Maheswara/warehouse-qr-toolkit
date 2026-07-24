/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: router.js
Version: 3.0.0

Purpose:
Single Page Application (SPA) Router.

Responsibilities:
- Cache DOM elements
- Register navigation events
- Navigate between pages
- Restore previous page
- Synchronize browser hash
------------------------------------------------------------
*/

const Router = {

    /* ======================================================
       Metadata
    ====================================================== */

    meta: {

        name: "Router",

        version: "3.0.0"

    },

    /* ======================================================
       Constants
    ====================================================== */

    DEFAULT_PAGE: CONFIG.DEFAULT_PAGE,

    /* ======================================================
       Cached Elements
    ====================================================== */

    cache: {

        pages: [],

        navButtons: []

    },

    /* ======================================================
       State
    ====================================================== */

    state: {

        status: CONFIG.MODULE_STATUS.IDLE,

        currentPage: CONFIG.DEFAULT_PAGE

    },

    /* ======================================================
       Initialization
    ====================================================== */

    /**
     * Initialize Router.
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

        this.cacheElements();

        this.bindEvents();

        this.restoreState();

        this.state.status =
            CONFIG.MODULE_STATUS.READY;

    },

    /* ======================================================
       Private Methods
    ====================================================== */

    /**
     * Cache frequently used DOM elements.
     */
    cacheElements() {

        this.cache.pages = Utils.queryAll(

            CONFIG.SELECTORS.pages

        );

        this.cache.navButtons = Utils.queryAll(

            CONFIG.SELECTORS.navButtons

        );

    },

    /**
     * Register all router events.
     */
    bindEvents() {

        this.cache.navButtons.forEach(button => {

            Utils.on(

                button,

                "click",

                () => this.onNavigationClick(button)

            );

        });

        Utils.on(

            window,

            "hashchange",

            () => this.onHashChange()

        );

    },
    /* ======================================================
       Public Methods
    ====================================================== */

    /**
     * Navigate to a page.
     *
     * @param {string} page
     */
    go(page) {

        // Validate page
        if (!CONFIG.PAGES[page]) {

            console.warn(
                `Router: Invalid page "${page}"`
            );

            return;

        }

        // Already on this page
        if (this.state.currentPage === page) {

            return;

        }

        // Update state
        this.state.currentPage = page;

        // Update UI
        this.hidePages();

        this.showPage(page);

        this.updateNavigation(page);

        // Save current page
        Storage.save(

            CONFIG.STORAGE_KEYS.lastPage,

            page

        );

        // Update browser hash
        this.updateHash(page);

    },

    /**
     * Get current page.
     *
     * @returns {string}
     */
    current() {

        return this.state.currentPage;

    },

    /**
     * Reload current page.
     */
    reload() {

        this.go(

            this.state.currentPage

        );

    },

    /* ======================================================
       Private Methods
    ====================================================== */

    /**
     * Restore previous page.
     */
    restoreState() {

        const page =

            window.location.hash.substring(1)

            ||

            Storage.load(

                CONFIG.STORAGE_KEYS.lastPage,

                this.DEFAULT_PAGE

            );

        this.state.currentPage = "";

        this.go(page);

    },
    /**
     * Hide all application pages.
     */
    hidePages() {

        this.cache.pages.forEach(page => {

            Utils.removeClass(
                page,
                "active-page"
            );

        });

    },

    /**
     * Display requested page.
     *
     * @param {string} page
     */
    showPage(page) {

        const element = Utils.byId(
            CONFIG.PAGES[page].id
        );

        if (!element) {

            console.warn(
                `Router: Page "${page}" not found.`
            );

            return;

        }

        Utils.addClass(
            element,
            "active-page"
        );

    },

    /**
     * Update active navigation button.
     *
     * @param {string} page
     */
    updateNavigation(page) {

        this.cache.navButtons.forEach(button => {

            Utils.removeClass(
                button,
                "active"
            );

            if (button.dataset.page === page) {

                Utils.addClass(
                    button,
                    "active"
                );

            }

        });

    },

    /**
     * Synchronize browser hash.
     *
     * @param {string} page
     */
    updateHash(page) {

        if (

            window.location.hash.substring(1)

            === page

        ) {

            return;

        }

        window.location.hash = page;

    },

    /* ======================================================
       Event Handlers
    ====================================================== */

    /**
     * Navigation button clicked.
     *
     * @param {HTMLElement} button
     */
    onNavigationClick(button) {

        this.go(
            button.dataset.page
        );

    },

    /**
     * Browser hash changed.
     */
    onHashChange() {

        const page =

            window.location.hash.substring(1);

        if (!page) {

            return;

        }

        if (!CONFIG.PAGES[page]) {

            return;

        }

        if (page === this.state.currentPage) {

            return;

        }

        this.go(page);

    }

};

Object.freeze(Router);
