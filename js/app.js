window.onload = () => {
  const nav = document.querySelector('.nav')
  const menuBtn = document.querySelectorAll('.icon-box__icon')[0]
  const menuToggle = e => {
    if (nav.style.display === 'none') {
      nav.style.display = 'block'
    } else {
      nav.style.display = 'none'
    }
  }
  menuBtn.addEventListener('click', menuToggle)
}
