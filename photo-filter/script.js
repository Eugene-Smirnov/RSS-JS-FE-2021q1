const filters = document.querySelector('.filters');
function outputHandler(event) {
  const input = event.target;
  input.nextElementSibling.value = input.value;
}
filters.addEventListener("input", outputHandler);