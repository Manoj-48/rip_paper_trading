const charDiv = document.getElementById("characters");
const leaderboard = document.getElementById("leaderboard");

function renderCharacters() {
  charDiv.innerHTML = "";
  characters.forEach(c => {
    const div = document.createElement("div");
    div.className = "character";
    div.innerHTML = `<strong>${c.name}</strong><br>${c.market}`;
    div.onclick = () => {
      document.querySelectorAll(".character").forEach(e => e.classList.remove("active"));
      div.classList.add("active");
      selectedCharacter = c;
    };
    charDiv.appendChild(div);
  });
}

function renderLeaderboard() {
  leaderboard.innerHTML = "";
  [...characters]
    .sort((a,b) => b.pnl - a.pnl)
    .slice(0,5)
    .forEach((c,i) => {
      leaderboard.innerHTML += `<div>${i+1}. ${c.name} — ${c.pnl.toFixed(2)}%</div>`;
    });
}

document.getElementById("playBtn").onclick = () => autopilot = true;
document.getElementById("pauseBtn").onclick = () => autopilot = false;

renderCharacters();
renderLeaderboard();

setInterval(runEngine, 3000);