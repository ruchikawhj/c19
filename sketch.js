
  var PLAY=1
  var END=0
  var gameState=PLAY;
    var bow , arrow,  background1;
    var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
    var score=0;
  var pinkGroup,greenGroup,redGroup,blueGroup,arrowGroup

    function preload()
  {

      backgroundImage = loadImage("background0.png");

      arrowImage = loadImage("arrow0.png");
      bowImage = loadImage("bow0.png");
      red_balloonImage = loadImage("red_balloon0.png");
      green_balloonImage = loadImage("green_balloon0.png");
      pink_balloonImage = loadImage("pink_balloon0.png");
      blue_balloonImage = loadImage("blue_balloon0.png");

    }

    function setup() 
  {
      createCanvas(600, 600);

      //creating background
      background1 = createSprite(0,0,600,600);
      background1.addImage(backgroundImage);
      background1.scale = 2.5

      // creating bow to shoot arrow
      bow = createSprite(480,220,20,50);
      bow.addImage(bowImage); 
      bow.scale = 1;

  pinkGroup=new Group();
    blueGroup=new Group();
     redGroup=new Group();
     greenGroup=new Group();
     arrowGroup=new Group();
    }

    function draw() 
  {
      // moving ground



      //moving bow
      bow.y = World.mouseY

  if(gameState===PLAY) 
  {
     background1.velocityX = -3 

        if (background1.x < 0){
          background1.x = background1.width/2;
        }

       // release arrow when space key is pressed
      if (keyDown("space")) 
      {
        var temp_arrow = createArrow();
        temp_arrow.addImage(arrowImage);
         temp_arrow.y = bow.y;
      }

      var select_balloon = Math.round(random(1,4));
      console.log(select_balloon)

      if (World.frameCount % 80 == 0) 
      {
        if (select_balloon == 1) {
          redBalloon();
        } else if (select_balloon == 2) 
        {
          greenBalloon();
        } else if (select_balloon == 3) 
        {
          blueBalloon();
        } else {
          pinkBalloon();
        }
      }
    if(pinkGroup.isTouching(arrowGroup))
    {
     pinkGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
    if(greenGroup.isTouching(arrowGroup)){
      greenGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;
    }
    if(redGroup.isTouching(arrowGroup)){
      redGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1;

    }
    if(blueGroup.isTouching(arrowGroup)){
      blueGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1
    }
  else if(gameState===END)
  {

  }
      drawSprites();
    textSize(20);
       text("score="+score,500,20);

    }


    function redBalloon() 
  {
      var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
      red.addImage(red_balloonImage);
      red.velocityX = 3;
      red.lifetime = 150;
      red.scale = 0.1
    redGroup.add(red);
    }

    function blueBalloon() 
  {
      var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
      blue.addImage(blue_balloonImage);
      blue.velocityX = 3;
      blue.lifetime = 150;
      blue.scale = 0.1
    blueGroup.add(blue);
    }

    function greenBalloon() 
  {
      var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
      green.addImage(green_balloonImage);
      green.velocityX = 3;
      green.lifetime = 150;
      green.scale = 0.1
    greenGroup.add(green);
    }

    function pinkBalloon() 
  {
      var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
      pink.addImage(pink_balloonImage);
      pink.velocityX = 3;
      pink.lifetime = 150;
      pink.scale = 1
    pinkGroup.add(pink);
    }


    // Creating  arrows for bow
    function createArrow()
  {
      arrow= createSprite(480, 100, 5, 10);
      arrow.velocityX = -6;
      arrow.scale = 0.3;
      arrow.lifetime=300;

    arrowGroup.add(arrow);
     return arrow;
    }

  }