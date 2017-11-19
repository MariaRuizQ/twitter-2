document.getElementById('textarea').placeholder = '¿Qué estás pensando?';
function caracteres(){
  var max = new Number();
  max = 140;
  var actual = document.getElementById('textarea').value.length;
  var valor = new Number();
  valor = max - actual;
  if(valor > 0){
    if(valor == 1){
      valor = 0;
    }
    document.getElementById('characters-remaining').innerHTML = valor;
    document.getElementById('boton').disabled='';
  } else{
    document.getElementById('boton').disabled='disabled';
  }
}

var comentarios = document.getElementById("comentarios");
var boton = document.getElementById("boton");
var textarea = document.getElementById("textarea");
var nombre = document.getElementById("nombre");
var name;
var edicion = false;
function anadir() {
  if (
    textarea === null ||
    textarea.value.length === 0
  ) {
    textarea.value = "";
    textarea.focus();
  } else if (edicion === false) {
    if (
      nombre === null ||
      nombre.value.length === 0 ||
      /^\s+$/.test(nombre.value)
    ) {
    } else {
      name = nombre.value;
    }

    var div = document.createElement("div");
    comentarios.appendChild(div);
    var pnom = document.createElement("p");
    var p = document.createElement("p");
    var fecha = new Date();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i> <a href="#">María Teresa Ruiz Quispe</a> @RuizMariaQuispe' + ' ' +
      hora +
      ":" +
      minutos;
    div.setAttribute("class","div");
    p.innerHTML = textarea.value;
    pnom.setAttribute("class", "pnom");
    p.setAttribute("class", "p");
    div.appendChild(pnom);
    div.appendChild(p);
    textarea.value = "";
    nombre.value = "";
    textarea.focus();
  }

  eliminar.addEventListener("click", eliminarc);
  function editarc() {
    var botone = document.createElement("input");
    botone.type = "button";
    botone.value = "Confirmar edicion";
    div.replaceChild(botone, editar);
    botone.setAttribute("class", "botone");
    textarea.value = p.innerText;
    p.innerHTML = "";
    nombre.value = name;
    textarea.focus();
    edicion = true;
    function edicionc() {
      if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {textatera.value = "";
    textarea.focus();} else {
      if (
      nombre === null ||
      nombre.value.length === 0 ||
      /^\s+$/.test(nombre.value)
    ) {
      name = "Anónimo";
    } else {
      name = nombre.value;
    }

      }
    }
    botone.addEventListener("click", edicionc);
  }
  editar.addEventListener("click", editarc);
}
boton.addEventListener("click", anadir);
function enter(event) {
  var codigo = event.keyCode;
  if (codigo == 13) {
    anadir();
    }
}
  textarea.addEventListener("keypress", enter);
