const container = document.querySelector('#container');
var cenas = {
  cena01: window.location.href+ 'img/img1.jpg',
  cena02: window.location.href+ 'img/img2.jpg',
  cena03: window.location.href+ 'img/img3.jpg',
  cena04: window.location.href+ 'img/img4.jpg',
  cena05: window.location.href+ 'img/img5.jpg',
  cena06: window.location.href+ 'img/img6.jpg',
  cena06b: window.location.href+ 'img/img6_b.jpg',
  cena07: window.location.href+ 'img/img7.jpg',
  cena08a: window.location.href+ 'img/img8_a.jpg',
  //cena11: '../img/vid5.mp4',
}
const panorama1 = new PANOLENS.ImagePanorama(cenas.cena01);
const panorama2 = new PANOLENS.ImagePanorama(cenas.cena02);
const panorama3 = new PANOLENS.ImagePanorama(cenas.cena03);
const panorama4 = new PANOLENS.ImagePanorama(cenas.cena04);
const panorama5 = new PANOLENS.ImagePanorama(cenas.cena05);
const panorama6 = new PANOLENS.ImagePanorama(cenas.cena06);
const panorama6b = new PANOLENS.ImagePanorama(cenas.cena06b);
const panorama7 = new PANOLENS.ImagePanorama(cenas.cena07);
const panorama8 = new PANOLENS.ImagePanorama(cenas.cena08a);

var progress, progressElement;
//const panorama1 = new PANOLENS.VideoPanorama( cenas.cena11 , { autoplay: true } );
const viewer = new PANOLENS.Viewer({ controlBar: false, container: container, rotateSpeed: 0.10, autoHideInfospot: false
});
viewer.add(panorama1);

viewer.setCameraFov(120);
// for (let i = 0; i < cenas.length; i++) { (panorama + i).fadeIn(); }
const posty = 70;
//Panorama 1 e infostpots - Captação da água
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 10, y: -10, z: -180,
    title: 'Prox: Chegada', postitle: posty
  },
  viewer, panorama1, panorama2
)
createInfospot('videomodal',
  options = {
    zoom: 32, imgico: PANOLENS.DataImage.Iconvideo, x: 100, y: -10, z: -100,
    title: 'Captação', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230150', titlemodal: 'Captação'
  },
  viewer, panorama1, panorama2
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -60, y: 10, z:150,
    title: 'Rio dos sinos', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230010', titlemodal: 'Rio dos sinos'
  },
  viewer, panorama1, panorama2
)

//Panorama 2 e infostpots - Chegada
createInfospot('nav',
  options = {
    zoom: 50, imgico: PANOLENS.DataImage.Arrow, x: 250, y: -10, z: 0,
    title: 'Prox: Floculador', postitle: posty
  },
  viewer, panorama2, panorama3
)
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: -80, y: -10, z: -100,
    title: 'Voltar: Captação da água', postitle: posty
  },
  viewer, panorama2, panorama1
)
createInfospot('videomodal',
  options = {
    zoom: 120, imgico: PANOLENS.DataImage.Iconvideo, x: -680, y: -10, z: 10,
    title: 'Calha Parshal', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230284', titlemodal: 'Calha Parshal'
  },
  viewer, panorama2, 0
)

//Panorama 3 e infostpots - Floculador
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: -175, y: 5, z: -5,
    title: 'Prox: Decantador', postitle: posty
  },
  viewer, panorama3, panorama4
)
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: -80, y: -10, z: -100,
    title: 'Voltar: Chegada', postitle: posty
  },
  viewer, panorama3, panorama2
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -10, y: -10, z: -100,
    title: 'Floculador', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230615', titlemodal: 'Floculador'
  },
  viewer, panorama3, 0
)

//Panorama 4 e infostpots - Decantador
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: -10, y: 10, z: 155,
    title: 'Prox: Filtro', postitle: posty
  },
  viewer, panorama4, panorama5
)
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: 10, y: -5, z: -130,
    title: 'Voltar: Floculador', postitle: posty
  },
  viewer, panorama4, panorama3
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 80, y: -40, z: -120,
    title: 'Decantador', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230703', titlemodal: 'Decantador'
  },
  viewer, panorama4, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -200, y: 0, z: 20,
    title: 'Decantador vazio', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230734', titlemodal: 'Decantador vazio'
  },
  viewer, panorama4, 0
)

