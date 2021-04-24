// 1 // Filter
// Output value indication
const filters = document.querySelector('.filters');
function outputHandler(event) {
  const input = event.target;
  input.nextElementSibling.value = input.value;
}
filters.addEventListener('input', outputHandler);
// Chaining input to filter value 
function filterValueChanger(event) {
  if (event.target.name == undefined || event.target.name == 'result') return;
  const input = event.target;
  const sizing = input.dataset.sizing;
  document.documentElement.style.setProperty(`--${input.name}`, input.value + sizing);
}
filters.addEventListener('input', filterValueChanger);
// 2 // Buttons
// Reset button
const buttonReset = document.querySelector('.btn-reset');
function filterResetValue() {
  const inputs = filters.querySelectorAll('input');
  inputs.forEach((item) => (item.name === 'saturate') ? item.value = 100 : item.value = 0);
  inputs.forEach((item) => item.nextElementSibling.value = item.value);
  inputs.forEach((item) => {
    document.documentElement.style.setProperty(`--${item.name}`, item.value + item.dataset.sizing);
  });
}
buttonReset.addEventListener('click', filterResetValue);