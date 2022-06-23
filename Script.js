function calcular(){
    let elementoAprov = document.getElementById("mediaDasNotas").value
    let elementoNota1 = document.getElementById("primeiraNota").value
    let elementoNota2 = document.getElementById("segundaNota").value
    let elementoNota3 = document.getElementById("terceiraNota").value
    let elementoNota4 = document.getElementById("QuartaNota").value

    let aprov = parseFloat(elementoAprov)
    let n1 = parseFloat(elementoNota1)
    let n2 = parseFloat(elementoNota2)
    let n3 = parseFloat(elementoNota3)
    let n4 = parseFloat(elementoNota4)

    let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2)

    let txt = media + " "

    let passou;

    if(media >= aprov){
        passou = "Parabéns, você foi aprovado!!"
    }

    else{
        passou = "Que pena, voce foi reprovado..."
    }

    console.log(txt)

    if(txt !== "NaN "){
        let mostrarElemento1 = document.getElementById("notareal")
        mostrarElemento1.innerHTML = txt

        let mostrarElemento2 = document.getElementById("passou")
        mostrarElemento2.innerHTML = passou
    } 

    else{
        alert("preencha todos os campos corretamente!")
    }
}