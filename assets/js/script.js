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

    const dateInput = document.getElementById("date");

    let formattedDate = "";

    if (dateInput.value) {
        formattedDate = new Date(dateInput.value)
            .toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
    }

    emailjs.send("service_q0cvm7a", "template_snb9ccd", {
        name: document.getElementById("name").value,
        people: document.getElementById("people").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        date: formattedDate,
        time: document.getElementById("time").value,
        message: document.getElementById("message").value
    })
    .then(function() {

        var formContainer = document.getElementById("form-container");
        var successMessage = document.getElementById("success-message");

        if (formContainer && successMessage) {
            formContainer.style.display = "none";
            successMessage.style.display = "block";
        } else {
            window.location = "index.html";
        }

    }, function(error) {

        if (btn) {
            btn.textContent = "Confirmer la réservation";
            btn.disabled = false;
        }

        alert(
            "Une erreur est survenue lors de l'envoi. " +
            "Veuillez nous appeler au 02 27 34 72 43.\n\n" +
            JSON.stringify(error)
        );
    });
});
