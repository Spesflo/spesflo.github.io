document.addEventListener("DOMContentLoaded", function () {
    const buttonText = document.querySelector(".btn-text");
    const finalText = "Pleaseee";
    const randomChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    document.querySelector(".btn-link").addEventListener("mouseenter", function () {
        let iterations = 0;
        let totalCycles = finalText.length * 3; // More cycles = longer effect

        const interval = setInterval(() => {
            buttonText.innerText = finalText
                .split("")
                .map((letter, index) => {
                    if (iterations / 3 > index) return letter; // Slower lock-in effect
                    return randomChars[Math.floor(Math.random() * randomChars.length)];
                })
                .join("");

            if (iterations >= totalCycles) {
                clearInterval(interval);
            }
            iterations++;
        }, 100); // Lower = faster scrambling, increase for slower effect
    });

    document.querySelector(".btn-link").addEventListener("mouseleave", function () {
        buttonText.innerText = "Support Us"; // Reset on mouse leave
    });
});

