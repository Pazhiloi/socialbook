  let settingsMenu = document.querySelector('.settings-menu')
      darkBtn      = document.getElementById('dark-btn')

  function settingsMenuToggle() {
    settingsMenu.classList.toggle('settings-menu--height')
  }

  darkBtn.onclick = function () {
    darkBtn.classList.toggle('dark-btn--on')
    document.body.classList.toggle('dark-theme')

    if(localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark')
    }else{
      localStorage.setItem('theme', 'light')
    }
  }

  if (localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn--on')
    document.body.classList.remove('dark-theme')
  } else if(localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark-btn--on')
    document.body.classList.add('dark-theme')
  } else{
    localStorage.setItem('theme', 'light')
  }

  let mainBtn = document.querySelector('.main-content__button')
     leftSidebar = document.querySelector('.left-sidebar')
     rightSidebar = document.querySelector('.right-sidebar')

     mainBtn.onclick = function () {
       leftSidebar.classList.toggle('left-sidebar--remove')
       rightSidebar.classList.toggle('right-sidebar--remove')
     }