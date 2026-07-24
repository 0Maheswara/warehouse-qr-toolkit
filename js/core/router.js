/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: router.js
Version: 2.0.0

Purpose:
Single Page Application (SPA) router.

Responsibilities:
- Cache page elements
- Cache navigation buttons
- Initialize router
- Handle navigation clicks
- Listen for browser hash changes
------------------------------------------------------------
*/

const Router = {

    /* ======================================================
       Cached Elements
    ====================================================== */

    cache: {

        pages: [],

        navButtons: []

    },

    /* ======================================================
       Router Initialization
    ====================================================== */

    init() {

        // Cache page containers
        this.cache.pages = [
            ...document.querySelectorAll(".page")
        ];

        // Cache navigation buttons
        this.cache.navButtons = [
            ...document.querySelectorAll("[data-page]")
        ];

        // Navigation button clicks
        this.cache.navButtons.forEach(button => {

            button.addEventListener("click", () => {

                const page = button.dataset.page;

                this.go(page);

            });

        });

        // Browser Back / Forward
        window.addEventListener(
            "hashchange",
            () => {

                this.restoreFromHash();

            }
        );

    },

    /* ======================================================
       Public API
    ====================================================== */

    go(page) {

        // Part 2

    },

    current() {

        return App.state.page;

    },

    reload() {

        this.go(App.state.page);

    }

};
