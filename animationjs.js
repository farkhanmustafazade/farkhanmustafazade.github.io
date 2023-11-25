const green = ['#618264', '#79AC78', '#9CAF88', '#B0D9B1', '#DFE6DA'];

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function changeColor() {
    const randomIndex = getRandomIndex(green);
    document.body.style.backgroundColor = green[randomIndex];
  }

  setInterval(changeColor, 800);
