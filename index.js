<!DOCTYPE html>
<html>
<head>
  <title>Football Scores</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <table id="football-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Opponent</th>
        <th>Score</th>
        <th>Result</th>
        <th>Attendance</th>
      </tr>
    </thead>
    <tbody>
      <tr class="game-row" data-id="1">
        <td>1/1/2023</td>
        <td>Team A</td>
        <td><span class="highlight">3-1</span></td>
        <td>Win</td>
        <td>10,000</td>
      </tr>
      <tr class="game-row" data-id="2">
        <td>1/8/2023</td>
        <td>Team B</td>
        <td><span class="highlight">0-0</span></td>
        <td>Draw</td>
        <td>8,000</td>
      </tr>
      <tr class="game-row" data-id="3">
        <td>1/15/2023</td>
        <td>Team C</td>
        <td><span class="highlight">2-1</span></td>
        <td>Win</td>
        <td>12,000</td>
      </tr>
      <!-- add more rows here as needed -->
    </tbody>
  </table>

  <div id="game-box">
    <table>
      <thead>
        <tr>
          <th>Team A</th>
          <th>Score</th>
          <th>Score</th>
          <th>Team B</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Player 1</td>
          <td>Player 2</td>
          <td>Player 3</td>
          <td>Player 1</td>
          <td rowspan="11">Win</td>
        </tr>
        <tr>
          <td>Player 4</td>
          <td>Player 5</td>
          <td>Player 6</td>
          <td>Player 2</td>
        </tr>
        <tr>
          <td>Player 7</td>
          <td>Player 8</td>
          <td>Player 9</td>
          <td>Player 3</td>
        </tr>
        <!-- add more rows here as needed -->
      </tbody>
    </table>
  </div>

  <script src="script.js"></script>
</body>
</html>
