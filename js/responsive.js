menuIsOpen = false
menuIsFinished = true

function isMobile() {
  return window.innerWidth <= 860;
}

function doubleTap() {

}

function responsive() {
    var x = document.getElementById("navlinks");
    if (x.className === "shadow-wrapper") {
        x.className += " responsive";
    } else {
        x.className = "shadow-wrapper";
    }
}

function animateMenu() {
  var elem = document.getElementById("navlinks");
  var height;

  console.log("menu status is: " + menuIsOpen);

  if (!menuIsOpen && menuIsFinished) {
    height = 52;
    setIconClass()
    var id = setInterval(open, 5);
  } else if (menuIsOpen && menuIsFinished) {
    height = 260;
    responsive();
    setIconClass()
    var id2 = setInterval(close, 5);
  }

  function open() {
    if (height == 220) {
      clearInterval(id);
      responsive()
      menuIsOpen = true
      menuIsFinished = true
    } else {
      menuIsFinished = false
      height += 4;
      elem.style.height = height + 'px';
      // console.log(height);
    }
  }

  function close() {
    if (height == 52) {
      clearInterval(id2)
      menuIsOpen = false
      menuIsFinished = true
      elem.style.height = ''
    } else {
      menuIsFinished = false
      height = height - 4;
      elem.style.height = height + 'px';
    }
  }

  function setIconClass() {
    var icon = document.getElementById("menuIcon")
    if (icon.className === "border-left icon") {
      icon.className += " opened"
    } else {
      icon.className = "border-left icon"
    }
  }
}// end.animateMenu

function adjustScreen() {
  var wrapper = document.querySelectorAll('.wrapper')
  if (window.innerWidth <= 860) {
    for (var i=0; i<wrapper.length; i++) {
      wrapper[i].style.width = window.innerWidth - 30 + "px"
    }
  } else if (window.innerWidth <= 1200) {
    for (var i=0; i<wrapper.length; i++) {
      wrapper[i].style.width = window.innerWidth - 130 + "px"
    }
  } else {
    for (var i=0; i<wrapper.length; i++) {
      wrapper[i].style.width = 1050 + "px"
    }
  }
}

function adjustImageText() {
  var text = document.getElementById("featured-image-text");
  if (window.innerWidth >= 1200) {
    if (text.style.left >= "240px") {

    } else {
      var diff = window.innerWidth - 1200
      text.style.left = diff + 100 + "px"
    }
  }
}

function featImageQuality(res) {
  var image = document.querySelector('.featured-image')
  // console.log(`Upping quality to @x${res}`);=-
  switch (image.className) {
    case "featured-image":
      image.src = `images/images@x${res}/homefeat.jpg`
      break;
    case "featured-image handmade":
      image.src = `images/images@x${res}/handmadefeat.jpg`
      break;
    case "featured-image designs":
      image.src = `images/images@x${res}/designsfeat.jpg`
      break;
    case "featured-image contact":
      image.src = `images/images@x${res}/contactfeat.jpg`
      break;
    default:
      console.log("How the what did this get put on here?");
      break;
  }
}

function responsiveImages() {
  var image = document.querySelector('.featured-image')
  featImageQuality(2)

  if (window.innerWidth >= 990) {
    featImageQuality(4)
  } else if (window.innerWidth >= 890) {
    featImageQuality(3)
  }

  console.log(image);
}//end func


//---- This is very important because androids are stupid! ----//
//But for real. This initially sets the window width to the viewport width because android doesn't do that.
//SO it must be called FIRST.
var isMobileBrowser = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
var isLandscape = window.matchMedia("(orientation: portrait)");
var currentOrien;
var cachedOrien;
var vpWidth;
var vpHeight;


function updateOrientation() {
  if (isLandscape.matches) {
    currentOrien = "landscape"
  } else {
    currentOrien = "portrait"
  }
}

function setupMobileSize() {
  if (isMobileBrowser) {
    vpWidth = window.innerWidth;
    vpHeight = window.innerHeight;

    window.innerWidth = vpWidth;

    if (isLandscape.matches) {
      cachedOrien = "landscape"
    } else {
      cachedOrien = "portrait"
    }

  }
}// end func

window.addEventListener('resize', function () {
  if (isMobileBrowser) {
    updateOrientation()
    if (currentOrien !== cachedOrien) {
      console.log(`reloading because currentOrien is: ${currentOrien} and cachedOrien is ${cachedOrien}`);
      location.reload();
    }
  }
  adjustScreen()
})


// window.addEventListener('resize', function () {
//   if (!isLandscape.matches && didReloadTo === "landscape") {
// 		// Changed to portrait
//     didReloadTo = "portrait"
//     location.reload()
// 	}	else if (isLandscape.matches && didReloadTo === "portrait"){
// 		// Changed to landscape
//     didReloadTo = "landscape"
//     location.reload()
// 	}
//   adjustScreen()
// })
