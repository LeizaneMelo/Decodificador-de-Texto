
function criptografarTexto() {
    let inputText = document.getElementById('input-texto').value;
    if (inputText.trim() === "") {
        displaySemResultado();
        return;
    }

    let textoCriptografado = inputText.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    document.getElementById('output-texto').value = textoCriptografado;
    displayResultado();
}

function descriptografarTexto() {
    let inputText = document.getElementById('input-texto').value;
    if (inputText.trim() === "") {
        displaySemResultado();
        return;
    }

    let textoDescriptografado = inputText.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');
    document.getElementById('output-texto').value = textoDescriptografado;
    displayResultado();
}

function copiar() {
    let outputText = document.getElementById('output-texto');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function displayResultado() {
    document.getElementById('sem-resultado').classList.add('esconder');
    document.getElementById('resultado').classList.remove('esconder');
}

function displaySemResultado() {
    document.getElementById('sem-resultado').classList.remove('esconder');
    document.getElementById('resultado').classList.add('esconder');
}