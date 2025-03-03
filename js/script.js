document.addEventListener("DOMContentLoaded", function() {
    // Разворачивающееся меню
    const menuButton = document.querySelector(".menu-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuButton.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Разворачивающиеся блоки
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                document.querySelectorAll(".accordion-content").forEach(item => item.style.maxHeight = null);
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
