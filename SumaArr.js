function calcularSuma() {
    let numero1=parseInt(document.getElementById("numIntro1").value)/*tiene que ser let
     porque la redeclaramos en el bucle*/
    let numero2=parseInt(document.getElementById("numIntro2").value)
    
    let sumaNum=0//tiene que ser una variable let
    for (; numero1<=numero2; numero1++) {
        sumaNum+=numero1
    }
    document.getElementById("resultado").innerHTML=sumaNum
}
