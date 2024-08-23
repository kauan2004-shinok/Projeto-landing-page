var setaEsquerda = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaDireita = window.document.getElementById("seta-direita")

function rolarPraDireita() {
    bruna.style = "display:none"
    samantha.style = "display:inline-block"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:inline-block"
  
}

function rolarPraEsquerda() {
    bruna.style = "display:inline-block"
    samantha.style = "display:none"
    setaDireita.style = "display:inline-block"
    setaEsquerda.style = "display:none"
}