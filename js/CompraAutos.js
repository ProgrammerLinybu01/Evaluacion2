const formCompra = document.getElementById("compra");
const localSto = window.localStorage;
function cambiospa2(ev){
    
    let id = ev.target.value;
    let spa2 = JSON.parse(localSto["spa"]);
    let selected = spa2.find(e => e.id == id);
    formCompra["precio"].value = selected["precio"];
    let iva = (selected["precio"] * 16) / 100;
    let specialTax = (selected["precio"] * 4) / 100;
    formCompra["iva"].value = iva.toFixed(2);
    formCompra["impuesto"].value = specialTax.toFixed(2);
    formCompra["total"].value = [iva, specialTax, selected["precio"]].reduce((a,b) => parseFloat(a) + parseFloat(b));
    formCompra["puntos"].value = selected["puntos"]
}
function resumenCompra(ev){
    if(validacion(formCompra).length > 0){
        return;
    }
    let idCliente = formCompra["cliente"].value;
    let cliente = JSON.parse(localSto["cliente"]);
    cliente.find((e,i) => {
        if(e.id == idCliente){
            cliente[i]["puntos"] = parseInt(cliente[i]["puntos"]) + parseInt(formCompra["puntos"].value);
            return;
        }
    })
    alert("Compra Realizada");
    window.location = "./Puntos.html";
    localSto.setItem("cliente", JSON.stringify(cliente));
}
formCompra["spa2"].addEventListener("click", cambiospa2);
formCompra["guardar"].addEventListener("click", resumenCompra);