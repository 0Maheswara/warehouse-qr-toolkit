/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: theme.js
Version: 2.1.0

Purpose:
Manages application theme (Light / Dark).
------------------------------------------------------------
*/

const Theme = {

    /* ======================================================
       Cached Elements
    ====================================================== */

    cache: {

        toggleButton: null

    },

    /* ======================================================
       State
    ====================================================== */

    current: CONFIG.DEFAULT_THEME,

    /* ======================================================
       Initialization
    ====================================================== */

    /**
     * Initialize Theme
     */
    init() {

        // Cache DOM elements
        this.cache.toggleButton =
    document.querySelector(
        CONFIG.SELECTORS.themeToggle
    );

        // Load saved theme
        this.current = Storage.load(
            CONFIG.STORAGE_KEYS.theme,
            CONFIG.DEFAULT_THEME
        );

        // Attach event listeners
        if (this.cache.toggleButton) {

            this.cache.toggleButton.addEventListener(
                "click",
                () => this.toggle()
            );

        }

        // Apply current theme
        this.apply();

    },

    /* ======================================================
       Public Methods
    ====================================================== */

    /**
     * Apply current theme
     */
    apply() {

        document.body.classList.toggle(
            "dark",
            this.current === "dark"
        );

        this.updateIcon();

    },

    /**
     * Toggle between Light and Dark themes
     */
    toggle() {

        this.current =

            this.current === "light"
                ? "dark"
                : "light";

        Storage.save(
            CONFIG.STORAGE_KEYS.theme,
            this.current
        );

        this.apply();

    },

    /* ======================================================
       Private Helper Methods
    ====================================================== */

    /**
     * Update theme button icon
     */
    updateIcon() {

        if (!this.cache.toggleButton) {

            return;

        }

        this.cache.toggleButton.textContent =

            this.current === "dark"
                ? "☀️"
                : "🌙";

    }

};

Object.freeze(Theme);
