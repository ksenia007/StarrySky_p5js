var starsLocationsX=[];
var starsLocationsY=[];
var randomStarsX=[];
var randomStarsY=[];
var first=true;
var shootingXstart=[];
var shootingYstart=[];



function setup(){
    //create canvas
    createCanvas(900, 600);
    // change the frame rate to make slower
    frameRate(60);
    //set the background
    background(0);
    //load images
    img = loadImage("assets/lakeEveningSmall.jpg");  // Load an image into the program
    hw=loadImage('assets/hwLake.jpg');
    //initialize the shooting star location
    shootingXstart.push(800);
    shootingYstart.push(200);
}

function draw(){ 
    //place the background image
    image(img,0,0);
    noFill(); //no fill in shapes

    //////////// Hello Word Stars
    //get the number of stars we already have
    lengthStars=randomStarsX.length;
    //define variables
    var xS=0; 
    var yS=0;
    var added=0; //counter for the number of stars added this iteration
    // check if there are enough stars
    if (lengthStars<900){
        // we want to add 5 every iteration
        while (added<5){
            xS=round(Math.random()*(width)); //find random x
            yS=round(Math.random()*(height-250)); //random y in range

            if (red(hw.get(xS,yS))==0){ //if it is in the text field
                starsLocationsX.push(xS); //add elements
                starsLocationsY.push(yS);
                added+=1; //update counter
            }
        }
    }
    strokeWeight(2); //set the stroke for the point
    stroke(255);
    //get number stars available
    var lengthStars=starsLocationsX.length; 

    //keep the points inside letters to a limited number
    if (lengthStars>900){
        // remove the first 5 locations
        starsLocationsX=starsLocationsX.slice(5, lengthStars);
        starsLocationsY=starsLocationsY.slice(5, lengthStars);
    }

    //draw all stars inside letters
    for (var k=1; k<lengthStars; k++){
        // select the random brightness
        stroke(255, 128+round(Math.random()*128));
        //draw the point
        point(starsLocationsX[k], starsLocationsY[k]);
    }



    //////////// Shooting star
    ///
    // get the length of the tail
    var lenSh=shootingXstart.length;
    strokeWeight(4);
    //draw the point
    point(shootingXstart[lenSh-1], shootingYstart[lenSh-1]);
    //update position
    shootingXstart.push(shootingXstart[lenSh-1]-2);
    shootingYstart.push(shootingYstart[lenSh-1]+1);
    // draw the star+tail
    for (f=0;f<lenSh; f++){
        stroke(255, f); // alpha dependent on the iteration count
        point(shootingXstart[f], shootingYstart[f]);
    }
    //if the tail longer than 50 point - restart
    if (lenSh>50){
        shootingXstart=[];
        shootingYstart=[];
        shootingXstart.push(800-round(Math.random()*600));
        shootingYstart.push(round(200*Math.random()));

    }


    //////////// Background stars
    ///
    /// add usual stars as some behind screen
    strokeWeight(3); //set the stroke for the point
    stroke(255,28);
    xS=0; //define variables
    yS=0;
    added=0; //counter for the number of stars added this iteration
    while (added<4){
        xS=round(Math.random()*(width)); //find random x
        yS=round(Math.random()*(height-250)); //random y in range
        randomStarsX.push(xS); //add elements
        randomStarsY.push(yS);
        added+=1; //update counter
    }
    // check that there are less than X stars
    if (lengthStars>20){
        randomStarsX=randomStarsX.slice(4, lengthStars);
        randomStarsY=randomStarsY.slice(4, lengthStars);
    }
    //draw them
    for (var k=1; k<lengthStars; k++){
        point(randomStarsX[k], randomStarsY[k]);
}

}