const sumar = () => {
    const value1 = document.getElementById("entrada1").value
    const value2 = document.getElementById("entrada2").value
    let resultado = parseFloat(value1) + parseFloat(value2)
    document.getElementById("mensajeValor").innerHTML ="Resultado: "+ resultado;
    document.getElementById("mensajeValor").setAttribute("style", "padding: 10px; width: 300px;border: 1px solid #000;");

}
const restar = () => {
    const value1 = document.getElementById("entrada1").value
    const value2 = document.getElementById("entrada2").value
    let resultado = parseFloat(value1) - parseFloat(value2)
    document.getElementById("mensajeValor").innerHTML = "Resultado: "+ resultado;
    document.getElementById("mensajeValor").setAttribute("style", "padding: 10px; width: 300px;border: 1px solid #000;");

}

const multiplicar = () => {
    const value1 = document.getElementById("entrada1").value
    const value2 = document.getElementById("entrada2").value
    let resultado = parseFloat(value1) * parseFloat(value2)
    document.getElementById("mensajeValor").innerHTML ="Resultado: "+ resultado;
    document.getElementById("mensajeValor").setAttribute("style", "padding: 10px; width: 300px;border: 1px solid #000;");
}

const dividir = () => {
    const value1 = document.getElementById("entrada1").value
    const value2 = document.getElementById("entrada2").value
    console.log(value2)
    if(value2 === "0")
    {
        document.getElementById("mensajeValor").innerHTML ="No se puede dividir por cero";

    }else {
        let resultado = parseFloat(value1) / parseFloat(value2)
        document.getElementById("mensajeValor").innerHTML = "Resultado: " + resultado;
    }
    document.getElementById("mensajeValor").setAttribute("style", "padding: 10px; width: 300px;border: 1px solid #000;");

}