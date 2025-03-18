// Set the next anniversary date (YYYY, MM - 1, DD)
const nextAnniversary = new Date(2025, 3, 19).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = nextAnniversary - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "Happy Anniversary My Love ❤️";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
