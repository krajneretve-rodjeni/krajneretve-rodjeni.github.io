function showDetails(row) {
  var detailsRow = document.getElementById("details");
  if (detailsRow.style.display === "none") {
    detailsRow.style.display = "table-row";
    detailsRow.style.backgroundColor = row.style.backgroundColor;
  } else {
    detailsRow.style.display = "none";
  }
}
