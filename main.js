// Listen click on the button

const boton = document.getElementById('boton');
boton.addEventListener('click', preguntarNombre);

// Save references to headings
const h1 = document.getElementById('h1');

const h2 = document.getElementById('h2');

// Ask and save the user's name

function preguntarNombre() {
  const nombre = prompt('Introduce your name');
  mostrarNombre(nombre);
}

// Insert the name instead of the dots...

function mostrarNombre(nombre) {
  h2.textContent = 'Hello ';
  h1.textContent = nombre;
}
