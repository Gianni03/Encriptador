// captura el texto ingresado
btnEncriptar.addEventListener('click', ()=>{
   texto()
   borrar()
   agregarBotonCopiar()
})


function texto(){
   if (textoIngresado.value != ''){
      console.log(textoIngresado.value)
      textoRespuesta = textoIngresado.value.toLowerCase().replace(/a/g, 'ai').replace(/e/g,'enter').replace(/i/g,'imes').replace(/o/g,'ober').replace(/u/g,'ufat')
      console.log(textoRespuesta)
   }else{
      alert("ingrese un texto por favor!")
   }
   
}
function borrar(){
   borrarImg.classList.replace('contenedor-imagen','borrar-img')
   borrarResp.classList.replace('respuesta','borrar-img')
   borrarAyuda.classList.replace('ayuda','borrar-img')

}
function agregarBotonCopiar(){
   btnCopiar.classList.replace('btn-copiar','btn-copiar-on')
}






// function desencriptar() {
// // desencriptacion
// textoRespuesta = textoIngresado.replace(/ai/g, "a")
// .replace(/enter/g, "e")
// .replace(/imes/g, "i")
// .replace(/ober/g, "o")
// .replace(/ufat/g, "u")

// }