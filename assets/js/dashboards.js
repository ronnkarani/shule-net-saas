// assets/js/dashboards.js
document.querySelectorAll("[data-include]").forEach(el => {
  fetch(el.dataset.include)
    .then(res => {
      if (!res.ok) throw new Error("Failed to load " + el.dataset.include);
      return res.text();
    })
    .then(data => el.innerHTML = data)
    .catch(err => console.error(err));
});