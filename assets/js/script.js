document.addEventListener("DOMContentLoaded", function() {
  const redRangeElement = document.getElementById("redRange")
  const greenRangeElement = document.getElementById("greenRange")
  const blueRangeElement = document.getElementById("blueRange")
  redRangeElement.addEventListener("input", updateValue)
  greenRangeElement.addEventListener("input", updateValue)
  blueRangeElement.addEventListener("input", updateValue)

  const redInputElement = document.getElementById("redInput")
  const greenInputElement = document.getElementById("greenInput")
  const blueInputElement = document.getElementById("blueInput")
  redInputElement.addEventListener("keyup", updateValue)
  greenInputElement.addEventListener("keyup", updateValue)
  blueInputElement.addEventListener("keyup", updateValue)
  redInputElement.addEventListener("input", updateValue)
  greenInputElement.addEventListener("input", updateValue)
  blueInputElement.addEventListener("input", updateValue)
  redInputElement.addEventListener("focus", selectText)
  greenInputElement.addEventListener("focus", selectText)
  blueInputElement.addEventListener("focus", selectText)

  document.querySelector(".rgb-code").addEventListener("click", copyToClipboard)

  function updateValue() {
    const element = event.target
    if(element.type === "range"){
      element.parentElement.querySelector("input[type='number']").value = element.value
    } else {
      element.value = validadeInput(parseInt(element.value))
      element.parentElement.querySelector("input[type='range']").value = element.value
    }
    updateRGB(redRangeElement.value, greenRangeElement.value, blueRangeElement.value)
  }

});

function updateRGB(red, blue, green) {
  const target = document.getElementById("rgbResult")
  const code = document.querySelector(".rgb-code")
  const result = `rgb(${red}, ${blue}, ${green})`
  code.textContent = result
  target.style.backgroundColor = result
}

function validadeInput(elementValue) {
  if(elementValue < 0){
    return "0"
  } else if(elementValue > 255) {
    return "255"
  }
  return elementValue
}

function selectText() {
  event.target.select()
}

function copyToClipboard() {

  const el = document.createElement('textarea');
  el.value = event.target.textContent;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  alert("Copiado para área de transferência: " + el.value);
}