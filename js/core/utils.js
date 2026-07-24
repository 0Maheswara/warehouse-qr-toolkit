/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: utils.js
Version: 2.1.0

Purpose:
Shared utility functions used throughout the application.
------------------------------------------------------------
*/

const Utils = {

    /* ======================================================
       DOM Helpers
    ====================================================== */

    /**
     * Get element by ID.
     */
    byId(id) {

        return document.getElementById(id);

    },

    /**
     * Get the first matching element.
     */
    query(selector) {

        return document.querySelector(selector);

    },

    /**
     * Get all matching elements as an array.
     */
    queryAll(selector) {

        return [...document.querySelectorAll(selector)];

    },

    /**
     * Attach an event listener.
     */
    on(element, event, handler) {

        if (!element) {

            return;

        }

        element.addEventListener(
            event,
            handler
        );

    },

    /**
     * Add a CSS class.
     */
    addClass(element, className) {

        if (!element) {

            return;

        }

        element.classList.add(className);

    },

    /**
     * Remove a CSS class.
     */
    removeClass(element, className) {

        if (!element) {

            return;

        }

        element.classList.remove(className);

    },

    /**
     * Toggle a CSS class.
     */
    /**
 * Toggle a CSS class.
 *
 * @param {HTMLElement} element
 * @param {string} className
 * @param {boolean} [force]
 */
toggleClass(element, className, force) {

    if (!element) {

        return;

    }

    if (force === undefined) {

        element.classList.toggle(className);

    } else {

        element.classList.toggle(
            className,
            force
        );

    }

},

    /**
     * Show an element.
     */
    show(element) {

        if (!element) {

            return;

        }

        element.style.display = "";

    },

    /**
     * Hide an element.
     */
    hide(element) {

        if (!element) {

            return;

        }

        element.style.display = "none";

    },

    /* ======================================================
       General Helpers
    ====================================================== */

    /**
     * Pad a number with leading zeros.
     */
    pad(value, length = 2) {

        return String(value).padStart(length, "0");

    },

    /**
     * Generate a random digit.
     */
    randomDigit() {

        return Math.floor(Math.random() * 10);

    },

    /**
     * Get current Date object.
     */
    now() {

        return new Date();

    },

    /**
     * Format a date as DD-MM-YYYY.
     */
    formatDate(date = new Date()) {

        return [

            this.pad(date.getDate()),
            this.pad(date.getMonth() + 1),
            date.getFullYear()

        ].join("-");

    },

    /**
     * Copy text to the clipboard.
     */
    async copy(text) {

        try {

            await navigator.clipboard.writeText(text);

            return true;

        }

        catch {

            return false;

        }

    }

};

Object.freeze(Utils);
