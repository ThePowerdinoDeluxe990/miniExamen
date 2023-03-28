document.getElementById("corregir").onclick= function(){
    let respuesta = document.getElementById("respuestas").value
console.log(typeof(respuesta))
document.getElementById("respuestas").disabled= true

switch(respuesta){
    case "Madrid":
        console.log("Madrid")
        document.getElementById("result").textContent="Esta bien"
        document.getElementById("result").style.backgroundColor = "lightgreen"
    break;

    case "Barcelona":
        console.log("Barcelona")
        document.getElementById("result").textContent="Esta mal"
        document.getElementById("result").style.backgroundColor = "red"
    break;

    case "Granada":
        document.getElementById("result").textContent="Esta mal"
        document.getElementById("result").style.backgroundColor = "red"
    break;
}
}

//I belive in Kate supremacy
