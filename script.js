var comandos = 0

function transita_comands(auto) {

    if (typeof auto != "undefined")
        comandos = 0;

    let transitador = document.getElementById("transitador");
    transitador.style.height = "0px";
    transitador.style.animation = "transita_comands 1s";

    setTimeout(() => {
        if (comandos == 1) {
            document.getElementById("comandos").style.display = "none";
            document.getElementById("infos_iniciais").style.display = "block";
            document.getElementById("infos_secundarias").style.display = "block";
        } else {
            document.getElementById("comandos").style.display = "block";
            document.getElementById("infos_iniciais").style.display = "none";
            document.getElementById("infos_secundarias").style.display = "none";
        }
    }, 500);

    setTimeout(() => {
        transitador.style.animation = "none";

        if (comandos == 0)
            comandos = 1;
        else
            comandos = 0;

        localStorage.setItem("site_alonsal_comandos", comandos);
    }, 1000);
}