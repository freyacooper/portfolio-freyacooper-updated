window.addEventListener('load', () => {
    const imagesToPreload = [
      '%PUBLIC_URL%/../../src/Photos/JCSbanner.png',
      '%PUBLIC_URL%/../../src/Photos/bivobanner.png',
      '%PUBLIC_URL%/../../src/Photos/kasabanner.png',
      '%PUBLIC_URL%/../../src/Photos/sbbanner.png',
      '%PUBLIC_URL%/../../src/Photos/omfbanner.png'
    ];
  
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });