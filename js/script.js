document.getElementById('form-contacto').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  if(nombre && correo && mensaje){
    document.getElementById('respuesta').innerText = 'Gracias por escribirnos, ' + nombre + '. Te responderemos pronto.';
    this.reset();
  } else {
    document.getElementById('respuesta').innerText = 'Por favor completa todos los campos.';
  }
});
  