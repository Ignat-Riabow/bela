document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    // Открытие бокового меню
    menuBtn.addEventListener("click", function () {
        sidebar.style.left = "0";
    });

    // Закрытие бокового меню
    closeBtn.addEventListener("click", function () {
        sidebar.style.left = "-250px";
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.style.left = "-250px";
        }
    });

    // Разворачивание текстовых блоков с анимацией
    dropdownBtns.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.opacity = "0";
            } else {
                document.querySelectorAll(".dropdown-content").forEach(el => {
                    el.style.maxHeight = null;
                    el.style.opacity = "0";
                });

                content.style.maxHeight = content.scrollHeight + "px";
                content.style.opacity = "1";
            }
        });
    });
});
