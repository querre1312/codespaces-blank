// Obtener el parámetro 'id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const recetaId = urlParams.get('id');

// Datos de la receta médica (simulando una base de datos)
const recetas = {
    '1234567890': {
        nombre: 'Juan Pérez',  // Paciente
        medicamento: 'Toseina 2mg/ml Solución oral',
        dosis: '10 ml cada 8 horas',
        medico: 'Dra. Maria Teresa Miro Coll',
        numColegiado: '080806266',
        dni: '73649120L',
        fechaNacimiento: '10-04-2001'
    }
};

// Mostrar la receta si se encuentra
const recetaInfo = document.getElementById('receta-info');
if (recetaId && recetas[recetaId]) {
    const receta = recetas[recetaId];
    recetaInfo.innerHTML = `
        <p><strong>Paciente:</strong> ${receta.nombre}</p>
        <p><strong>DNI:</strong> ${receta.dni}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${receta.fechaNacimiento}</p>
        <p><strong>Medicamento:</strong> ${receta.medicamento}</p>
        <p><strong>Dosis:</strong> ${receta.dosis}</p>
        <p><strong>Médico:</strong> ${receta.medico}</p>
        <p><strong>Número Colegiado:</strong> ${receta.numColegiado}</p>
    `;
} else {
    recetaInfo.innerHTML = '<p>Receta no encontrada o ID inválido.</p>';
}