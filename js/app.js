
const container = document.querySelector('#container');
const panorama = new PANOLENS.ImagePanorama('../img/img1.jpg');
const viewer = new PANOLENS.Viewer({ container: container, rotateSpeed: 0.10, autoHideInfospot: false, });
viewer.add(panorama);
viewer.setCameraFov(120);
panorama.fadeIn();
addinfopoints();
//Functions
function addinfopoints() {
  const ifpvideocaptacao = new PANOLENS.Infospot(25, PANOLENS.DataImage.Iconvideo)
  ifpvideocaptacao.position.set(20, -90, -100)
  ifpvideocaptacao.addHoverText('Captação' , -50);
  ifpvideocaptacao.lockHoverElement();
  ifpvideocaptacao.show();
  var videocaptacao = 'https://player.vimeo.com/video/649230150';
  ifpvideocaptacao.addEventListener('click', () => { callmodalvideo(videocaptacao) });
  panorama.add(ifpvideocaptacao);
}
function callmodalvideo(video) {
  $("#video").attr("src", video);
  //  Modal show()
    $("#exampleModal").modal({
      backdrop: 'static',
      keyboard: false
    });
}
//Modal close()
const bntclosemodal = document.querySelector('#bntclosemodal');
bntclosemodal.addEventListener("click", function (event) {
  $("#exampleModal").modal('hide');
  $("#video").attr("src", "");
});