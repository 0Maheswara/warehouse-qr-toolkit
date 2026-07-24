/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: utils.js
Version: 2.0.0

Purpose:
Shared utility functions.
------------------------------------------------------------
*/

const Utils = {

    /**
     * Get element by ID
     */
    byId(id) {

        return document.getElementById(id);

    },

    /**
     * Get first matching element
     */
    query(selector) {

        return document.querySelector(selector);

    },

    /**
     * Get all matching elements
     */
    queryAll(selector) {

        return document.querySelectorAll(selector);

    },

    /**
     * Pad a number with leading zeros
     */
    pad(value, length = 2) {

        return String(value).padStart(length, "0");

    },

    /**
     * Generate a random digit
     */
    randomDigit() {

        return Math.floor(Math.random() * 10);

    },

    /**
     * Get current Date object
     */
    now() {

        return new Date();

    },

    /**
     * Format date as DD-MM-YYYY
     */
    formatDate(date = new Date()) {

        return [
            this.pad(date.getDate()),
            this.pad(date.getMonth() + 1),
            date.getFullYear()
        ].join("-");

    },

    /**
     * Copy text to clipboard
     */
    async copy(text) {

        try {

            await navigator.clipboard.writeText(text);

            return true;

        } catch {

            return false;

        }

    }

};

Object.freeze(Utils);
