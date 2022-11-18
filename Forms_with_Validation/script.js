const container = document.querySelector('.container')
const headingSpan2 = document.querySelector('.heading-span-2')

document.querySelector('.signup-btn').addEventListener('click', () => {
  container.classList.add('change')
  setTimeout(() => {
    headingSpan2.textContent = 'Up'
  }, 200)
})

document.querySelector('.signin-btn').addEventListener('click', () => {
  container.classList.remove('change')
  setTimeout(() => {
    headingSpan2.textContent = 'In'
  }, 200)
})

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')