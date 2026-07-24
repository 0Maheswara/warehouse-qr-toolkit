/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: theme.js
Version: 2.0.0

Purpose:
Theme manager.
------------------------------------------------------------
*/

const Theme = {

    current: CONFIG.DEFAULT_THEME,

    /**
     * Initialize theme
     */
    init() {

        this.current = Storage.load(
            "theme",
            CONFIG.DEFAULT_THEME
        );

        this.apply();

    },

    /**
     * Apply theme
     */
    apply() {

        document.body.classList.toggle(
            "dark",
            this.current === "dark"
        );

        this.updateIcon();

    },

    /**
     * Toggle theme
     */
    toggle() {

        this.current =
            this.current === "light"
                ? "dark"
                : "light";

        Storage.save(
            "theme",
            this.current
        );

        this.apply();

    },

    /**
     * Update button icon
     */
    updateIcon() {

        const button =
            Utils.byId("theme-toggle");

        if (!button) return;

        button.textContent =
            this.current === "dark"
                ? "☀️"
                : "🌙";

    }

};

Object.freeze(Theme);
