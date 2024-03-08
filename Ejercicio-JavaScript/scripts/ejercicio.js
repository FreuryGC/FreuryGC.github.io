

function cambiarColor(){
    variable_album = document.getElementById("album")
    console.log(document.getElementById("imagen"));
    variable_album.style.backgroundColor = "red";
}

function cambiarTamano(){
    var clase_imagen = document.getElementsByClassName('imagen');

    var primera_imagen = clase_imagen[0];

    primera_imagen.style.width = '500px';
    primera_imagen.style.height = '500px';
}

