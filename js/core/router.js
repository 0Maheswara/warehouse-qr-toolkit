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

        /*
        ======================================================
        Validate Requested Page
        ======================================================
        */

        const validPage = Object.keys(CONFIG.PAGES).includes(page);

        if (!validPage) {

            console.warn(
                `Router: Invalid page "${page}"`
            );

            return;

        }


        /*
        ======================================================
        Hide All Pages
        ======================================================
        */

        this.cache.pages.forEach(section => {

            section.classList.remove(
                "active-page"
            );

        });


        /*
        ======================================================
        Show Requested Page
        ======================================================
        */

        const targetPage =
            document.getElementById(
                `page-${page}`
            );


        if (targetPage) {

            targetPage.classList.add(
                "active-page"
            );

        }


        /*
        ======================================================
        Update Navigation Highlight
        ======================================================
        */

        this.cache.navButtons.forEach(button => {

            button.classList.remove(
                "active"
            );


            if (button.dataset.page === page) {

                button.classList.add(
                    "active"
                );

            }

        });


        /*
        ======================================================
        Update Application State
        ======================================================
        */

        if (typeof App !== "undefined") {

            App.state.page = page;

        }


        /*
        ======================================================
        Update Browser Hash
        ======================================================
        */

        if (
            window.location.hash.substring(1)
            !== page
        ) {

            window.location.hash = page;

        }

    },
                showPage(page) {

        const element =
            document.getElementById(
                `page-${page}`
            );

        if (element) {

            element.classList.add(
                "active-page"
            );

        }

    },


    hidePages() {

        this.cache.pages.forEach(section => {

            section.classList.remove(
                "active-page"
            );

        });

    },


    restoreFromHash() {

        const page =
            window.location.hash.substring(1);


        if (page) {

            this.go(page);

        }
        else {

            this.go(
                CONFIG.DEFAULT_PAGE
            );

        }

    },


    current() {

        return App.state.page;

    },


    reload() {

        this.go(App.state.page);

    }

};
