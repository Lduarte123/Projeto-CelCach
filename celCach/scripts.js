function copyPix() {
        const pixText = document.getElementById("pixCode").innerText;
        navigator.clipboard.writeText(pixText)
            .then(() => {
                alert("PIX copiado com sucesso!");
            })
            .catch(err => {
                alert("Erro ao copiar o PIX: " + err);
            });
    }
