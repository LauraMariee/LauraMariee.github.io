function onImageClick(imgSrc, lightboxEl, event) {
    lightboxEl.classList.add('is-active')
    lightboxEl.style.setProperty('--image-src', `url(${imgSrc})`)
  }
  
  
  function onLightboxCloseClick(lightboxEl, event) {
    lightboxEl.classList.remove('is-active')
  }
  
  
  (() => {
    let lightboxEl = document.querySelector('.lightbox')
    
    lightboxEl
      .addEventListener('click', onLightboxCloseClick.bind(null, lightboxEl))
    ;
    
    document
      .querySelectorAll('.gallery img')
      .forEach((imgEl) => {
          imgEl.addEventListener('click', onImageClick.bind(
            null,
            imgEl.src,
            lightboxEl
          ))
      })
    ;
  })();
  