document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.dataset.include)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;

        if (el.dataset.include.includes("dashboard-navbar")) initNavbar();
        if (el.dataset.include.includes("sidebar")) initSidebar();
      });
  });

});

/* NAVBAR */
function initNavbar(){
  const userMenu = document.getElementById("userMenu");
  const dropdown = document.getElementById("dropdownMenu");

  if(!userMenu || !dropdown) return;

  userMenu.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", () => {
    dropdown.style.display = "none";
  });
}

/* SIDEBAR */
function initSidebar(){
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  if(!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");

    // SAVE STATE
    localStorage.setItem("sidebarCollapsed",
      sidebar.classList.contains("collapsed"));
  });

  // LOAD STATE
  if(localStorage.getItem("sidebarCollapsed") === "true"){
    sidebar.classList.add("collapsed");
  }
}