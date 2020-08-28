
class Food{
    constructor(){
        this.foodStock;
        var lastFed;
        this.image = loadImage("Milk.png");
        
    }
    getFoodStock(){
        this.foodStock = database.ref('foodStock');
        this.foodStock.on("value",readStock);
    }
    updateStock (x){
 
        database.ref('/').update({
          Food:x
        })
      }
    
    
    display(){
       for(var e = 10;e<(width/2+40-((10-foods)*30));e = e+30){ 
          imageMode(CENTER);
          image(this.image,e,height/2,30,30);
          //console.log(fv);
       }
    } 
      
}