window.addEventListener('load', () => {
    const imagesToPreload = [
      '%PUBLIC_URL%/../../src/Photos/JCSbanner2.png',
      '%PUBLIC_URL%/../../src/Photos/bivobanner2.png',
      '%PUBLIC_URL%/../../src/Photos/kasabanner2.png',
      '%PUBLIC_URL%/../../src/Photos/sbbanner2.png',
      '%PUBLIC_URL%/../../src/Photos/omfbanner2.png'
    ];
  
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      img.decode().then(() => {
        console.log(`${src} is decoded`);
      }).catch((err) => {
        console.error(`Decoding ${src} failed: `, err);
      });
    });
  });