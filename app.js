const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea() {
	if (input.value) {
		let tareaLista = document.createElement('div');
		tareaLista.classList.add('tarea');

		let iconoEditar = document.createElement('i');
		iconoEditar.classList.add('bi', 'bi-pencil-square', 'icono-editar');

		let texto = document.createElement('p');
		texto.classList.add('texto');
		texto.innerText = input.value;
		texto.id = 'editableElement';

		// Establecer el atributo contentEditable en 'true'
		iconoEditar.addEventListener('click', (e) => {
			texto.contentEditable = true;
			let colorar = e.target;
			colorar.classList.toggle('icono-editar-celeste');
		});
		texto.spellcheck = false;
		// Añadir el elemento al cuerpo del documento
		document.body.appendChild(texto);

		// Puedes utilizar JavaScript para realizar acciones cuando el contenido cambie

		tareaLista.appendChild(texto);

		let iconos = document.createElement('div');
		iconos.classList.add('iconos');

		tareaLista.appendChild(iconos);

		let iconoCompletar = document.createElement('i');
		iconoCompletar.classList.add(
			'bi',
			'bi-check-circle-fill',
			'icono-completar'
		);

		iconoCompletar.addEventListener('click', tareaCompletada);

		let iconoEliminar = document.createElement('i');
		iconoEliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');

		iconoEliminar.addEventListener('click', tareaEliminada);

		iconos.append(iconoEditar, iconoCompletar, iconoEliminar);

		listaDeTareas.appendChild(tareaLista);
	} else {
		alert('Ingrese una Tarea');
	}
}

function tareaCompletada(e) {
	let completar = e.target.parentNode.parentNode;
	completar.classList.toggle('completada');

	let colorar = e.target;
	colorar.classList.toggle('icono-completar-verde');
}

function tareaEliminada(e) {
	let eliminar = e.target.parentNode.parentNode;
	eliminar.remove();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		agregarTarea();
	}
});
