/* ==========================================================
   APPLICATION ENTRY POINT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Application Started");

    // Initialize theme first
    Theme.init();

    // Initialize router
    Router.init();

});
