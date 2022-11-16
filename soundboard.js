var buttonElement = document.getElementById('button1')

buttonElement.addEventListener('mouseenter', function () {
    console.log('I was Hovered on!!'),
    boo.wav.play()
  })

  buttonElement.addEventListener('click', function () {
    console.log('I was Clicked'),
    applause2_x.wav.play()
  })