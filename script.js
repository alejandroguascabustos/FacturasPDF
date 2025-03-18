// Función para generar la factura en PDF
function generarFactura() {
    // Importamos jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Capturamos los valores del formulario
    let cliente = document.getElementById("cliente").value;
    let tipoServicio = document.getElementById("tipodeservicio").value;
    let tipoBicicleta = document.getElementById("tipobicicleta").value;
    let medida = document.getElementById("rin").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let fechaHora = document.getElementById("fecha-hora").value;
    let comentarios = document.getElementById("comentarios").value;
    let valorPagar = parseFloat(document.getElementById("valor_pagar").value);

    // Agregamos validación para verificar que los campos requeridos no estén vacíos
    if (cliente === "" || tipoServicio === "" || isNaN(valorPagar)) {
        alert("Por favor, complete los campos obligatorios.");
        return;
    }

    // Formatear el valor a pagar con dos decimales y separadores de miles
    let valorPagarFormateado = valorPagar.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Agregamos el contenido al PDF usando el metodo .set para modificar caracteristicas del documento
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Factura de Servicio", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    let y = 40; // Posición inicial en Y
    doc.text(`Cliente: ${cliente}`, 20, y);
    doc.text(`Tipo de Servicio: ${tipoServicio}`, 20, y + 10);
    doc.text(`Tipo de Bicicleta: ${tipoBicicleta}`, 20, y + 20);
    doc.text(`Medida del Rin: ${medida}`, 20, y + 30);
    doc.text(`Teléfono: ${telefono}`, 20, y + 40);
    doc.text(`Correo: ${correo}`, 20, y + 50);
    doc.text(`Fecha y Hora de Atención: ${fechaHora}`, 20, y + 60);
    doc.text(`Comentarios: ${comentarios}`, 20, y + 70);
    doc.text(`Valor a Pagar: $${valorPagarFormateado}`, 20, y + 80);

    // Agregar una imagen (logo) al PDF
    const logo = "/Remisiones de servicio en pdf/Imagenes/logo.png"; // Reemplázalo con la ruta o Base64 de la imagen
    doc.addImage(logo, "PNG", 80, 10, 20, 20); // (imagen, formato, x, y, ancho, alto)

    // Abrir el PDF en una nueva pestaña
    window.open(doc.output("bloburl"), "_blank");

    // Limpiar el formulario
    document.getElementById("cliente").value = "";
    document.getElementById("tipodeservicio").value = "";
    document.getElementById("tipobicicleta").value = "";
    document.getElementById("rin").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("fecha-hora").value = "";
    document.getElementById("comentarios").value = "";
    document.getElementById("valor_pagar").value = "";
}


