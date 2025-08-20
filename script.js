document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    var menuButton = document.getElementById('menuButton');
    var sidenav = document.querySelector('.sidenav');
    var mainContent = document.querySelector('.main-content');
    var myHeader = document.getElementById('myHeader');

    // Add a click event listener to the menu button
    if (menuButton && sidenav && mainContent && myHeader) {
        menuButton.addEventListener('click', function() {
            // Toggle the 'sidenav-open' class on the sidebar
            // This will animate its width from 0 to 160px (or vice-versa)
            sidenav.classList.toggle('sidenav-open');
            
            // Toggle the 'content-shifted' class on the main content area
            // This will animate its margin-left, pushing content to the right (or back)
            mainContent.classList.toggle('content-shifted');

            // Toggle the 'content-shifted' class on the header
            // This will animate its margin-left, pushing header to the right (or back)
            myHeader.classList.toggle('content-shifted');

            // Toggle the 'change' class on the menu button itself
            // This animates the hamburger icon into a cross (or vice-versa)
            menuButton.classList.toggle('change');
        });
    }
});
