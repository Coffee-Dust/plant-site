
function hideItemInfoBoxes(event) {
  var e = event.currentTarget.querySelector("#item-info")
  if (event.currentTarget.classList.contains("fullscreen")) {
  } else {
    if (e.className === "") {
      e.className = "hide"
    }
  }
}

function showItemInfoBoxes(event) {
  var e = event.currentTarget.querySelector("#item-info")
  if (event.currentTarget.classList.contains("fullscreen")) {
  } else {
    if (e.className === "hide") {
      e.className = ""
    }
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

function closeInstructionBox(node = undefined) {
  var box = document.getElementById("instruction-box")

  try {
    var didClose = localStorage['didCloseInstrucBox'] || 'false';
    if (didClose === "false") {
      box.style.display = "inline-block"
    }
    if (didClose === "false" && node !== undefined) {
      box.remove()
      localStorage['didCloseInstrucBox'] = "true"
    } else if (didClose === "true") {
      box.remove()
    }
  }

  //For paranoid safari! Or maybe it likes cookies?
  catch(err) {
    if (getCookie("instrucBoxIsClosed") == false) {
      setCookie("instrucBoxIsClosed", "false")
      console.log("its doing interval");
    }
    var didClose = getCookie("instrucBoxIsClosed");
    console.log(didClose);

    if (didClose === "false") {
      box.style.display = "inline-block"
    }

    if (didClose === "false" && node !== undefined) {
      box.remove()
      setCookie("instrucBoxIsClosed", "true")
    } else if (didClose === "true") {
      box.remove()
    }

  }// end catch
}


// ------------- COOKIES!!! ------------- //

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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
  adjustScreen()
  responsiveImages()
  toggleItemInfoSetup()
  closeInstructionBox()
}
