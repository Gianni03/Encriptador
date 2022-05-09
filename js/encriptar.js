// ! captura el texto ingresado
btnEncriptar.addEventListener('click', ()=>{
   texto()
   borrar()
   agregarBotonCopiar()
   pegarEncriptacion()
   limpiar()
})

// encriptacion
function texto(){
   if (textoIngresado.value != ''){
      encriptar = textoIngresado.value.toLowerCase().replace(/e/g,'enter').replace(/i/gm,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
      return
   }else{
      alert("ingrese un texto por favor!")
   }
   
}

// borrar lo elementos donde va el texto encriptado
function borrar(){
   borrarImg.classList.replace('contenedor-imagen','borrar-img')
   borrarResp.classList.replace('respuesta','borrar-img')
   borrarAyuda.classList.replace('ayuda','borrar-img')

}

// coloca el boton para copiar el texto
function agregarBotonCopiar(){
   btnCopiar.classList.replace('btn-copiar','btn-copiar-on')
}

// muestra la encriptacion
function pegarEncriptacion(){
   textoRespuesta.textContent = encriptar
}

// limpia el campo de texto ingresado
function limpiar(){
   textoIngresado.value = ''
}

// !boton que copia la encriptacion y la pega en el cuadro principal
btnCopiar.addEventListener('click', ()=>{
   copiaEncriptacion()
   limpiarRespuesta()
})

// pega respuesta en cuadro principal
function copiaEncriptacion(){
   textoIngresado.value = encriptar

}

// vuelve a inicio el cuadro de respuesta
function limpiarRespuesta(){
   // textoRespuesta = vaciar.value
   // encriptar.textContent = vaciar
   borrarImg.classList.replace('borrar-img', 'contenedor-imagen')
   borrarResp.classList.replace('borrar-img','respuesta')
   borrarAyuda.classList.replace('borrar-img','ayuda')
   btnCopiar.classList.replace('btn-copiar-on','btn-copiar')
}




// ! boton para desencriptar texto copiado encriptado
btnDesencriptar.addEventListener('click', ()=>{
   desencriptarRespuesta()
   limpiar()
   borrar()
   agregarBotonCopiar()
   pegarDesncriptacion()
})

function desencriptarRespuesta() {
// desencriptacion
desencriptar = encriptar.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
textoIngresado.textContent = desencriptar
}

function pegarDesncriptacion(){
   textoRespuesta.textContent = desencriptar
}
