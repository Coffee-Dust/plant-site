
function hideItemInfoBoxes(e) {
  var link = event.currentTarget.children;
  var e = link[0].children;
  if (e[1].className === "") {
    e[1].className = "hide"
  }
}

function showItemInfoBoxes(event) {
  var link = event.currentTarget.children;
  var e = link[0].children;
  if (e[1].className === "hide") {
    e[1].className = ""
  }
}

function toggleItemInfoSetup() {
  var itemBoxes = document.querySelectorAll(".item-box")

  for (var i = 0; i < itemBoxes.length; i++) {
    itemBoxes[i].addEventListener("mouseover", showItemInfoBoxes)
    itemBoxes[i].addEventListener("mouseout", hideItemInfoBoxes)
  }
}


function onLoad() {
  adjustScreen()
  toggleItemInfoSetup()
}
