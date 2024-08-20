document.addEventListener('DOMContentLoaded', function() {
  var simbolos = [
    { simbolo: '¬', nombre: 'Negación lógica' },
    { simbolo: '∧', nombre: 'Conjunción lógica' },
    { simbolo: '∨', nombre: 'Disyunción lógica' },
    { simbolo: '⊻', nombre: 'Disyunción lógica Exclusiva' },
    { simbolo: '→', nombre: 'Implicación lógica' },
    { simbolo: '↔', nombre: 'Doble implicación lógica' },
    { simbolo: '=', nombre: 'Igual' },
    { simbolo: '≠', nombre: 'Diferente o no Igual' },
    { simbolo: ':', nombre: 'Dos Puntos' },
    { simbolo: '∴', nombre: 'Tres puntos Consecuencia' },
    { simbolo: '≡', nombre: 'Equivalencia lógica' },
    { simbolo: '⊨', nombre: 'Consecuencia lógica' },
    { simbolo: '(', nombre: 'Paréntesis izquierdo' },
    { simbolo: ')', nombre: 'Paréntesis derecho' },
    { simbolo: '{', nombre: 'Llave izquierda' },
    { simbolo: '}', nombre: 'Llave derecha' },
    { simbolo: '⟶', nombre: 'Corchete izquierdo' },
    { simbolo: 'Ɐ', nombre: 'cuantificador universal' },
    { simbolo: 'Ǝ', nombre: 'cuantificador existencial' },
  ];

  // Letras mayúsculas desde la A
  var letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var letrasMayusBtns = document.getElementById('letrasMayus');

  // Letras minúsculas desde la p
  var letrasMinIniciales = 'pqrstuvwxyz'; // Letras minúsculas iniciales mostradas
  var letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';

  var letrasMinusBtns = document.getElementById('letrasMinus');

  // Función para mostrar los símbolos en el contenedor
  function mostrarSimbolos() {
    var simbolosContainer = document.getElementById('simbolosContainer');

    simbolos.forEach(function(simboloInfo) {
      var btn = document.createElement('button');
      btn.textContent = simboloInfo.simbolo;
      btn.onclick = function() {
        insertarSimbolo(simboloInfo.simbolo);
      };
      simbolosContainer.appendChild(btn);
    });
  }

  // Función para mostrar las primeras letras mayúsculas
  function mostrarLetrasMayus() {
    letrasMayusBtns.innerHTML = '';
    for (var i = 0; i < 7; i++) {
      var letra = letrasMayusculas[i];
      var btn = crearBotonLetra(letra);
      letrasMayusBtns.appendChild(btn);
    }
  }

  // Función para mostrar más letras minúsculas (de la p a la z)
  function mostrarMasLetrasMinus() {
    letrasMinusBtns.innerHTML = '';
    for (var i = 0; i < letrasMinusculas.length; i++) {
      var letra = letrasMinusculas[i];
      var btn = crearBotonLetra(letra);
      letrasMinusBtns.appendChild(btn);
    }
  }

  // Función para mostrar las primeras letras minúsculas (de la p a la z)
  function mostrarLetrasMinus() {
    letrasMinusBtns.innerHTML = '';
    for (var i = 0; i < letrasMinIniciales.length; i++) {
      var letra = letrasMinIniciales[i];
      var btn = crearBotonLetra(letra);
      letrasMinusBtns.appendChild(btn);
    }
  }

  // Función para crear un botón con una letra o símbolo
  function crearBotonLetra(letra) {
    var btn = document.createElement('button');
    btn.textContent = letra;
    btn.onclick = function() {
      insertarLetra(letra);
    };
    return btn;
  }

  // Función para insertar un símbolo en el área de texto
  function insertarSimbolo(simbolo) {
    var formula = document.getElementById('formula');
    var inicio = formula.selectionStart;
    var fin = formula.selectionEnd;
    var texto = formula.value;

    // Insertar el símbolo en la posición actual del cursor
    var nuevoTexto = texto.substring(0, inicio) + simbolo + texto.substring(fin);

    // Actualizar el contenido del textarea
    formula.value = nuevoTexto;

    // Mover el cursor después del texto insertado
    var nuevaPosicion = inicio + simbolo.length;
    formula.setSelectionRange(nuevaPosicion, nuevaPosicion);

    // Enfocar el textarea
    formula.focus();
  }

  // Función para insertar una letra en el área de texto
  function insertarLetra(letra) {
    var formula = document.getElementById('formula');
    var inicio = formula.selectionStart;
    var fin = formula.selectionEnd;
    var texto = formula.value;

    // Insertar la letra en la posición actual del cursor
    var nuevoTexto = texto.substring(0, inicio) + letra + texto.substring(fin);

    // Actualizar el contenido del textarea
    formula.value = nuevoTexto;

    // Mover el cursor después del texto insertado
    var nuevaPosicion = inicio + letra.length;
    formula.setSelectionRange(nuevaPosicion, nuevaPosicion);

    // Enfocar el textarea
    formula.focus();
  }

  // Función para copiar el contenido del textarea al portapapeles
  function copiarAlPortapapeles() {
    var formula = document.getElementById('formula');
    formula.select();
    document.execCommand('copy');
    // Removed alert notification
  }

  // Función para borrar el contenido del textarea
  function borrarContenido() {
    var formula = document.getElementById('formula');
    formula.value = '';
    formula.focus();
  }

  // Función para abrir la página en una nueva pestaña
  function abrirPagina() {
    window.open('https://sowtag.github.io/', '_blank');
  }

  // Mostrar las letras iniciales al cargar la página
  mostrarLetrasMayus();
  mostrarLetrasMinus();
  mostrarSimbolos();

  // Eventos para botones
  var verMasMayusBtn = document.getElementById('verMasMayusBtn');
  verMasMayusBtn.addEventListener('click', function() {
    verMasMayusBtn.style.display = 'none'; // Ocultar el botón después de presionarlo una vez
    for (var i = 7; i < letrasMayusculas.length; i++) {
      var letra = letrasMayusculas[i];
      var btn = crearBotonLetra(letra);
      letrasMayusBtns.appendChild(btn);
    }
  });

  var verMasMinusBtn = document.getElementById('verMasMinusBtn');
  verMasMinusBtn.addEventListener('click', function() {
    verMasMinusBtn.style.display = 'none'; // Ocultar el botón después de presionarlo una vez
    mostrarMasLetrasMinus();
  });

  var copiarBtn = document.getElementById('copiarBtn');
  copiarBtn.addEventListener('click', copiarAlPortapapeles);

  var borrarBtn = document.getElementById('borrarBtn');
  borrarBtn.addEventListener('click', borrarContenido);

  var abrirPaginaBtn = document.getElementById('abrirPaginaBtn');
  abrirPaginaBtn.addEventListener('click', abrirPagina);

  // Eventos para los botones de valores lógicos
  var verdaderoBtn = document.getElementById('verdaderoBtn');
  verdaderoBtn.addEventListener('click', function() {
    insertarSimbolo('V');
  });

  var falsoBtn = document.getElementById('falsoBtn');
  falsoBtn.addEventListener('click', function() {
    insertarSimbolo('F');
  });
});
