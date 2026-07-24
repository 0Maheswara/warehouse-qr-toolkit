/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: storage.js
Version: 2.0.0

Purpose:
Application storage wrapper.
------------------------------------------------------------
*/

const Storage = {

    /**
     * Create application storage key
     */
    key(name) {

        return `${CONFIG.STORAGE_PREFIX}_${name}`;

    },

    /**
     * Save value
     */
    save(name, value) {

        try {

            localStorage.setItem(
                this.key(name),
                JSON.stringify(value)
            );

            return true;

        } catch (error) {

            console.error("Storage save failed:", error);

            return false;

        }

    },

    /**
     * Load value
     */
    load(name, defaultValue = null) {

        try {

            const value = localStorage.getItem(this.key(name));

            if (value === null) {

                return defaultValue;

            }

            return JSON.parse(value);

        } catch (error) {

            console.error("Storage load failed:", error);

            return defaultValue;

        }

    },

    /**
     * Remove value
     */
    remove(name) {

        localStorage.removeItem(this.key(name));

    },

    /**
     * Check if key exists
     */
    has(name) {

        return localStorage.getItem(this.key(name)) !== null;

    },

    /**
     * Clear only application data
     */
    clear() {

        const prefix = CONFIG.STORAGE_PREFIX + "_";

        Object.keys(localStorage).forEach(key => {

            if (key.startsWith(prefix)) {

                localStorage.removeItem(key);

            }

        });

    }

};

Object.freeze(Storage);
