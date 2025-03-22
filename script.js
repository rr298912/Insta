document.addEventListener("DOMContentLoaded", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log("Localização capturada:", latitude, longitude); // Só para teste

                // Envia os dados para a API
                fetch("/api/registerLocation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ latitude, longitude })
                })
                .then(response => response.json())
                .then(data => console.log("Resposta do servidor:", data))
                .catch(error => console.error("Erro ao enviar localização:", error));
            },
            function (error) {
                console.error("Erro ao obter localização:", error);
            }
        );
    } else {
        console.error("Geolocalização não suportada pelo navegador.");
    }
});
