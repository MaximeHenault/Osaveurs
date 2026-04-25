(function(){
    emailjs.init("hgbkXqC-WR0npsZxF");
})();

document.getElementById("reservation-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var btn = this.querySelector('button[type="submit"]');
    if (btn) {
        btn.textContent = "Envoi en cours…";
        btn.disabled = true;
    }

    emailjs.sendForm("service_q0cvm7a", "template_snb9ccd", this)
    .then(function() {
        // Show inline success message instead of redirect
        var formContainer = document.getElementById("form-container");
        var successMessage = document.getElementById("success-message");
        if (formContainer && successMessage) {
            formContainer.style.display = "none";
            successMessage.style.display = "block";
        } else {
            // Fallback redirect if elements aren't present
            window.location = "index.html";
        }
    }, function(error) {
        if (btn) {
            btn.textContent = "Confirmer la réservation";
            btn.disabled = false;
        }
        alert("Une erreur est survenue lors de l'envoi. Veuillez nous appeler au 02 27 34 72 43.\n\nDétail : " + JSON.stringify(error));
    });
});