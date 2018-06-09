
function displayItemsWithCat(cat) {
  var itemBoxes = document.querySelectorAll(".item-box.grid-box")
  switch (cat) {
    case 'all':
      for (var i = 0; i < itemBoxes.length; i++) {
        itemBoxes[i].classList.remove("hidden")
      }
      break;
    case 'nature':
      for (var i = 0; i < itemBoxes.length; i++) {
        if (itemBoxes[i].id != "cat-nature") {
          itemBoxes[i].classList.add("hidden")
        } else if (itemBoxes[i].id == "cat-nature") {
          itemBoxes[i].classList.remove("hidden")
        }
      }
      break;
    case 'vases':
      for (var i = 0; i < itemBoxes.length; i++) {
        if (itemBoxes[i].id != "cat-vases") {
          itemBoxes[i].classList.add("hidden")
        } else if (itemBoxes[i].id == "cat-vases") {
          itemBoxes[i].classList.remove("hidden")
        }
      }
      break;
    case 'deco':
      for (var i = 0; i < itemBoxes.length; i++) {
        if (itemBoxes[i].id != "cat-decoration") {
          itemBoxes[i].classList.add("hidden")
        } else if (itemBoxes[i].id == "cat-decoration") {
          itemBoxes[i].classList.remove("hidden")
        }
      }
      break;
    default:
      alert("I'm going to be frank. I have no idea why this appeared. I guess the Category you selected doesn't exist but even that makes no sense.");
      break;
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
    bod = `Please provide name and contact info below:\nName: \nYour Email: \n Phone#(Optional): \n\nWe will get back to you as soon as possible with an answer!\n\n\n\nItem Description: \n${fullscreenElement.querySelector("p").innerHTML}`
    window.location.assign("mailto:d24dust@hotmail.com?Subject=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent(bod));
  } else {
    sub = `Custom Order Like "${fullscreenElement.querySelector("h3").innerHTML}"`
    bod = `Item Description: \n${fullscreenElement.querySelector("p").innerHTML}\n\n\nPlease provide name and contact info below:\nName: \nYour Email: \n Phone#(Optional): \n\nPlease describe below, what you want to be customized:\n`
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
