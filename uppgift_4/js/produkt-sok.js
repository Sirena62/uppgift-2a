document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const produkter = document.querySelectorAll(".produkt");
  
    searchBar.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      produkter.forEach((p) => {
        const text = p.textContent.toLowerCase();
        p.style.display = text.includes(query) ? "block" : "none";
      });
    });
  });
  