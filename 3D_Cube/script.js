let x = 0

document.querySelector('.left-arrow').addEventListener('click', () => {
  x += 90
  const cubes = document.querySelectorAll('.cube')
  Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`)

})