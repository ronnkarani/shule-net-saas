// assets/js/dashboards.js
document.querySelectorAll("[data-include]").forEach(el => {
  fetch(el.dataset.include)
    .then(res => res.text())
    .then(data => el.innerHTML = data);
});