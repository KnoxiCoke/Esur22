window.ESUR = window.ESUR || {};
window.ESUR.app = window.ESUR.app || {};

window.ESUR.app.disclaimer = {
  init() {
    const stickyDisclaimer = document.getElementById("stickyDisclaimer");

    if (stickyDisclaimer) {
      stickyDisclaimer.setAttribute("role", "button");
      stickyDisclaimer.setAttribute("tabindex", "0");
      stickyDisclaimer.setAttribute("aria-expanded", "false");

      const toggleDisclaimer = () => {
        const isOpen = stickyDisclaimer.classList.toggle("is-open");
        stickyDisclaimer.setAttribute("aria-expanded", isOpen ? "true" : "false");
      };

      stickyDisclaimer.addEventListener("click", toggleDisclaimer);

      stickyDisclaimer.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleDisclaimer();
        }
      });
    }
  }
};
