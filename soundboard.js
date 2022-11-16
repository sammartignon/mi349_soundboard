var buttonElement = document.getElementById('button1')
var boo = document.getElementById("boo.wav")
var applause2 = document.getElementById("applause2_x.wav")

buttonElement.addEventListener('mouseenter', function () {
    console.log('I was Hovered on!!'),
    boo.play()
  })

  buttonElement.addEventListener('click', function () {
    console.log('I was Clicked'),
    applause2.play()
  })