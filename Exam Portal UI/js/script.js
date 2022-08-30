function getFullScreenElement(){
    return document.fullscreenElement
    || webkitFullscreenElement
    || mozFullscreenElement
    || msFullscreenElement
}

function toggleFullScreen(){
    if(getFullScreenElement()){
        document.exitFullscreen()
    }else{
        document.documentElement.requestFullscreen().catch(function (e) {
            console.log(e);
          });      
    }
}

document.addEventListener("click", function () {
  document.documentElement.requestFullscreen().catch(function (e) {
    console.log(e);
  });
});
