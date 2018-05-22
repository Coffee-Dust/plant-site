
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

function mailAlert() {
  var mailText = document.getElementById("mailText")
  mailText.innerHTML = "Opening in mail..."
  setTimeout(function(){mailText.innerHTML = "ksorrillo@hotmail.com"}, 5);
}

function copyAddress() {
  console.log("Currently disbaled");
  /*
  var streetAddress = document.getElementById("streetAddress")
  streetAddress.select()
  document.execCommand("Copy")
  alert("Copied text. Paste in GPS app") */
}

function consoleLoad() {

console.log(`%c
        /~~~~~~~~~~~~~~~~~~~/|
       /              /######/ / |
      /              /______/ /  |
     ========================= /||
     |_______________________|/ ||
      |  \\****/     \\__,,__/    ||
      |===\\**/       __,,__     ||    CoffeeDust.io site.
      |______________\\====/$____||    Status: brewing...
      |   ___        /~~~~\\ $  / |
     _|  |===|===   /      \\$_/  |
    | |  |###|     |########| | /
    |____\\###/______\\######/__|/
    ~~~~~~~~~~~~~~~~~~~~~~~~~~

`, "font-family:monospace")
}

function onLoad() {
  consoleLoad()
  responsiveImages()
  adjustScreen()
  toggleItemInfoSetup()
}
