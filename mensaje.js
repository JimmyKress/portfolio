const btn = document.getElementById('button');

document.getElementById("form").addEventListener("submit", function(event) {
    // Evitar el envío por defecto para validar
    event.preventDefault();

    // Obtener los valores de cada campo
    const name = document.getElementById("user_name").value.trim();
    const phone = document.getElementById("user_phone").value.trim();
    const email = document.getElementById("user_email").value.trim();
    const subject = document.getElementById("user_subject").value.trim();
    const message = document.getElementById("user_message").value.trim();

    // Verificar si algún campo está vacío
    if (!name || !phone || !email || !subject || !message) {
        alert("Por favor, completa todos los campos antes de enviar el mensaje.");
        return; // Salir de la función sin enviar
    }

    // Todos los campos están completos, enviar el formulario con emailjs
    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_aj1ab91';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Correo enviado';
            alert('¡Mensaje enviado con éxito!');
        }, (err) => {
            btn.value = 'Enviar Mensaje';
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
        });
});
