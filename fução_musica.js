const audio = document.getElementById('musica');
    const overlay = document.getElementById('overlay');

    function iniciar() {
        audio.play().catch(function(error) {
            console.log("Erro ao tocar áudio: ", error);
        });
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }

    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            audio.pause();
        } else {
            if (overlay.style.display === 'none') {
                audio.play();
            }
        }
    });