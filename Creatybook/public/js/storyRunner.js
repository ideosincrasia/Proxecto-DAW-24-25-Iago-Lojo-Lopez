document.addEventListener('DOMContentLoaded', () => {
  // Cargar el JSON de la historia generado por el compilador de Ink
  fetch('/stories/miHistoria.json')
    .then(res => res.json())
    .then(storyContent => {
      // Crear la instancia de Ink.js
      const story = new inkjs.Story(storyContent);

      if (savedState) {
        story.state.LoadJson(savedState.slice(1, -1));
      }


      // Función para renderizar nuevos párrafos y opciones
      function renderNext() {
        // Mostrar párrafos continuos
        while (story.canContinue) {
          const paragraph = story.Continue();
          const pElem = document.createElement('p');
          pElem.textContent = paragraph;
          document.querySelector('#story-container').append(pElem);
        }

        // Mostrar opciones actuales
        const choicesContainer = document.querySelector('#choices-container');
        choicesContainer.innerHTML = ''; // Limpiar botones anteriores

        story.currentChoices.forEach((choice, idx) => {
          const btn = document.createElement('button');
          btn.textContent = choice.text;
          btn.className = 'btn-choice'; // Clase para estilizar
          btn.addEventListener('click', () => {
            // Elegir opción
            story.ChooseChoiceIndex(idx);
            // Guardar progreso en base de datos
            guardarProgreso(story.state.ToJson());
            console.log('Estado guardado:', story.state.ToJson());
            // Limpiar contenedores y seguir
            document.querySelector('#story-container').innerHTML = '';
            renderNext();
          });
          choicesContainer.append(btn);
        });
      }

      // Función para guardar el progreso en el servidor
      function guardarProgreso(stateJson) {
        fetch('/api/guardarProgreso', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inkState: stateJson })
        })
        .then(res => res.json())
        .then(resp => {
          if (!resp.ok) {
            console.error('No se pudo guardar el progreso');
          }
        })
        .catch(err => console.error('Error guardando progreso:', err));
      }

      // Invocar renderNext por primera vez para mostrar el estado inicial
      renderNext();
    })
    .catch(err => console.error('Error cargando JSON de Ink:', err));
});