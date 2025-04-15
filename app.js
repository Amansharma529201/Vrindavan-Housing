function viewDetails(city) {
    alert("Showing more details for " + city + " Society.\nOur executive will contact you shortly.");
  }

  function openForm() {
    alert("Redirecting to contact form.\n(Coming soon)");
  }

  function openWhatsApp() {
    const phone = "919999999999"; // replace with actual WhatsApp number
    window.open(`https://wa.me/${phone}`, "_blank");
  }