/*
------------------------------------------------------------
Warehouse Operations Toolkit
File: logger.js
Version: 1.0.0

Purpose:
Centralized application logger.

Responsibilities:
- Log information
- Log warnings
- Log errors
- Enable/Disable logging
------------------------------------------------------------
*/

const Logger = {

    /* ======================================================
       Metadata
    ====================================================== */

    meta: {

        name: "Logger",

        version: "1.0.0"

    },

    /* ======================================================
       State
    ====================================================== */

    state: {

        enabled: true

    },

    /* ======================================================
       Public Methods
    ====================================================== */

    /**
     * Enable logging.
     */
    enable() {

        this.state.enabled = true;

    },

    /**
     * Disable logging.
     */
    disable() {

        this.state.enabled = false;

    },

    /**
     * Information message.
     *
     * @param {...*} args
     */
    info(...args) {

        if (!this.state.enabled) {

            return;

        }

        console.log(

            "[INFO]",

            ...args

        );

    },

    /**
     * Warning message.
     *
     * @param {...*} args
     */
    warn(...args) {

        if (!this.state.enabled) {

            return;

        }

        console.warn(

            "[WARN]",

            ...args

        );

    },

    /**
     * Error message.
     *
     * @param {...*} args
     */
    error(...args) {

        if (!this.state.enabled) {

            return;

        }

        console.error(

            "[ERROR]",

            ...args

        );

    },

    /**
     * Debug message.
     *
     * @param {...*} args
     */
    debug(...args) {

        if (!this.state.enabled) {

            return;

        }

        console.debug(

            "[DEBUG]",

            ...args

        );

    }

};

Object.freeze(Logger);
