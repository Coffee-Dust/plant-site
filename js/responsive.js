menuIsOpen = false
menuIsFinished = true

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
    if (height == 260) {
      clearInterval(id);
      responsive()
      menuIsOpen = true
      menuIsFinished = true
    } else {
      menuIsFinished = false
      height += 4;
      elem.style.height = height + 'px';
      console.log(height);
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
      //console.log(wrapper[i] + "width is now: " + wrapper[i].style.width);
    }
  } else if (window.innerWidth <= 1200) {
    for (var i=0; i<wrapper.length; i++) {
      wrapper[i].style.width = window.innerWidth - 130 + "px"
      //console.log(wrapper[i] + "width is now: " + wrapper[i].style.width);
    }
  } else {
    for (var i=0; i<wrapper.length; i++) {
      wrapper[i].style.width = 1050 + "px"
      //console.log(wrapper[i] + "width is now: " + wrapper[i].style.width);
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

window.addEventListener('resize', adjustScreen)
window.addEventListener('resize', adjustImageText)
