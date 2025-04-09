document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');
    const tabla = document.getElementById('tablaRegistros').querySelector('tbody');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        // Captura los valores del form
        const nombre = document.getElementById('nombre').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo = document.getElementById('correo').value;
        const nickname = document.getElementById('nickname').value;
        const juego = document.getElementById('juego').value;

        // crear las filas de los datos de que pasaron del formulario
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellidos}</td>
            <td>${correo}</td>
            <td>${nickname}</td>
            <td>${juego}</td>
            <td><button class="btnEliminar">Eliminar</button></td>
        `;

        // Boton que elimina la fila
        fila.querySelector('.btnEliminar').addEventListener('click', () => {
            fila.remove();
        });

        // Agregar fila a la tabla
        tabla.appendChild(fila);

        // Limpiar formulario
        formulario.reset();
    });
});

