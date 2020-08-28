//Create variables here
var dog,happydog,database,foods = 10,d,feed,addFood;
var meter = "normal";
var time = 0;
var fedTime,lastFed,food;
function preload()
{
  //load images here
  d = loadImage("dogImg.png")
  happydog=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(400,250,40,40);
  dog.addImage(d);
  dog.scale = 0.2;
  database = firebase.database();

  food = new Food();

  feed = createButton("Feed the dog");
  feed.position(400,95);
  feed.mousePressed(function(){
    if (foods<0){
      foods=0;
    }else{
      foods--
    }
    dog.addImage(happydog);
  });

  addFood = createButton("Add food");
  addFood.position(750,95);
  addFood.mousePressed(function(){
    if(foods>10){
      foods = 10;
    }else{
      foods++
    }
  });
}


function draw() {  
  background(46,50,87)
  drawSprites();
  //add styles here
  
  food.display();
  food.getFoodStock();
  food.updateStock(foods);
 //console.log(foods);
}



function readStock (data){
  //foods=data.val();
}





