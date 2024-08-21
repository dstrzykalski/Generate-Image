# Generate-Image

Challenge 8

## Description

In this challenge I was tasked with creating a command line application which would prompt the user to enter information which would then be used to generate an svg file rendering an image.

The user is to identify the shape and color and then an image will be generated matching those inputs.

## Installation

Run Npm I to install the necessary packages then run the node index.js command to prompt the questions.

## Resources

Referenced Stackoverflow, Xpert Learning Assistant, W3Schools and Class Content in creating this application.

## Author

Daved Strzykalski
Github Username: dstrzykalski

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
