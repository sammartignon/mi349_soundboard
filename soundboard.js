var buttonElement = document.getElementById('button1')
var boo = new Audio("boo.wav")
var applause2 = new Audio("applause2_x.wav")

buttonElement.addEventListener('mouseenter', function () {
    console.log('I was Hovered on!!'),
    boo.play()
  })

  buttonElement.addEventListener('click', function () {
    console.log('I was Clicked'),
    applause2.play()
  })

  var buttonElement = document.getElementById('button2')
  var champagne = new Audio("champagne.wav")
  var cheering = new Audio("cheering.wav")

  buttonElement.addEventListener('mouseenter', function () {
    console.log('I was Hovered on!!'),
    champagne.play()
  })

  buttonElement.addEventListener('click', function () {
    console.log('I was Clicked'),
    cheering.play()
  })


  var buttonElement = document.getElementById('button3')