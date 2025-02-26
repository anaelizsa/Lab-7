//Header
fetch("menu.html") //Se llama al menu
.then(response => response.text())//Se convierte la info de menu en texto legible
.then(data => document.getElementById("menuInfo").innerHTML = data); //busca el elemento vacio en index e inserta la info del documento html

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Tu mensaje fue enviado!', 'info')
  })
}