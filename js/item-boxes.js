
function displayItemsWithCat(cat) {
  if (cat == "all") {
    console.log("DISPLAING ALL!");
  }

}

function toggleFullscreen(element) {
  var fullscreenElement = document.querySelector(".fullscreen-item-box")
  var img = element.querySelector("img")
  var title = element.querySelector("div h3")
  var desc = element.querySelector("div p")

  fullscreenElement.querySelector("img").src = img.src
  fullscreenElement.querySelector("h3").innerHTML = title.innerHTML
  fullscreenElement.querySelector("p").innerHTML = desc.innerHTML

  fullscreenElement.classList.toggle("show")
  frostBackground()
}


function frostBackground() {
  var body = document.querySelector(".page-content")
  body.classList.toggle("frost")
  body.querySelector(".frost-bg").classList.toggle("hide")
}

function openEmail(custom) {
  var fullscreenElement = document.querySelector(".fullscreen-item-box")
  var sub;
  var bod;
  if (custom == false) {
    sub = `Is "${fullscreenElement.querySelector("h3").innerHTML}" available?`
    bod = `Please provide name and contact info below:\nName: \nYour Email: \n Phone#(Optional): \n\nWe will get back to you as soon as possible with an answer!\n`
    window.location.assign("mailto:d24dust@hotmail.com?Subject=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent(bod));
  } else {
    sub = `Custom Order Like "${fullscreenElement.querySelector("h3").innerHTML}"`
    bod = `Please provide name and contact info below:\nName: \nYour Email: \n Phone#(Optional): \n\nPlease describe below, what you want to be customized:\n`
    window.location.assign("mailto:d24dust@hotmail.com?Subject=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent(bod));
  }
}

function showCatMenu() {
    document.getElementById("catDropdown").classList.toggle("show");
}

function showOrderOptionsMenu() {
    document.getElementById("orderDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
