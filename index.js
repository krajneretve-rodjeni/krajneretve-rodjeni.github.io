const collapsibleRows = document.querySelectorAll('.collapsible-row');

if (collapsibleRows.length === 0) {
  console.error('No collapsible rows found.');
}

collapsibleRows.forEach(row => {
  row.addEventListener('click', () => {
    const contentRow = row.nextElementSibling;
    if (!contentRow || !contentRow.classList.contains('collapsible-content')) {
      console.error('Could not find collapsible content row for clicked row.');
      return;
    }
    contentRow.classList.toggle('show');
  });
});
