// ❤️ Relationship Counter
const startDate = new Date("2026-06-09T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const counter = document.getElementById("countdown");

    if (counter) {
        counter.innerHTML = `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes`;
    }
}

setInterval(updateCounter, 1000);
updateCounter();


// ❤️ Reasons I Love You
const reasons = [
"❤️ Because you make my ordinary days feel special.",
"❤️ Because every notification from you makes me smile.",
"❤️ Because you became my home.",
"❤️ Because you make me laugh even when I'm angry.",
"❤️ Because you're patient with me, even when I get mad over little things.",
"❤️ Because bike rides with you are my favorite memories.",
"❤️ Because our late-night calls never feel long enough.",
"❤️ Because I can tell you everything—my happiness, pain, comfort, and every random thought.",
"❤️ Because you always make me feel loved.",
"❤️ Because you make distance feel a little less difficult.",
"❤️ Because you're my safe place.",
"❤️ Because even sitting in silence with you feels comforting.",
"❤️ Because you always choose us.",
"❤️ Because you make me excited for our future together.",
"❤️ Because no matter what happens, I'd choose you again and again."
];

let currentReason = 0;

function nextReason() {
    document.getElementById("reasonText").innerHTML = reasons[currentReason];
    currentReason = (currentReason + 1) % reasons.length;
}
document.getElementById("playMusic").addEventListener("click", function () {
    document.getElementById("bgMusic").play();
    this.style.display = "none";
});
