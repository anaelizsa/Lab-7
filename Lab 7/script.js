
const footerHTML = `
  <footer>
    <p><strong>Autores:</strong> Ana Karen Godinez, Ana Paola Elizondo, Montse Pineda, Estefanía León, Diana Caballero, Daniela Contreras, Tamara Fernández</p>
    <p>contacto@whitelotus.com</p>
    <p>White Lotus</p>
    <img src="./Pic/whitelotus.jpg" style="width: 250px; height: auto; margin-top: 10px;">
  </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);

//Header
fetch("menu.html") //Se llama al menu
.then(response => response.text())//Se convierte la info de menu en texto legible
.then(data => document.getElementById("menuInfo").innerHTML = data); //busca el elemento vacio en index e inserta la info del documento html

