# Draw-Dots
[Play with me!](https://draw-dots.vercel.com)

## A Jr React challenge

<img width="1237" alt="Draw-Dots Screenshot" src="https://user-images.githubusercontent.com/86679848/213559414-96090ecf-1ed7-4543-a5af-c7368e177354.png">

## Goal

to create a simple web app challenge that allows users to click on the screen and have circles render where they clicked.
Also have redo and undo buttons to allow users to undo and redo those circles as desired

## Plan

1. Create a basic react app using create-react-app
2. Find a way to log and save the locations for mouse clicks
3. for each mouse click, render a div with the location of the click as a small circle
4. The click locations should be saved in some kind of array object
5. There should be another array of those mouse clicks that are the ones that are displayed
  So when the user undoes a click, it pops off the last one frome the array and rerenders it
