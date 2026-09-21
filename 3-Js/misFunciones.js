/**
 * Conversion de unidades de metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor ingresado por el usuario
 */
convertirUnidades = (id, valor) => {
    let metros, pulgadas, pies, yardas;

    metros = document.getElementById("metro").value;
    pulgadas = document.getElementById("pulgada").value;
    pies = document.getElementById("pie").value;
    yardas = document.getElementById("yarda").value;


    if(isNaN(valor)){
        alert("Se ingreso un valor no numerico en: "+ id);
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
    } else if(id === "metro"){
        pulgadas = metros*39.3701;
        pies = metros*3.28084;
        yardas = metros*1.09631;
    } else if(id === "pulgada"){
        metros = pulgadas*0.0254;
        pies = pulgadas*0.0833333;
        yardas = pulgadas*0.0277778;
    } else if(id === "pie"){
        metros = pies*0.3048;
        pulgadas = pies*12;
        yardas = pies*0.333333;
    } else if(id === "yarda"){
        metros = yardas*0.9144;
        pulgadas = yardas*36;
        pies = yardas*3;
    }

    document.getElementById("metro").value = metros;
    document.getElementById("pulgada").value = pulgadas;
    document.getElementById("pie").value = pies;
    document.getElementById("yarda").value = yardas;
}

/**
 * Conversion de grados y radianes
 * @method convertirGR
 * @param {string} id - Id del elemento input en el html
 */
function convertirGR(id){
    let grad, rad;
    if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180
        document.getElementById("radianes").value = rad;
    }else{
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
        document.getElementById("grados").value = grad;
    }

}

/**
 * Mostrar u ocultar div segun seleccion del usuario
 * @method mostrarOcultar
 * @param {string} valor - valor del Id del radio button seleccionado
 */
mostrarOcultar = (valor) => {
    const displayDiv = valor==="val_mostrar" ? 'block' : 'none';
    document.getElementById("unDiv").style.display = displayDiv;

    //
    //  if(valor==="val_mostrar"){
    //      document.getElementById("unDiv").style.display = 'block';
    //  }else{
    //      document.getElementById("unDiv").style.display = 'none';
    //  }
}