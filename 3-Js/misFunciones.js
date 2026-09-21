/**
 * Conversion de unidades de metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor ingresado por el usuario
 */
function convertirUnidades(id, valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor no numerico en: "+ id);
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    } else if(id === "metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor*3.28084;
        document.getElementById("yarda").value = valor*1.09631;
    } else if(id === "pulgada"){
        document.getElementById("metro").value = valor*0.0254;
        document.getElementById("pie").value = valor*0.0833333;
        document.getElementById("yarda").value = valor*0.0277778;
    } else if(id === "pie"){
        document.getElementById("metro").value = valor*0.3048;
        document.getElementById("pulgada").value = valor*12;
        document.getElementById("yarda").value = valor*0.333333;
    } else if(id === "yarda"){
        document.getElementById("metro").value = valor*0.9144;
        document.getElementById("pulgada").value = valor*36;
        document.getElementById("pie").value = valor*3;
    }
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