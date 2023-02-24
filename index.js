const collapsibleRows = document.querySelectorAll('.collapsible-row');

collapsibleRows.forEach(row => {
  row.addEventListener('click', () => {
    row.nextElementSibling.classList.toggle('show');
  });
});