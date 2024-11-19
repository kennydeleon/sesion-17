document.getElementById('submmitButtom').addEventListener('click', function (e) {


    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const genero = document.querySelector('input[name="genero"]:checked');
    const imagen = document.getElementById('imagen').files[0];

    if (!nombre || !apellido || !telefono || !correo || !direccion || !edad || !imagen || !genero) { 
        alert('Por favor, complete todos los campos.');
        return;
    }

    const imgPermitidas = ['image/jpeg', 'image/png'];
    if (!imgPermitidas.includes(imagen.type)) {
    alert('Por favor, suba una imagen en formato JPG o PNG.');
    return;
    }
    alert('Formulario enviado correctamente.');
    });
