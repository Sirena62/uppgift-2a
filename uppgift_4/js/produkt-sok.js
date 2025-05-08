/**
 * Produktsökningsfunktion
 *
 * Detta script hanterar realtidssökning i produktlistan.
 * När användaren skriver i sökfältet filtreras produkterna automatiskt.
 */

// Vänta tills DOM är helt laddad innan vi kör koden
document.addEventListener("DOMContentLoaded", function () {
    // Hämta sökfältet och alla produktelement
    const searchBar = document.getElementById("searchBar");
    const produkter = document.querySelectorAll(".produkt");

    // Lägg till en händelselyssnare för input-händelser på sökfältet
    searchBar.addEventListener("input", function () {
      // Konvertera söktermen till gemener för att göra sökningen skiftlägesokänslig
      const query = this.value.toLowerCase();

      // Gå igenom varje produkt och kontrollera om den matchar söktermen
      produkter.forEach((p) => {
        const text = p.textContent.toLowerCase();
        // Visa produkten om den innehåller söktermen, annars dölj den
        p.style.display = text.includes(query) ? "block" : "none";
      });
    });
  });
