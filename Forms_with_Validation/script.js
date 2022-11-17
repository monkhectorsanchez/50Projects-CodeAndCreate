const container = document.querySelector('.container')
const headingSpan2 = document.querySelector('.heading-span-2')

document.querySelector('.signup-btn').addEventListener('click', () => {
  container.classList.add('change')
  headingSpan2.textContent = 'Up'
})

document.querySelector('.signin-btn').addEventListener('click', () => {
  container.classList.remove('change')
  headingSpan2.textContent = 'In'
})