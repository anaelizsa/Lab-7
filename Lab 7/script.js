//Header
fetch("menu.html") //Se llama al menu
.then(response => response.text())//Se convierte la info de menu en texto legible
.then(data => document.getElementById("menuInfo").innerHTML = data); //busca el elemento vacio en index e inserta la info del documento html

