# StarrySky
A second sketch for the p5js Hello World series. Draws stars based on the image with text. 

The web version of the graphics is available at https://ksenia007.github.io/StarrySky_p5js/

<p align="center">
  <img src="/assets/rec.gif" width="500">
</p>

How does it work? 

*Disclaimer: I am still working on most aspects of the code, especially the way the stars locations are saved*

There are three components: 

1. The starts that compose the phrase "Hello World"

2. The background stars 

3. The shooting star. 

For each of those three components, there are separate arrays that correspond to the X and Y location. 

There are 2 images used - one is the visible background, and the other are the words. 

<p align="center">
  <img src="/assets/lakeEveningSmall.jpg" width="350">
    <img src="/assets/hwLake.jpg" width="350">

</p>

For the stars that form the letters, I draw the location on random from the narrow strip where I know the letter are contained. For every random point I sample the image contatining the words. If i detect black, then the point is on top of the letter, and I add the colation to the array. This is repeated 5 times every iteration of the draw function until there are more than 900 stars. I then draw all of them with varying intensity. 

For the background stars, they are just generated randomly and drawn with random intensity. 

For the shooting star, the first one starts in the specified location, and moves toward the lower left corner. It moves and records the new position every iteration of the draw function. Then the resulting array is drawn, with intensity dependent on the current position of the star relative to the starting point.  Once the length of the path reaches the specified length, the new falling star is generated randomly. 

*Note: When creating this, I in part used the idea from the tutorial available on CreativeBloq (https://www.creativebloq.com/how-to/explore-creative-code-with-p5js). Particularly, the way the location of the stars is selected.*



