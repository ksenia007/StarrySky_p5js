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
    shootingXstart.push(800);
    shootingYstart.push(200);
}

function draw(){ 
    image(img,0,0);
    noFill(); //no fill in shapes

    lengthStars=randomStarsX.length;


    var xS=0; //define variables
    var yS=0;
    var added=0; //counter for the number of stars added this iteration
    if (lengthStars<900){
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

    var lengthStars=starsLocationsX.length; //get number stars available
    
    //point(lengthStars,lengthStars); //temp, debugging to track the size


    //keep the points inside letters to a limited number
    if (lengthStars>900){
        starsLocationsX=starsLocationsX.slice(5, lengthStars);
        starsLocationsY=starsLocationsY.slice(5, lengthStars);

    }
    //draw all stars inside letters
    for (var k=1; k<lengthStars; k++){
        stroke(255, 128+round(Math.random()*128));
            point(starsLocationsX[k], starsLocationsY[k]);
    }

    var lenSh=shootingXstart.length;
    point(lenSh,lenSh);

    strokeWeight(4);
    point(shootingXstart[lenSh-1], shootingYstart[lenSh-1]);
    shootingXstart.push(shootingXstart[lenSh-1]-2);
    shootingYstart.push(shootingYstart[lenSh-1]+1);

    for (f=0;f<lenSh; f++){
        stroke(255, f);
        point(shootingXstart[f], shootingYstart[f]);
    }
    ///dSq=Math.pow(shootingXstart[lenSh]-shootingXstart[0],2)+Math.pow(shootingYstart[lenSh]-shootingYstart[0],2);
    //d=Math.sqrt(dSq);
    if (lenSh>50){
        shootingXstart=[];
        shootingYstart=[];
        shootingXstart.push(800-round(Math.random()*600));
        shootingYstart.push(round(200*Math.random()));

    }


    // if (lenSh>50){
    //     shootingXstart=shootingXstart.slice(1, lenSh);
    //     shootingYstart=shootingYstart.slice(1, lenSh);
    // }

    // strokeWeight(10);
    // if (shootingYstart<300){
    //     for (i=0; i<10; i++){
    //     stroke(255,100+i*10/2);
    //     point(shootingXstart, shootingYstart);
    //     shootingXstart-=1;
    //     shootingYstart+=1;
    //     }

    // }
    // shootingX+=1;

    //add usual stars as some behind screen
    strokeWeight(3); //set the stroke for the point
    stroke(255,28);
    xS=0; //define variables
    yS=0;
    added=0; //counter for the number of stars added this iteration
    while (added<4){
        xS=round(Math.random()*(width)); //find random x
        yS=round(Math.random()*(height-250)); //random y in range
        //randomStarsX.shift(); //shift to keep the number of stars constant
        randomStarsX.push(xS); //add elements
        //randomStarsY.shift();
        randomStarsY.push(yS);
        added+=1; //update counter
    }
    if (lengthStars>10){
        randomStarsX=randomStarsX.slice(4, lengthStars);
        randomStarsY=randomStarsY.slice(4, lengthStars);
    }
    for (var k=1; k<lengthStars; k++){
        point(randomStarsX[k], randomStarsY[k]);
}

}