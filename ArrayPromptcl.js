function iniciarPrompt() {


  let numIntroducido = document.getElementById('escribeNum').value

  numIntroducido = Number(numIntroducido)

  const palabrasIntro=[]/*la constante tiene que estar declarada antes 
  del bucle,si la ponemos dentro se va a borrar cada vez que inciamos
  el prompt */
  

  for (let counter = 0; counter < numIntroducido; counter++) {
    palabrasIntro[counter] = prompt('Introduce una palabra') // 
  } /* el contador nos dice cuantas palabras tenemos que almacenar*/

  document.getElementById('palabras').innerHTML = palabrasIntro
}
