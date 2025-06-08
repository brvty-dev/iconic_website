document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu_links");
  const menuContent = document.getElementById("menu");

  menuButton.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent window click from firing
    this.classList.toggle("change");
    menuContent.classList.toggle("show");
  });

  window.addEventListener("click", function (e) {
    const isMenuClick = menuButton.contains(e.target) || menuContent.contains(e.target);
    if (!isMenuClick) {
      menuButton.classList.remove("change");
      menuContent.classList.remove("show");
    }
  });

  document.querySelectorAll(".menu-content a[href^='index.html#']").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      menuContent.classList.remove("show");
      menuButton.classList.remove("change");

      const targetId = this.getAttribute("href").split("#")[1];
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        target.classList.add("flash");

        setTimeout(() => {
          target.classList.remove("flash");
        }, 1000);
      }
    });
  });

});