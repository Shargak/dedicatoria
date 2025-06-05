document.addEventListener('DOMContentLoaded', () => {
    const mensajes = [
        "¡Eres mi persona favorita!",
        "¡Gracias por estar siempre!",
        "¡Te quiero mucho!",
        "Eres una madre maravillosa, y nuestro hijo es afortunado de tenerte.",
        "Gracias por ser la mamá ideal, por llenar nuestras vidas de amor.", 
        "En definitiva, te quiero mucho",
        "Besitoooos",
        "Muack!!!",
        "Haber quien manda un mensaje de amor tan original ;)"
       
    ];
    const mensajeDiv = document.getElementById('mensaje');
    const boton = document.querySelector('.btn-corazon');
    let indice = 0;

    boton.addEventListener('click', () => {
        mensajeDiv.textContent = mensajes[indice];
        mensajeDiv.style.display = "block";
        mensajeDiv.classList.remove('flotar'); // Reinicia animación
        void mensajeDiv.offsetWidth; // Fuerza reflow para reiniciar animación
        mensajeDiv.classList.add('flotar');
        indice = (indice + 1) % mensajes.length;
    });

    mensajeDiv.addEventListener('animationend', () => {
        mensajeDiv.style.display = "none";
    });
});
