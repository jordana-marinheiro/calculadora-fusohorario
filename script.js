function converterHora() {
    let inHoraBrasil = document.getElementById('inHoraBrasil')
    let outSaida = document.getElementById('outSaida')

    let horaBrasil = Number(inHoraBrasil.value)

    let horaFranca = horaBrasil + 5

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    outSaida.innerHTML = `Hora na França: ${horaFranca.toFixed(2)}`

}
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', converterHora)