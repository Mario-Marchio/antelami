// Posizione dell'indirizzo
var posizione = [44.82149189544398, 9.990969964144268];

// Creazione della mappa
var mappa = L.map("mappa").setView(posizione, 30);

// Aggiungi un layer di OpenStreetMap alla mappa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mappa);

// Aggiungi un marcatore alla posizione
var marcatore = L.marker(posizione)
  .addTo(mappa)
  .bindPopup("CASA ANTELAMI")
  .openPopup();

// Aggiungi un gestore di eventi al marcatore per catturare il clic
marcatore.on("click", function () {
  // Costruisci l'URL di Google Maps con le indicazioni
  var urlGoogleMaps =
    "https://www.google.com/maps/dir/?api=1" +
    "&destination=" +
    posizione[0] +
    "," +
    posizione[1];

  // Apri una nuova finestra o scheda con l'URL di Google Maps
  window.open(urlGoogleMaps, "_blank");
});

// mostrameno e più
$(document).ready(function () {
  var servicesContainer = $(".d-flex.flex-wrap#services-container");
  var services = servicesContainer.find(".container-card");
  var showMoreButton = $("#show-more-button");
  var showLessButton = $("#show-less-button");

  // Nascondi tutti i servizi tranne i primi 4
  services.filter(":gt(3)").hide();

  // Nascondi il pulsante "Mostra meno" inizialmente
  showLessButton.hide();

  // Gestisci il click sul pulsante "Mostra altri"
  showMoreButton.on("click", function (e) {
    e.preventDefault();
    services.slideDown();
    showMoreButton.hide();
    showLessButton.show();

    // Aggiungi stile ai nuovi servizi per centrarli
    servicesContainer.find(".container-card:hidden").css({
      // Aggiungi qui gli stili necessari per centrare i nuovi servizi
    });

    // Scrolla verso l'inizio della sezione servizi
    $("html, body").scrollTop(servicesContainer.offset().top);
  });

  // Gestisci il click sul pulsante "Mostra meno"
  showLessButton.on("click", function (e) {
    e.preventDefault();
    services.filter(":gt(3)").slideUp(function () {
      if (services.filter(":visible").length <= 4) {
        showLessButton.hide();
        showMoreButton.show();

        // Scrolla verso l'inizio della sezione servizi
        $("html, body").scrollTop(servicesContainer.offset().top);
      }
    });
  });
});

var scrollToTopButton = document.getElementById("scroll-to-top");

// Aggiungi un ascoltatore di eventi per gestire il clic
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
