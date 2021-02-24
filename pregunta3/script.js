
function processForm() {
    var name = document.getElementById("name").value;
    var orientacion = document.getElementById("orientacion").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var estado = "";
    
    if (cantidad > 50) {
        estado = "50+"
    } else if (cantidad < 50) {
        estado = "50-"
    } else if (cantidad == 50) {
        estado = "50="
    }
    tabla = document.getElementById("tabla").innerHTML
    
    document.getElementById("tabla").innerHTML = tabla + "<tr> <td>" + name + "</td> <td>" + orientacion + "</td> <td>" + cantidad + "</td> <td>" + estado + "</td> </tr>"

    var partidoArray = [];

    if (sessionStorage.getItem("wPartidoArray") !== null) {
        partidoArray = JSON.parse(sessionStorage.getItem("wPartidoArray"));
    }

    var currentPartidos = {
        partido: name,
        votos: cantidad
    };

    partidoArray.push(currentPartidos);

    sessionStorage.setItem("wPartidoArray", JSON.stringify(partidoArray));
}

function ganador() {

    var partidoArray = JSON.parse(sessionStorage.getItem("wPartidoArray"));
    
    var votesArray = [];

    var i;

    for (i = 0; i < partidoArray.length; i++) {
        votesArray.push(partidoArray[i].votos);
      }

    //alert(votesArray)

    var votesArray2 = votesArray;

    votesArray2.sort(function(a, b){return a - b});

    //alert(votesArray2)

    var votesArray3 = [];

    for (i = 0; i < partidoArray.length; i++) {
        votesArray3.push(partidoArray[i].votos);
      }

    var min = votesArray3.indexOf(votesArray2[0]);
    var max = votesArray3.indexOf(votesArray2[votesArray2.length -1]);

    alert("El ganador es el partido " + partidoArray[max].partido + " con " + partidoArray[max].votos + " votos")
    alert("El partido con menos votos fue " + partidoArray[min].partido + " con " + partidoArray[min].votos + " votos")
}

