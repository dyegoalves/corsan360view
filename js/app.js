
const container = document.querySelector('#container');
const panorama = new PANOLENS.ImagePanorama('../img/img1.jpg');  
const viewer = new PANOLENS.Viewer({ container: container , rotateSpeed: 0.10, autoHideInfospot: false,  });
viewer.add(panorama);
viewer.setCameraFov(120);
panorama.fadeIn();

addinfopoints();

function addinfopoints(){
  const infospot1 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Iconvideo)
  infospot1.position.set(20,-90,-100)
  //infospot1.addHoverElement( document.getElementById('desc-container'), 320 )
  panorama.add(infospot1);
  infospot1.show();
  infospot1.addEventListener('click', click01);
}

//infospot1.addEventListener("click", click01);

 function click01() {
    var modal = document.querySelector("#modal");
    var modalOverlay = document.querySelector("#modal-overlay");
    var closeButton = document.querySelector("#close-button");
    var openButton = document.querySelector("#open-button");

    closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    });

    openButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    });
 }


//  

  
  