document.addEventListener("DOMContentLoaded", () => {
  const moonIcon = document.querySelector(".moon");

  moonIcon.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");

    // Smooth transition handled by CSS transitions

    // Delay icon swap for smooth effect
    setTimeout(() => {
      moonIcon.src = isLight ? "sun.png" : "crescent-moon.svg";
    }, 200);
  });
});
