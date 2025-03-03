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

    // Анимация тем поочередно (Тэма 1 → Тэма 2 → Тэма 3 → Тэма 4)
    dropdownBtns.forEach((button, index) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (content.classList.contains("show")) {
                content.classList.remove("show");
            } else {
                // Закрываем все темы
                document.querySelectorAll(".dropdown-content").forEach(el => el.classList.remove("show"));

                // Открываем текущую тему с небольшой задержкой
                setTimeout(() => content.classList.add("show"), index * 200);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Проверяем, открыта ли тема
            if (content.classList.contains("show")) {
                content.classList.remove("show"); // Закрываем
            } else {
                // Закрываем все другие темы
                document.querySelectorAll(".dropdown-content").forEach(el => el.classList.remove("show"));
                content.classList.add("show"); // Открываем текущую тему
            }
        });
    });
});
