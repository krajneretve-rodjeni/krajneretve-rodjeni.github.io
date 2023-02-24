function showGameBox(gameId) {
  const gameRow = document.querySelector(`.game-row[data-id="${gameId}"]`);
  const gameCells = gameRow.querySelectorAll("td");
  const gameBox = document.getElementById("game-box");

  // Populate game box with data
  const gameData = getGameData(gameId);
  if (gameData) {
    const teamAScore = gameCells[2].textContent.split("-")[0].trim();
    const teamBScore = gameCells[2].textContent.split("-")[1].trim();

    gameBox.querySelector("th:first-child").textContent = gameData.teamA;
    gameBox.querySelector("th:last-child").textContent = gameData.teamB;
    gameBox.querySelector("td:nth-child(1)").textContent = gameData.playersA[0];
    gameBox.querySelector("td:nth-child(2)").textContent = gameData.playersA[1];
    gameBox.querySelector("td:nth-child(3)").textContent = gameData.playersA[2];
    gameBox.querySelector("td:nth-child(4)").textContent = gameData.playersB[0];
    gameBox.querySelector("td:nth-child(5)").textContent = gameData.playersB[1];
    gameBox.querySelector("td:nth-child(6)").textContent = gameData.playersB[2];
    gameBox.querySelector("td:nth-child(7)").textContent = teamAScore;
    gameBox.querySelector("td:nth-child(8)").textContent = teamBScore;
    gameBox.querySelector("td:nth-child(9)").textContent = gameData.result;
  }

  // Show or hide game box
  if (gameBox.classList.contains("show") && gameBox.dataset.id === gameId) {
    gameBox.classList.remove("show");
    gameBox.dataset.id = "";
  } else {
    gameBox.classList.add("show");
    gameBox.dataset.id = gameId;
  }
}
