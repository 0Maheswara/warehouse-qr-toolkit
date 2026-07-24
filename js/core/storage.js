/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: storage.js
Version: 2.1.0

Purpose:
Application storage wrapper.
Provides a centralized interface for Local Storage.
------------------------------------------------------------
*/

const Storage = {

    /* ======================================================
       Constants
    ====================================================== */

    prefix: CONFIG.STORAGE_PREFIX,

    /* ======================================================
       Public Methods
    ====================================================== */

    /**
     * Create an application storage key.
     *
     * @param {string} name
     * @returns {string}
     */
    key(name) {

        return `${this.prefix}_${name}`;

    },

    /**
     * Save a value.
     *
     * @param {string} name
     * @param {*} value
     * @returns {boolean}
     */
    save(name, value) {

        try {

            localStorage.setItem(
                this.key(name),
                JSON.stringify(value)
            );

            return true;

        }

        catch (error) {

            Logger.error(
                "Storage.save()",
        error
        );

            return false;

        }

    },

    /**
     * Load a value.
     *
     * @param {string} name
     * @param {*} defaultValue
     * @returns {*}
     */
    load(name, defaultValue = null) {

        try {

            const storedValue =
                localStorage.getItem(
                    this.key(name)
                );

            if (storedValue === null) {

                return defaultValue;

            }

            return JSON.parse(storedValue);

        }

        catch (error) {

            Logger.error(
                 "Storage.load()",
            error
            );
            return defaultValue;

        }

    },

    /**
     * Remove a stored value.
     *
     * @param {string} name
     */
    remove(name) {

        localStorage.removeItem(
            this.key(name)
        );

    },

    /**
     * Check whether a key exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    has(name) {

        return (

            localStorage.getItem(
                this.key(name)
            ) !== null

        );

    },

    /**
     * Clear all application data.
     */
    clear() {

        const prefix =
            `${this.prefix}_`;

        Object.keys(localStorage).forEach(key => {

            if (!key.startsWith(prefix)) {

                return;

            }

            localStorage.removeItem(key);

        });

    }

};

Object.freeze(Storage);
