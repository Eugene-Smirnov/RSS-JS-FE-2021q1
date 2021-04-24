const filters = document.querySelector('.filters');
function outputHandler(event) {
  const input = event.target;
  input.nextElementSibling.value = input.value;
}
filters.addEventListener("input", outputHandler);

function filterValueChanger(event) {
  if (event.target.name == undefined || event.target.name == "result") return;
  const input = event.target;
  const sizing = input.dataset.sizing;
  document.documentElement.style.setProperty(`--${input.name}`, input.value + sizing);
}

filters.addEventListener("input", filterValueChanger);
