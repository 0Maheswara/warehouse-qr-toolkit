/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: theme.js
Version: 3.0.0

Purpose:
Manages application theme (Light / Dark).
------------------------------------------------------------
*/

const Theme = {

    /* ======================================================
       Metadata
    ====================================================== */

    meta: {

        name: "Theme",

        version: "3.0.0"

    },

    /* ======================================================
       Cached Elements
    ====================================================== */

    cache: {

        toggleButton: null

    },

    /* ======================================================
       State
    ====================================================== */

    state: {

        status: CONFIG.MODULE_STATUS.IDLE,

        current: CONFIG.DEFAULT_THEME

    },

    /* ======================================================
       Initialization
    ====================================================== */

    /**
     * Initialize Theme.
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

        this.loadTheme();

        this.apply();

        this.state.status =
            CONFIG.MODULE_STATUS.READY;

    },

    /* ======================================================
       Public Methods
    ====================================================== */

    /**
     * Apply current theme.
     */
    apply() {

        Utils.toggleClass(

            document.body,

            "dark",

            this.state.current === "dark"

        );

        this.updateIcon();

    },

    /**
     * Toggle theme.
     */
    toggle() {

        this.state.current =

            this.state.current === "light"

                ? "dark"

                : "light";

        Storage.save(

            CONFIG.STORAGE_KEYS.theme,

            this.state.current

        );

        this.apply();

    },

    /* ======================================================
       Private Methods
    ====================================================== */

    /**
     * Cache DOM elements.
     */
    cacheElements() {

        this.cache.toggleButton =

            Utils.query(

                CONFIG.SELECTORS.themeToggle

            );

    },

    /**
     * Register event listeners.
     */
    bindEvents() {

        if (!this.cache.toggleButton) {

            return;

        }

        Utils.on(

            this.cache.toggleButton,

            "click",

            () => this.toggle()

        );

    },

    /**
     * Load saved theme.
     */
    loadTheme() {

        this.state.current =

            Storage.load(

                CONFIG.STORAGE_KEYS.theme,

                CONFIG.DEFAULT_THEME

            );

    },

    /**
     * Update toggle button icon.
     */
    updateIcon() {

        if (!this.cache.toggleButton) {

            return;

        }

        this.cache.toggleButton.textContent =

            this.state.current === "dark"

                ? "☀️"

                : "🌙";

    }

};

Object.freeze(Theme);
