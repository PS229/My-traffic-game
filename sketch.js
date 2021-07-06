var road,road2,car1,car2,car3,car4,signalp1,signalb1,signall1,signalp2,signalb2,signall2
var car1Img,car2Img,car3Img,car4Img
var bush1,bush2,bush3,bush4,bush5,bush6,bush7,bush8,bushImg,bush1Img
var car1sb,car2sb,car3sb,car4sb
var car1s,car2s,car3s,car4s
var roadl1,roadl2,roadl3,roadl4
var PLAY = 0
var END = 1
var gameState = PLAY

function preload() {
  car1Img = loadImage("1 nb.png")
  car2Img = loadImage("2 nb.png")
  car3Img = loadImage("3 nb.png")
  car4Img = loadImage("4 nb.png")

}

function setup() {
  createCanvas(600,600);
  road = createSprite(300,300,125,800)
  road.shapeColor = 87, 87, 87
  road2 = createSprite(300,300,800,125)
  road2.shapeColor = 87, 87, 87

  roadl1 = createSprite(120,300,235,15)
  roadl1.shapeColor = "white"
  roadl2 = createSprite(300,120,15,235)
  roadl2.shapeColor = "white"
  roadl3 = createSprite(480,300,235,15)
  roadl3.shapeColor = "white"
  roadl4 = createSprite(300,480,15,235)
  roadl4.shapeColor = "white"

  car1 = createSprite(-10,325,20,20)
  car1.addImage("car1", car1Img)
  car1.scale = 0.3

  car2 = createSprite(275,-100,20,20)
  car2.addImage("car2", car2Img)
  car2.scale = 0.3

  car3 = createSprite(800,275,20,20)
  car3.addImage("car3", car3Img)
  car3.scale = 0.3

  car4 = createSprite(325,900,20,20)
  car4.addImage("car4", car4Img)
  car4.scale = 0.3

  signalp1 = createSprite(360,225,5,50)
  signalp1.shapeColor = "black"
  signalb1 = createSprite(360,200,20,20)
  signalb1.shapeColor = "black"
  signall1 = createSprite(360,200,10,10)
  signall1.shapeColor = "red"

  signalp2 = createSprite(240,395,5,50)
  signalp2.shapeColor = "black"
  signalb2 = createSprite(240,370,20,20)
  signalb2.shapeColor = "black"
  signall2 = createSprite(240,370,10,10)
  signall2.shapeColor = "green"

  var signalcolorg1 = setInterval(() => signall1.shapeColor = "green", 5000)
  var signalcolorr1 = setInterval(() => signall1.shapeColor = "red", 7500)

  var signalcolorg2 = setInterval(() => signall2.shapeColor = "green", 8000)
  var signalcolorr2 = setInterval(() => signall2.shapeColor = "red", 6000)

  car1sb = createInput("5")
  car1sb.position(10,25)
  car1sb.size(50)
  
  car2sb = createInput("5")
  car2sb.position(10,65)
  car2sb.size(50)
  
  car3sb = createInput("5")
  car3sb.position(515,25)
  car3sb.size(50)
  
  car4sb = createInput("5")
  car4sb.position(515,65)
  car4sb.size(50)

  car1.setCollider("rectangle",20,0,240,130)
  car2.setCollider("rectangle",0,0,130,240)
  car3.setCollider("rectangle",0,0,240,130)
  car4.setCollider("rectangle",0,0,130,240)
  
}

function draw() {
  background(255, 123, 0);

  car1s = car1sb.value()
  car2s = car2sb.value()
  car3s = car3sb.value()
  car4s = car4sb.value()

  if (gameState === PLAY) {
    textSize(15)
  fill(0)
  text("Car 1 speed", 10, 17)
  text("Car 2 speed", 10, 60)
  text("Car 3 speed", 515, 17)
  text("Car 4 speed", 515, 60)

  if (car1.x > 700) {
    car1.x = -10
  }
  if (car2.y > 700) {
    car2.y = -100
  }
  if (car3.x < 100) {
    car3.x = 700
  }
  if (car4.y < -200) {
    car4.y = 800
  }

  if (car1.x === 205 && signall1.shapeColor === "red") {
    car1.velocityX = 0
  }
  else{
    car1.velocityX = car1s
  }
  if (car2.y === 205 && signall2.shapeColor === "red") {
    car2.velocityY = 0
  }
  else{
    car2.velocityY = car2s
  }
  if (car3.x === 395 && signall1.shapeColor === "red") {
    car3.velocityX = 0
  }
  else{
    car3.velocityX = -car3s
  }
  if (car4.y === 395 && signall2.shapeColor === "red") {
    car4.velocityY = 0
  }
  else{
    car4.velocityY = -car4s
  }

  console.log(car1.velocityX)

  if (car1.isTouching(car2) || car2.isTouching(car3) || car3.isTouching(car4) || car4.isTouching(car1)) {
    gameState = END
  }

  drawSprites();
  }

  if (gameState === END) {
    textSize(30)
    fill(0)
    text("GameOver.", 200,300)
    if (keyDown("r")) {
      reset()
      gameState = PLAY
    }
  }

  
}

function reset() {
  car1.x = -10
  car2.y = -100
  car3.x = 800
  car4.y = 900
  
  car1sb.input.value = 5
}

