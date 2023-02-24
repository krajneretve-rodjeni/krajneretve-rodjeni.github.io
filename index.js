const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');

let selectedRow = null;

rows.forEach(row => {
  row.addEventListener('click', () => {
    if (row === selectedRow) {
      // Deselect row if it's already selected
      row.classList.remove('selected');
      selectedRow = null;
    } else {
      // Hide previously selected row and show current row
      if (selectedRow) {
        selectedRow.classList.remove('selected');
        selectedRow.classList.add('hidden');
      }
      row.classList.remove('hidden');
      row.classList.add('selected');

      // Replace row content with players' names
      const cells = row.querySelectorAll('td');
      cells[0].textContent = 'Player no.1';
      cells[1].textContent = 'Player no.2';
      cells[2].textContent = 'Player no.3';

      selectedRow = row;
    }
  });
});
