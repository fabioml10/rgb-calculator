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

  function updateValue() {
    const element = event.target
    if(element.type === "range"){
      element.parentElement.querySelector("input[type='number']").value = element.value
    } else {
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