const frases = [
    "A vida é uma aventura ousada, ou nada.",
    "Acredite que você pode e você já está no meio do caminho.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    // Adicione mais frases aqui
];

const fraseElemento = document.getElementById('frase');
fraseElemento.textContent = frases[Math.floor(Math.random() * frases.length)];

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log("Localização:", position.coords.latitude, position.coords.longitude);
        },
        function(error) {
            console.error("Erro ao obter localização:", error);
        }
    );
} else {
    alert("Geolocalização não suportada pelo seu navegador.");
}
