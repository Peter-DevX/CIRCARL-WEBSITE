document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll("nav .menu-container a"); // Select all menu links

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Remove "active" class from all links
            menuLinks.forEach(link => link.classList.remove("active"));

            // Add "active" class to the clicked link
            this.classList.add("active");

            // Scroll to the section
            const targetId = this.getAttribute("href").substring(1); // Get the target ID
            const targetSection = document.getElementById(targetId);

            // Adjust offset if needed (for fixed headers, etc.)
            const headerOffset = 10; // Adjust this value for fixed headers if necessary
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Function to change active class on scroll
    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 40 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    // Listen to scroll events
    window.addEventListener("scroll", changeActiveLink);
});

