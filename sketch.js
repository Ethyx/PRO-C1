var b1, b2, b3, b4, b5, b6;

function setup() {
  // Creating a Big Canvas.
  createCanvas(1250, 410);
  
  // Create New Buildings (Objects) and define their properties.
  b1 = new Building();
  b1.position = 12.5625;
  b1.floors = 45;

  b2 = new Building();
  b2.position = 0.0625;
  b2.floors = 39;
  
  b3 = new Building();
  b3.position = 23;
  b3.floors=20;
  
  b4 = new Building();
  b4.position = 25;
  b4.floors=22;
  
  b5 = new Building();
  b5.position = 27;
  b5.floors = 26;
  
  b6 =  new Building();
  b6.position = 29;
  b6.floors = 28;
  
}

function draw_parkinglot() {
  fill(95,82,146);
  rect(535,380,15,15);
  rect(35,380,15,15);
  rect(900,380,15,15);
  rect(980,380,15,15);
  rect(1060,380,15,15);
  rect(1140,380,15,15);
}

// Set the background color to light blue.
function draw_sky(){
  background(135,206,235); 
}

function draw_cloud() {
 // Two White Clouds.
  fill(255,255,255);
  noStroke();
  ellipse(65, 50, 60, 50);
  ellipse(80, 40, 60, 50);
  ellipse(130, 50, 60, 50);
  ellipse(70, 70, 60, 50);
  ellipse(110, 65, 60, 50);
  ellipse(475, 50, 50, 50);
  ellipse(445, 40, 60, 50);
  ellipse(415, 50, 60, 50);
  ellipse(430, 70, 60, 50);
  ellipse(850, 45, 60, 50);
  ellipse(885, 50, 60, 50);
  ellipse(890, 70, 60, 50);
  ellipse(850, 70, 60, 50);
  ellipse(1100, 70, 60, 50);
  ellipse(1075, 70, 60, 50);
  ellipse(1065, 50, 60, 50);
  ellipse(1085, 50, 60, 50);
}

// Display Building
function display_building() {
  fill(0,20,44);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
}

// Draw Sun.
function draw_sun() {
  fill(255,204,0);
  ellipse(645,15,50,50);
}

// Draw Road.
function draw_road() {
  fill(203,203,203);
  rect(0,390,1250,250);
}

// Fraw Soccer Field
function draw_soccerfield() {
  fill(0, 44, 35);
  rect(1239, 382, 1, 10);
  rect(1230, 382, 1, 10);
  rect(1230, 381, 10, 1);
  rect(1221, 381, 10, 1);
  rect(1221, 382, 1, 10);
  fill(0, 198, 59);
  rect(1200, 390, 150, 150);
  
}

// Draw Hospital.
function draw_hospital() {
  fill(255,255,255);
  rect(706,200,60,200);
  fill(0,0,0);
  rect(733,395,5,5);
  fill(255,0,0);
  rect(706,230,60,25);
  rect(723,215, 25,60);
}

// Draw School.
function draw_school() {
  fill(198,59,0);
  rect(300,350,150,50);
  textSize(32);
  fill(0,0,0);
  text("School", 300, 375);
}

// Draw Store.
function draw_store(){
  fill(199,105,155);
  rect(150,360,40,40);
  fill(0,0,0);
  textSize(16);
  text('Store',150,375);
}
function draw(){
  
  // Set background color to blue (sky).
  draw_sky();
  
  // Draw a few clouds.
  draw_cloud();
  
  // The Yellow Sun.
  draw_sun();
  
  // Concrete Roads/Sidewalks.
  draw_road();
  
  // Draw a few parking lots.
  draw_parkinglot();
  
  // Display The Buildings.
  display_building();
  
  // Draw a playground for children.
  draw_soccerfield();
  
  // Draw a Hospital for people who get sick.
  draw_hospital();
  
  // Draw a School for children's education.
  draw_school();
  
  // Draw a Store to get food stuffs.
  draw_store();
}
// Sims 2D - Rishi Edition