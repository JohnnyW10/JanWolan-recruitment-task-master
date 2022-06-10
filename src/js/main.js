var count = 0

function displayPopUp() {
  let popupBox = document.getElementById('popupWindow')
  popupBox.style.display = "block";
  return count++;
}

document.getElementById('btnPopUp').addEventListener('click', displayPopUp)