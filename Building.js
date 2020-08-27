class Building{
  
  constructor()
  
  {
    this.height=10;
    this.position=1;    
    this.yPosition=390;
    this.width=25;
    this.floors=10;
    
    //Each floor is approximately equal to 12 feet
    //If a building has 3 floors it would be 3*12=36 feet high.
    
    this.building_height=this.floors*12;
    
  }  
  
  display()
  
  {
   
    this.height=this.floors*8;
   this.yPosition=395-(this.height);
    //this.xPosition=395-(this.height);
   this.xPosition=this.position*40;
   rect(this.xPosition,this.yPosition, this.width, this.height); 
  
  }  
  
}
