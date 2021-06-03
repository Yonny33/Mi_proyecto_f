var canciones = [];

$(document).ready(function () {
    
    $.ajax({

        url: "datos.json"
            
    }).done(function (musicas) {
        
        document.getElementById("Canciones").innerHTML = html
    })
});