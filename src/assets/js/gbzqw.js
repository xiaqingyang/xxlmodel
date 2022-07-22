function rootResize() {
  var winClient = document.documentElement.clientWidth;
  var fontSize = winClient < 480 ? winClient / 16 : 30;
  if (fontSize < 20) {
    fontSize = 20;
  }
  document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
}
export {  
  rootResize
} 