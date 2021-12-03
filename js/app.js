
const container = document.querySelector('#container');
var cenas = {
  cena01:  window.location.origin +  '/img/img1.jpg',
  cena02:  window.location.origin + '/img/img2.jpg',
  cena03:  window.location.origin + '/img/img3.jpg',
  cena04:  window.location.origin + '/img/img4.jpg',
  cena05:  window.location.origin + '/img/img5.jpg',
  cena06:  window.location.origin + '/img/img6.jpg',
  cena07:  window.location.origin + '/img/img6_b.jpg',
  cena08:  window.location.origin + '/img/img7.jpg',
  cena09:  window.location.origin + '/img/img8_a.jpg',
  cena10:  window.location.origin + '/img/img8_b.jpg',
  //cena11: '../img/vid5.mp4',
}

console.log(window.location.origin);
console.log(cenas);

const panorama1 = new PANOLENS.ImagePanorama(cenas.cena01);
const panorama2 = new PANOLENS.ImagePanorama(cenas.cena02);
const panorama3 = new PANOLENS.ImagePanorama(cenas.cena03);
const panorama4 = new PANOLENS.ImagePanorama(cenas.cena04);
const panorama5 = new PANOLENS.ImagePanorama(cenas.cena05);
const panorama6 = new PANOLENS.ImagePanorama(cenas.cena06);
const panorama7 = new PANOLENS.ImagePanorama(cenas.cena07);
const panorama8 = new PANOLENS.ImagePanorama(cenas.cena08);
const panorama9 = new PANOLENS.ImagePanorama(cenas.cena09);
const panorama10 = new PANOLENS.ImagePanorama(cenas.cena10);
//const panorama1 = new PANOLENS.VideoPanorama( cenas.cena11 , { autoplay: true } );
const viewer = new PANOLENS.Viewer({ controlBar: false, container: container, rotateSpeed: 0.10, autoHideInfospot: false });
viewer.add(panorama1);
viewer.add(panorama2);
viewer.add(panorama3);
viewer.add(panorama4);
viewer.add(panorama5);
viewer.add(panorama6);
viewer.add(panorama7);
viewer.add(panorama8);
viewer.add(panorama9);
viewer.add(panorama10);
viewer.setCameraFov(120);
for (let i = 0; i < cenas.length; i++) { (panorama + i).fadeIn(); }
const posty = 70;
//Panorama 1 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 150, y: -10, z: -100,
    title: 'Navegação: Cena02', postitle: posty
  },
  viewer, panorama1, panorama2
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 100, y: -10, z: -100,
    title: 'Captação', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230150', titlemodal: 'Captação'
  },
  viewer, panorama1, panorama2
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 50, y: -10, z: -100,
    title: 'Rio dos sinos', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Rio dos sinos'
  },
  viewer, panorama1, panorama2
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconacao, x: 0, y: -10, z: -100,
    title: 'Teste ICO ACAO', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Teste ICO ACAO'
  },
  viewer, panorama1, panorama2
)

createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconimg, x: -50, y: -10, z: -100,
    title: 'Teste ICO IMG', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Teste ICO IMG'
  },
  viewer, panorama1, panorama2
)

createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: -100, y: -10, z: -100,
    title: 'Teste ICO BACK', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Teste ICO BACK'
  },
  viewer, panorama1, panorama2
)

createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Icontxt, x: -150, y: -10, z: -100,
    title: 'Teste ICO TXT', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Teste ICO TXT'
  },
  viewer, panorama1, panorama2
)

createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -200, y: -10, z: -100,
    title: 'Teste ICO VIDEO', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Teste ICO VIDEO'
  },
  viewer, panorama1, panorama2
)

//Panorama 2 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena03', postitle: posty
  },
  viewer, panorama2, panorama3
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -80, z: -100,
    title: 'Calha Parshal', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230284', titlemodal: 'Calha Parshal'
  },
  viewer, panorama2, 0
)

//Panorama 3 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena04', postitle: posty
  },
  viewer, panorama3, panorama4
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Floculador', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230615', titlemodal: 'Floculador'
  },
  viewer, panorama3, 0
)

//Panorama 4 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena05', postitle: posty
  },
  viewer, panorama4, panorama5
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Decantador', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230703', titlemodal: 'Decantador'
  },
  viewer, panorama4, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -80, y: -10, z: -100,
    title: 'Decantador vazio', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230734', titlemodal: 'Decantador vazio'
  },
  viewer, panorama4, 0
)

//Panorama 5 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena06', postitle: posty
  },
  viewer, panorama5, panorama6
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Filtro', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230825', titlemodal: 'Filtro'
  },
  viewer, panorama5, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -80, y: -10, z: -100,
    title: 'Filtro vazio', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230951', titlemodal: 'Filtro vazio'
  },
  viewer, panorama5, 0
)

//Panorama 6 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena07', postitle: posty
  },
  viewer, panorama6, panorama7
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Depósito de Cloro', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231036', titlemodal: 'Depósito de Cloro'
  },
  viewer, panorama6, 0
)

//Panorama 7 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena08', postitle: posty
  },
  viewer, panorama7, panorama8
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Reservatório', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231460', titlemodal: 'Reservatório'
  },
  viewer, panorama7, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -80, y: -10, z: -100,
    title: 'Estação de bombeamento', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231586', titlemodal: 'Estação de bombeamento'
  },
  viewer, panorama7, 0
)

//Panorama 8 e infostpots
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
    title: 'Navegação: Cena01', postitle: posty
  },
  viewer, panorama8, panorama1
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Laboratório', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231111', titlemodal: 'Reservatório'
  },
  viewer, panorama8, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -160, y: -10, z: -100,
    title: 'Supervisório', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231210', titlemodal: 'Supervisório'
  },
  viewer, panorama8, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -80, y: -10, z: -100,
    title: 'Laboratório de Bacteorologia', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231306', titlemodal: 'Laboratório de Bacteorologia'
  },
  viewer, panorama8, 0
)
//Create infospot
function createInfospot(typeinfospot, options, viewer, panoramaorg, panoramadest) {
  if (typeinfospot == 'nav') {
    const navname = new PANOLENS.Infospot(options.zoom, options.imgico)
    navname.position.set(options.x, options.y, options.z)
    navname.addHoverText(options.title, options.postitle);
    navname.lockHoverElement();
    navname.show();
    navname.addEventListener('click', () => {
      callpanorama(viewer, panoramadest)
    });
    panoramaorg.add(navname);
  }
  if (typeinfospot == 'videomodal') {
    navname = new PANOLENS.Infospot(options.zoom, options.imgico)
    navname.position.set(options.x, options.y, options.z)
    navname.addHoverText(options.title, options.postitle);
    navname.lockHoverElement();
    navname.show();
    navname.addEventListener('click', () => {
      callmodalvideo(options.urlvideo, options.titlemodal)
    });
    panoramaorg.add(navname);
  }
}
//Call Panorama 
function callpanorama(viewer, panorama) {
  viewer.setPanorama(panorama);
}
//Modal Functions
function callmodalvideo(video, titlemodal) {
  $("#video").attr("src", video);
  //Modal show()
  $("#videoModal").modal({ backdrop: 'static', keyboard: false });
  //$("#mapModal").modal({ backdrop: 'static', keyboard: false });
  document.querySelector("#titlemodal").innerHTML = titlemodal;
}
//Modal close()
const bntclosemodal = document.querySelector('#bntclosemodal');
bntclosemodal.addEventListener("click", function (event) {
  $("#videoModal").modal('hide');
  $("#video").attr("src", "");
});