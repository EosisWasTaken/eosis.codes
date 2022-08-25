function reveal() {
  for (opacity = 0; opacity < 1.1; opacity = opacity + 0.1) {           
    setTimeout(function(){document.getElementById("easter_egg").style.opacity = opacity;},100)      }
}
