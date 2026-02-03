let selectedCharacter = null;
let autopilot = false;

function runEngine() {
  if (!autopilot || !selectedCharacter) return;

  const delta = (Math.random() * 2 - 1).toFixed(2);
  selectedCharacter.pnl += parseFloat(delta);

  renderLeaderboard();
}