document.addEventListener('DOMContentLoaded', function() {
    // Código para el menú lateral desplegable
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Código para el Flipbook
    const flipbook = document.querySelector('.flipbook');

    if (flipbook) {
        $(flipbook).turn({
            width: 800,
            height: 600,
            autoCenter: true
        });
    }

    // Código para el formulario de colaboración
    const formularioColaboracion = document.getElementById('formulario-colaboracion');
    if (formularioColaboracion) {
        formularioColaboracion.addEventListener('submit', function(e) {
            e.preventDefault(); // Evitar envío real del formulario

            // Extraer datos del formulario
            const nombre = formularioColaboracion.querySelector('input[type="text"]').value;
            const correo = formularioColaboracion.querySelector('input[type="email"]').value;
            const mensaje = formularioColaboracion.querySelector('textarea').value;

            // Validaciones básicas
            if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
                alert('Por favor, complete todos los campos.');
                return;
            }

            // Preparar datos para enviar mediante FormData
            const formData = new FormData(formularioColaboracion);

            // Envío de los datos a sendEmail.php
            fetch('sendEmail.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Correo enviado exitosamente!');
                    formularioColaboracion.reset();
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error: No se pudo enviar el correo.');
            });
        });
    }

    // Código para los botones de descarga
    const botonesDescarga = document.querySelectorAll('a[download]');
    botonesDescarga.forEach(function(boton) {
        boton.addEventListener('click', function(e) {
            console.log('Descargando archivo: ' + boton.getAttribute('href'));
            // Aquí puedes agregar acciones adicionales, como el seguimiento (tracking)
        });
    });
});
