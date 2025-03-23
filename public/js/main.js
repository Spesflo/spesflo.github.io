(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const buttonText = document.querySelector(".btn-text");
    const finalText = "Pleaseee";
    const randomChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.querySelector(".btn-link").addEventListener("mouseenter", function() {
      let iterations = 0;
      let totalCycles = finalText.length * 3;
      const interval = setInterval(() => {
        buttonText.innerText = finalText.split("").map((letter, index) => {
          if (iterations / 3 > index) return letter;
          return randomChars[Math.floor(Math.random() * randomChars.length)];
        }).join("");
        if (iterations >= totalCycles) {
          clearInterval(interval);
        }
        iterations++;
      }, 100);
    });
    document.querySelector(".btn-link").addEventListener("mouseleave", function() {
      buttonText.innerText = "Support Us";
    });
  });
})();
