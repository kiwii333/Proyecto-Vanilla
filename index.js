let correo = document.getElementById('correo')

function mostrar(){
    document.body.innerHTML += `<p>Hola ${correo}</p>
    <br>
    La última vez que entrare fue en el ${document.timeline}`
}

mostrar()

function preguntas(evento){
    if(evento.type=='click'){
        window.location.assign('preguntas.html')
    }
}

document.getElementById("preguntas").onclick = preguntas