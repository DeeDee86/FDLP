
function iniciarMath() {
    let random = Math.ceil((Math.random() * 10));
    let numUser = Number(document.getElementById('numeroIntro').value);
    let mensaje1=('Prueba otra vez')
    let mensaje2=('Enhorabuena, lo has adivinado')

    while (numUser !== random) {

        document.getElementById("parrafo").innerHTML=mensaje1 ;
        numUser++;    

    } if (numUser===random) { 
     
     document.getElementById("parrafo").innerHTM=mensaje2; }
}
