// DOM
let cajas= document.getElementsByClassName('caja');
//cajas[0].innerHTML='<ul><li>UNO</li><li>DOS</li><li>TRES</li></ul>';
//cajas[2].textContent ='Tercera Caja';

let divs =document.getElementsByTagName('div');
let Primera_caja= document.getElementById('primera');
//Primera_caja.textContent = 'Primera Caja';

// Crear un Nodo

// 1. Crear el elemento

    var caja =document.createElement('div');

// 2. Crear un nodo de texto

   var contenido = document.createTextNode('Hola Mundo')

// 3 Añadir el nodo de texto al elemento

    caja.appendChild(contenido);

// 4 Añadir propiedades o atributos

   caja.setAttribute('class', 'caja naranja');

// 5. Agregar el elemenento al documento

    var contenedor = document.getElementById('contenedor');

   // contenedor.appendChild(caja);

// Modicar la clase del elemento
 caja.className ='caja naranja';
 caja.id = 'micaja';


// ParentNode -> Saber padre

let padre =cajas[0].parentNode;
//padre.insertBefore(caja,cajas[3]);

// Remplazar

padre.replaceChild(caja, cajas[1]);

// Eliminar

padre.removeChild(cajas[2]);






