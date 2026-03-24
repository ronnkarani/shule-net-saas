document.addEventListener("DOMContentLoaded", ()=>{

  document.querySelectorAll("[data-include]").forEach(el=>{
    fetch(el.dataset.include)
      .then(res=>{
        if(!res.ok) throw new Error("Failed to load " + el.dataset.include);
        return res.text();
      })
      .then(data=>{
        el.innerHTML = data;
        if(el.dataset.include.includes("dashboard-navbar")) initNavbar();
        if(el.dataset.include.includes("sidebar")) initSidebar();
      })
      .catch(err=>console.error(err));
  });

});

// NAVBAR DROPDOWN
function initNavbar(){
  const userMenu = document.getElementById("userMenu");
  const dropdown = document.getElementById("dropdownMenu");
  if(!userMenu || !dropdown) return;

  userMenu.addEventListener("click", e=>{
    e.stopPropagation();
    dropdown.classList.toggle("show");
  });
  document.addEventListener("click", ()=>{ dropdown.classList.remove("show"); });
}

// SIDEBAR TOGGLE
function initSidebar(){
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  if(!sidebar) return;

  toggleBtn.addEventListener("click", ()=>{ sidebar.classList.toggle("collapsed"); });

  // Optional: double click anywhere to toggle
  sidebar.addEventListener("dblclick", ()=>{ sidebar.classList.toggle("collapsed"); });
}