const funFacts = [
    "Did you know? Honey never spoils.",
    "Did you know? A day on Venus is longer than a year on Venus.",
    "Did you know? Bananas are berries, but strawberries aren't.",
    "Did you know? There are more stars in the universe than grains of sand on Earth."
];

let currentFactIndex = 0;

function updateFunFact() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    document.getElementById('funFact').textContent = funFacts[currentFactIndex];
}

// Change fun fact every 5 seconds (5000 milliseconds)
setInterval(updateFunFact, 5000);

document.getElementById('nextBtn').addEventListener('click', () => {
    updateFunFact();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentFactIndex = (currentFactIndex - 1 + funFacts.length) % funFacts.length;
    document.getElementById('funFact').textContent = funFacts[currentFactIndex];
});