//Panorama 5 e infostpots - Filtro
createInfospot('nav',
  options = {
    zoom: 25, imgico: PANOLENS.DataImage.Arrow, x: 80, y: 10, z: 80,
    title: 'Prox: Aplicação de Cloro', postitle: posty
  },
  viewer, panorama5, panorama6
)
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: 100, y: -20, z: -60,
    title: 'Voltar: Decantador', postitle: posty
  },
  viewer, panorama5, panorama4
)
createInfospot('videomodal',
  options = {
    zoom: 25, imgico: PANOLENS.DataImage.Iconvideo, x: 80, y: 0, z: 20,
    title: 'Filtro', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230825', titlemodal: 'Filtro'
  },
  viewer, panorama5, 0
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 30, y: -60, z: 80,
    title: 'Filtro vazio', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649230951', titlemodal: 'Filtro vazio'
  },
  viewer, panorama5, 0
)

//Panorama 6 e infostpots - Aplicação de Cloro
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 50, y: -10, z: 100,
    title: 'Prox:  Tanques de Cloro', postitle: -70
  },
  viewer, panorama6, panorama6b
)
createInfospot('nav',
  options = {
    zoom: 25, imgico: PANOLENS.DataImage.Arrow, x: -15, y: 0, z: -100,
    title: 'Prox:  Reservatório', postitle: posty
  },
  viewer, panorama6, panorama6b
)
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: 150, y: 10, z: -15,
    title: 'Voltar:  Filtro', postitle: posty
  },
  viewer, panorama6, panorama5
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 75, y: 20, z: 100,
    title: 'Depósito de Cloro', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231036', titlemodal: 'Depósito de Cloro'
  },
  viewer, panorama6, 0
)

//Panorama 6b e infostpots - Tanques de Cloro
createInfospot('nav',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconback, x: 0, y: -10, z: -100,
    title: 'Voltar:  Depósito de Cloro', postitle: posty
  },
  viewer, panorama6b, panorama6
)

//Panorama 7 e infostpots - Reservatório
createInfospot('nav',
  options = {
    zoom: 25, imgico: PANOLENS.DataImage.Arrow, x: 50, y: 0, z: -100,
    title: 'Prox:  Laboratório', postitle: posty
  },
  viewer, panorama7, panorama8
)
createInfospot('nav',
  options = {
    zoom: 30, imgico: PANOLENS.DataImage.Iconback, x: 80, y: -10, z: -100,
    title: 'Voltar:  Aplicação de Cloro', postitle: -70
  },
  viewer, panorama7, panorama6
)
createInfospot('videomodal',
  options = {
    zoom: 30, imgico: PANOLENS.DataImage.Iconvideo, x: 120, y: -10, z: -10,
    title: 'Reservatório', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231460', titlemodal: 'Reservatório'
  },
  viewer, panorama7
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 180, y: -20, z: 120,
    title: 'Estação de bombeamento', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231586', titlemodal: 'Estação de bombeamento'
  },
  viewer, panorama7
)

//Panorama 8 e infostpots - Laboratório
// createInfospot('nav',
//   options = {
//     zoom: 35, imgico: PANOLENS.DataImage.Arrow, x: 80, y: -10, z: -100,
//     title: 'Prox: Captação da água', postitle: posty
//   },
//   viewer, panorama8, panorama1
// )
createInfospot('nav',
  options = {
    zoom: 25, imgico: PANOLENS.DataImage.Iconback, x: -70, y: -10, z: 100,
    title: 'Voltar:  Reservatório', postitle: posty
  },
  viewer, panorama8, panorama7
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: -100, y: -10, z: -100,
    title: 'Laboratório', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231111', titlemodal: 'Laboratório'
  },
  viewer, panorama8
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 130, y: -10, z: -50,
    title: 'Supervisório', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231210', titlemodal: 'Supervisório'
  },
  viewer, panorama8
)
createInfospot('videomodal',
  options = {
    zoom: 35, imgico: PANOLENS.DataImage.Iconvideo, x: 150, y: 10, z: 60,
    title: 'Laboratório de Bacteriologia ', postitle: posty, urlvideo: 'https://player.vimeo.com/video/649231306', titlemodal: 'Laboratório de Bacteriologia '
  },
  viewer, panorama8
)

//Create infospot
function createInfospot(typeinfospot, options, viewer, panoramaorg, panoramadest) {
  if (typeinfospot == 'nav') {
    viewer.add(panoramadest);
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
  panorama.addEventListener( 'progress', onProgress );
  panorama.addEventListener( 'enter', onEnter );
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

progressElement = document.getElementById( 'progress' );
function onEnter ( event ) {
  progressElement.style.width = 0;
  progressElement.classList.remove( 'finish' );
}
function onProgress ( event ) {
  progress = event.progress.loaded / event.progress.total * 100;
  progressElement.style.width = progress + '%';
  if ( progress === 100 ) {
    progressElement.classList.add( 'finish' );
  }
}

