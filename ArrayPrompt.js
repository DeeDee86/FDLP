function iniciarPrompt() {
    let numIntroducido=document.getElementById('escribeNum').value
    numIntroducido=Number(numIntroducido)

    for (let counter=0; counter<numIntroducido; counter++) {
        prompt("Introduce una palabra")
    }
  document.getElementById('palabras').innerHTML=prompt  
}
