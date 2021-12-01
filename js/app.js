const container = document.querySelector('#container');
var cenas = {
  map: '../img/mapa_intro.jpg',
  cena01: '../img/img1.jpg',
  cena02: '../img/img2.jpg',
  cena03: '../img/img3.jpg',
  cena04: '../img/img4_a.jpg',
}
const panorama1 = new PANOLENS.ImagePanorama(cenas.cena01);
const panorama2 = new PANOLENS.ImagePanorama(cenas.cena02);
const panorama3 = new PANOLENS.ImagePanorama(cenas.cena03);
const panorama4 = new PANOLENS.ImagePanorama(cenas.cena04);

const viewer = new PANOLENS.Viewer({ container: container, rotateSpeed: 0.10, autoHideInfospot: false });
viewer.add(panorama1);
viewer.add(panorama2);
viewer.add(panorama3);
viewer.add(panorama4);
viewer.setCameraFov(120);

for (let i = 0; i < cenas.length; i++) { (panorama + i).fadeIn(); }

addinfopoints();

function addinfopoints() {
  /**
  *  Panorama 1 e infostpots
  * 
  */
  const navPanoram1 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Map)
  navPanoram1.position.set(80, -10, -100)
  navPanoram1.addHoverText('Tratamento Tela', -70);
  navPanoram1.lockHoverElement();
  navPanoram1.show();
  navPanoram1.addEventListener('click', () => {
    callpanorama(viewer, panorama2)
  });
  panorama1.add(navPanoram1);

  const ifpvideocaptacao = new PANOLENS.Infospot(25, PANOLENS.DataImage.Iconvideo)
  ifpvideocaptacao.position.set(-10, -10, -100)
  ifpvideocaptacao.addHoverText('Vídeo Captação', -70);
  ifpvideocaptacao.lockHoverElement();
  ifpvideocaptacao.show();
  var urlvideo = 'https://player.vimeo.com/video/649230150';
  ifpvideocaptacao.addEventListener('click', () => {
    callmodalvideo(urlvideo)
  });
  panorama1.add(ifpvideocaptacao);

  /**
  *  Panorama 2 e infostpots
  *
  */
  const navPanorama2 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Arrow)
  navPanorama2.position.set(70, -120, -100)
  navPanorama2.addHoverText('Captação tela', -70);
  navPanorama2.lockHoverElement();
  navPanorama2.show();
  navPanorama2.addEventListener('click', () => {
    callpanorama(viewer, panorama3)
  });
  panorama2.add(navPanorama2);

  const infPanorama2 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Iconvideo)
  infPanorama2.position.set(80, -60, -100)
  infPanorama2.addHoverText('Video Tratamento', -50);
  infPanorama2.lockHoverElement();
  infPanorama2.show();
  var urlvideo2 = 'https://player.vimeo.com/video/649230284';
  infPanorama2.addEventListener('click', () => {
    callmodalvideo(urlvideo2)
  });
  panorama2.add(infPanorama2);
  /**
  *  Panorama 2 e infostpots
  *
  */
  const navPanorama3 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Arrow)
  navPanorama3.position.set(70, -120, -100)
  navPanorama3.addHoverText('Captação tela', -70);
  navPanorama3.lockHoverElement();
  navPanorama3.show();
  navPanorama3.addEventListener('click', () => {
    callpanorama(viewer, panorama4)
  });
  panorama2.add(navPanorama3);

  const infPanorama3 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Iconvideo)
  infPanorama3.position.set(80, -60, -100)
  infPanorama3.addHoverText('Video Tratamento', -50);
  infPanorama3.lockHoverElement();
  infPanorama3.show();
  var urlvideo2 = 'https://player.vimeo.com/video/649230284';
  infPanorama3.addEventListener('click', () => {
    callmodalvideo(urlvideo2)
  });
  panorama2.add(infPanorama3);
}

// Chama o panorama 
function callpanorama(viewer, panorama) {
  viewer.setPanorama(panorama);
}
/**
 * 
 *  Modal Functions
 * 
 */
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