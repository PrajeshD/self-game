class Ship{
    constructor(type,x,y){
        this.sprite=createSprite(x,y)
        
        if(type === "EnCaptain"){
            this.sprite.addImage(EnCaptain)
        }
        else if(type === "En1"){
            this.sprite.addImage(EnType1)
            this.sprite.scale = 0.45;
            this.sprite.rotation = 90;
        }
        else if(type === "En2"){
            this.sprite.addImage(EnType2)
            this.sprite.scale = 0.45;
            this.sprite.rotation = 90;
        }
        else if(type === "En3"){
            this.sprite.addImage(EnType3)
            this.sprite.scale = 0.45;
            this.sprite.rotation = 90;
        }
    }
}
class Player{
    constructor(x,y){
        this.sprite=createSprite(x,y)
        this.sprite.addImage(playerImage);
        this.sprite.scale = 0.6;
    }
    control(){
        if (keyDown("up")|| keyDown("W"))
        {
            this.sprite.y-= 5;
        }
        if (keyDown("down") || keyDown("S"))
        {
            this.sprite.y+= 5;
        }
    }
}