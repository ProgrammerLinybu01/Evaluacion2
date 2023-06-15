let filaSeleccionada = null;
let indiceC = 1;
document.getElementById("ClientesForm").addEventListener("submit", onSubmitClientes);

function onSubmitClientes(event) {
event.preventDefault();
const dataForm = leerFormularioClientes();
if (filaSeleccionada === null) {
insertarDatosClientes(dataForm);
} else {
actualizarDatosClientes(dataForm);
}
vaciarFormularioClientes();
filaSeleccionada = null;
}

function leerFormularioClientes() {
return {
Identi: document.getElementById("identificacion").value,
Name: document.getElementById("Nombres").value,
Ape: document.getElementById("Apellidos").value,
Placa: document.getElementById("Placa").value,
Tip: document.getElementById("Tipo").value,
Tel: document.getElementById("Telefono").value,
Gmail: document.getElementById("Gmail").value,
};
}

function insertarDatosClientes(data) {
const tablaC = document.getElementById("tbodyCliente");
const nuevaFila = tablaC.insertRow(tablaC.rows.length);
const columnaIndice = nuevaFila.insertCell(0);
const columna1 = nuevaFila.insertCell(1);
const columna2 = nuevaFila.insertCell(2);
const columna3 = nuevaFila.insertCell(3);
const columna4 = nuevaFila.insertCell(4);
const columna5 = nuevaFila.insertCell(5);
const columna6 = nuevaFila.insertCell(6);
const columna7 = nuevaFila.insertCell(7);
const columnaAcciones = nuevaFila.insertCell(8);

columnaIndice.innerHTML = indiceC;
columna1.innerHTML = data.Identi;
columna2.innerHTML = data.Name;
columna3.innerHTML = data.Ape;
columna4.innerHTML = data.Placa;
columna5.innerHTML = data.Tip;
columna6.innerHTML = data.Tel;
columna7.innerHTML = data.Gmail;
columnaAcciones.innerHTML = `
<input class="submit" type="button" onClick="editarDatosClientes(this)" value="Editar📑">
<input class="submit" type="button" onClick="borrarDatosClientes(this)" value="Borrar🚫">
`;

indiceC++;
}

function vaciarFormularioClientes() {
document.getElementById("identificacion").value = "";
document.getElementById("Nombres").value = "";
document.getElementById("Apellidos").value = "";
document.getElementById("Placa").value = "";
document.getElementById("Tipo").value = "";
document.getElementById("Telefono").value = "";
document.getElementById("Gmail").value = "";

filaSeleccionada = null;
}

function editarDatosClientes(td) {
filaSeleccionada = td.parentElement.parentElement;
document.getElementById("identificacion").value = filaSeleccionada.cells[1].innerHTML;
document.getElementById("Nombres").value = filaSeleccionada.cells[2].innerHTML;
document.getElementById("Apellidos").value = filaSeleccionada.cells[3].innerHTML;
document.getElementById("Placa").value = filaSeleccionada.cells[4].innerHTML;
document.getElementById("Tipo").value = filaSeleccionada.cells[5].innerHTML;
document.getElementById("Telefono").value = filaSeleccionada.cells[6].innerHTML;
document.getElementById("Gmail").value = filaSeleccionada.cells[7].innerHTML;

const modal = new bootstrap.Modal(document.getElementById("exampleModalClient"));
modal.show();
}

function actualizarDatosClientes(data) {
filaSeleccionada.cells[1].innerHTML = data.Identi;
filaSeleccionada.cells[2].innerHTML = data.Name;
filaSeleccionada.cells[3].innerHTML = data.Ape;
filaSeleccionada.cells[4].innerHTML = data.Placa;
filaSeleccionada.cells[5].innerHTML = data.Tip;
filaSeleccionada.cells[6].innerHTML = data.Tel;
filaSeleccionada.cells[7].innerHTML = data.Gmail;
}

function borrarDatosClientes(td) {
if (confirm("¿Seguro de borrar este registro?")) {
const row = td.parentElement.parentElement;
document.getElementById("tbodyCliente").deleteRow(row.rowIndex);
vaciarFormularioClientes();
}
}
function buscarDatos() {
const inputBusqueda = document.getElementById("Nombres").value.toLowerCase();
const tablaC = document.getElementById("tbodyCliente");
const filas = tablaC.getElementsByTagName("tr");

for (let i = 1; i < filas.length; i++) {
    const nombre = filas[i].getElementsByTagName("td")[2].innerHTML;
    if (nombre.toLowerCase().includes(inputBusqueda)) {
    filas[i].style.display = "";
    } else {
    filas[i].style.display = "none";
    }
}
}

$(document).ready(function() {
$("#FechaNacimiento").datepicker({
dateFormat: 'yy-mm-dd', // Establece el formato de fecha con el año primero, luego el mes y finalmente el día
changeYear: true, // Permite cambiar el año
changeMonth: true // Permite cambiar el mes
});
});

$(document).ready(function() {
$("#Nacimiento").datepicker({
dateFormat: 'yy-mm-dd', // Establece el formato de fecha con el año primero, luego el mes y finalmente el día
changeYear: true, // Permite cambiar el año
changeMonth: true // Permite cambiar el mes
});
});

function validarNumeros(input) {
input.value = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
}