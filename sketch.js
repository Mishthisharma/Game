var man , bgImg1 , thinkingBox , option1 , option2 , option3 , optionBox
 var myVar ;
function preload()
{
  	man = createImg("Images/Picture1.png")
	thinkingBox = createImg("Images/thinkingBox.png")
	bgImg1 = loadImage("Images/landPollution image1.jpg")
	//continueImg = createImg("Images/continueImg.webp.png")
	
}

function setup() {
	createCanvas(displayWidth - 48, displayHeight -201);
	background(bgImg1)
    man.position(0 , displayHeight-600)
    thinkingBox.position(130, displayHeight - 830)
	thinkingBox.size(250 , 250)
	
}


function draw() 
{
  drawSprites();

 
}

