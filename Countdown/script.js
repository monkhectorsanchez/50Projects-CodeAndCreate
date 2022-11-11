const countdown = document.querySelector('.countdown')

const interval = setInterval(() => {
  const deadline = new Date(2023, 0, 1, 12, 00, 00)

  const current = new Date()

  const diff = deadline - current

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / (1000)) % 60)

  countdown.innerHTML = `
    <div data-content="Days">${days}</div>
    <div data-content="Hours">${hours}</div>
    <div data-content="Minutes">${minutes}</div>
    <div data-content="Seconds">${seconds}</div>
  `
}, 1000)

