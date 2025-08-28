const button = document.getElementById("submit")
const inputName = document.getElementById("inpName")
const inputEmail = document.getElementById("inpEmail")

button.addEventListener("click", function () {
    // e.preventDefault();
        inputName.value = ""; // Clears the input field
    inputEmail.value = "";
    successModal.style.display = "block";
  setTimeout(function() {
    successModal.style.display = "none";
  }, 2000); // Modal disappears after 2 seconds
});

// Close navbar when clicking a nav-link (only for small screens)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 990.40) {
      const navbarCollapse = document.getElementById('navbarNav');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });
});