var count =  window.localStorage.getItem("count") || 0;


function displayPopUp() {
  let popupBox = document.getElementById('popupWindow')
  let Overlay = document.getElementById('Overlay')
  const resetButton = document.getElementById('el')
  let popup_message = document.getElementById('popup_message');
  
  window.localStorage.setItem("count", ++count);

  if(count < 5) {
    popup_message.innerHTML = `You  have clicked ${count} to related button`
  } else if (count >= 5) {
    popup_message.innerHTML = `You  have clicked ${count} to related button`
    resetButton.innerHTML = `<button id="reset" onClick="resetCounter()">Reset</button>`
  }
  popupBox.style.display = 'block'
  Overlay.style.display = 'block'
}

document.getElementById('btnPopUp').addEventListener('click', displayPopUp)

function resetCounter() {
  window.localStorage.setItem("count", 0);
  console.log(window.localStorage.getItem("count"))
  const resetButton = document.getElementById('el').innerHTML = ''
}

function closePopup() {
  let popupBox = document.getElementById('popupWindow')
  let Overlay = document.getElementById('Overlay')

  popupBox.style.display = 'none'
  Overlay.style.display = 'none'
}

document.getElementById('closeBtn').addEventListener('click', closePopup)
document.getElementById('Overlay').addEventListener('click', closePopup)