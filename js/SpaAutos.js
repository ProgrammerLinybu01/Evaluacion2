let filaSeleccionada = null;
let indiceSPA = 1;
document.getElementById("SpaForm").addEventListener("submit", onSubmitSpa);

function onSubmitSpa(event) {
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
Nom: document.getElementById("NombreServicio").value,
Val: document.getElementById("ValorServicio").value,
Des: document.getElementById("Descripción").value,
Puntos: document.getElementById("Puntos").value,
};
}

function insertarDatosClientes(data) {
const tablaC = document.getElementById("tbodySpa");
const nuevaFila = tablaC.insertRow(tablaC.rows.length);
const columnaIndice = nuevaFila.insertCell(0);
const columna1 = nuevaFila.insertCell(1);
const columna2 = nuevaFila.insertCell(2);
const columna3 = nuevaFila.insertCell(3);
const columna4 = nuevaFila.insertCell(4);
const columnaAcciones = nuevaFila.insertCell(5);

columnaIndice.innerHTML = indiceSPA;
columna1.innerHTML = data.Nom;
columna2.innerHTML = data.Val;
columna3.innerHTML = data.Des;
columna4.innerHTML = data.Puntos;
columnaAcciones.innerHTML = `
<input class="submit" type="button" onClick="editarDatosClientes(this)" value="Editar📑">
<input class="submit" type="button" onClick="borrarDatosClientes(this)" value="Borrar🚫">
`;

indiceSPA++;
}

function vaciarFormularioClientes() {
document.getElementById("NombreServicio").value = "";
document.getElementById("ValorServicio").value = "";
document.getElementById("Descripción").value = "";
document.getElementById("Puntos").value = "";

filaSeleccionada = null;
}

function editarDatosClientes(td) {
filaSeleccionada = td.parentElement.parentElement;
document.getElementById("NombreServicio").value = filaSeleccionada.cells[1].innerHTML;
document.getElementById("ValorServicio").value = filaSeleccionada.cells[2].innerHTML;
document.getElementById("Descripción").value = filaSeleccionada.cells[3].innerHTML;
document.getElementById("Puntos").value = filaSeleccionada.cells[4].innerHTML;

const modal = new bootstrap.Modal(document.getElementById("exampleModalSPA"));
modal.show();
}

function actualizarDatosClientes(data) {
filaSeleccionada.cells[1].innerHTML = data.Nom;
filaSeleccionada.cells[2].innerHTML = data.Val;
filaSeleccionada.cells[3].innerHTML = data.Des;
filaSeleccionada.cells[4].innerHTML = data.Puntos;
}

function borrarDatosClientes(td) {
if (confirm("¿Seguro de borrar este registro?")) {
const row = td.parentElement.parentElement;
document.getElementById("tbodySpa").deleteRow(row.rowIndex);
vaciarFormularioClientes();
}
}
function buscarDatos() {
const inputBusqueda = document.getElementById("nom2bre").value.toLowerCase();
const tablaC = document.getElementById("tbodySpa");
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
dateFormat: 'yy-mm-dd', 
changeYear: true, 
changeMonth: true
});
});

$(document).ready(function() {
$("#Nacimiento").datepicker({
dateFormat: 'yy-mm-dd', 
changeYear: true, 
changeMonth: true 
});
});

function validarNumeros(input) {
input.value = input.value.replace(/\D/g, ''); 
}