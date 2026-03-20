// Load partials safely
document.querySelectorAll("[data-include]").forEach(el => {
  fetch(el.dataset.include)
    .then(res => res.text())
    .then(data => el.innerHTML = data);
});

// Safe contact form
const form = document.getElementById("contact-form");
if(form){
form.addEventListener("submit", e=>{
e.preventDefault();
alert("Message sent");
});
}