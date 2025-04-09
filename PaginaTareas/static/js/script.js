const lista=document.getElementById(listaTareas);
const botonAgregar=document.getElementById(botonAnadir);
const botonEliminar=document.getElementById(botonEliminar);
const botonMostrarT=document.getElementById(botonMostrarT);

function anadirTarea(){

    var campoTextoT= document.getElementById(campoTarea);
    if(campoTextoT.value.trim()=="")return;
    lista.textContent=campoTextoT.value();
    lista.onClick=()=> lista.classList.toggle("completado")

    const botonBorrar=document.getElementById()
    

}

function eliminarTarea(){
    var campoTextoT=document.getElementById(campoTarea);
    const 
}

function mostrarTareas(){


}