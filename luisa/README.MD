# Script
now, I will talk about operators. Sass support relational, numeric, boolean, string and equality operators for working with different values.
these operators are pretty straightfoward to use but they can save us from writing unnecerary lines of code while making the use of variables, mixins, and functions a little bit more fun.  

## relational operators
so lets start with relational operators. relational operators determine whether numbers are larger
or smaller than one another. 

**copy snippet**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
    <link rel="stylesheet" href="operators.css">
    <title>Document</title>
</head>
<body style="background-color: rgb(181, 183, 185);">
    <div class="relational">
        <h1 style="margin: 30px;">operators</h1>
        
        <form class="pure-form pure-form-stacked" method="POST">
            <div class="personal" style="margin: 30px;">
            <fieldset>
                <legend><h3>Personal information</h3></legend>
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" class="pure-u-23-24" placeholder="name" minlength="3" required=""/>
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" class="pure-u-23-24" placeholder="Last name" minlength="3" required=""/>
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <label for="email">E-Mail</label>
                        <input type="email" id="email" name="email" class="pure-u-23-24" placeholder="email" minlength="3" required="" />
                    </div>  
            </fieldset>
            </div>
        </form>

         <div style="margin: 30px;">
        <input class="submit-btn" type="submit" value="Submit">
        <input class="reset-btn" type="reset" value="Reset">
        <input class="button-btn" type="button" value="Button" onclick="alert('This is the help button')">
        </div>
    </div>

</body>
</html>

```

 Here we have a simple html page with a form that uses different type of buttons, We want each to have a different background color. we want the submit button to be colored green, the
 reset button to be blue and the last one to be yellow.

we can use relational operators to change the color of these buttons.

lets start by adding to our .sass file a map list which contains states as keys and colors as values.

now, lets add our mixin rule.


```scss
$list-map: (submit: lightgreen, reset: lightblue, button: yellow)

@mixin button-state($btn-state)
    @if (length($list-map) > 2 or length($list-map) < 5)
        background-color: map-get($list-map, $btn-state)

.submit-btn
    @include button-state(submit)
.reset-btn
    @include button-state(reset)
.button-btn
    @include button-state(button)

```

 Here we use the "greater than" and less than relational operators aswell as the logical operator 'or' to evaluate the list length.

 If the entire condition evaluates to true, we apply a background-color to the element.

so now that we have our mixin rule lets use it. lets start by styling the submit button. we use the class name and then the @include at-rule with the key submit to apply the lightgreen color to the element.

now the submit button is green. we can repeat this for the other two buttons by just changing the key passed to the mixin.

## Equality operators
sass also support equality operators. these operators determine whether two values or expressions are equal or not.

so lets say I want to make a website about my top 3 favorite videogames.

here is a simple template for that.

```html
<div class="pure-g equality" style="margin: 30px;">
        <h1 class="title">Top 3 Favorite Videogames</h1>

        <div class="pure-u-1 pure-u-md-1-3 game">
            <h3 class="subtitle">Bioshock</h3>
            <div class="text">
                <p >
                Bioshock is a first-person shooter video game developed by 2K Games and published by 2K. 
                It was released for Microsoft Windows, PlayStation 3, and Xbox 360 in August 2009. 
                The game was later ported to the Wii U. </p>
            </div>
            <div>
                <img class="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/BioShock_cover.jpg/220px-BioShock_cover.jpg" alt="">
            </div>
        </div>

        <div class="pure-u-1 pure-u-md-1-3 game">
            <h3 class="subtitle"> Hollow Knight</h3>
            <div class="text">
                <p>
                Hollow Knight is a turn-based, action role-playing video game developed by Team Cherry and published by Bandai Namco Entertainment. 
                It was released for Microsoft Windows, PlayStation 3, and Xbox 360 in August 2015. 
                The game was later ported to the Wii U. </p>
            </div>
            <div>
                <img class="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Hollow_Knight_cover.jpg/220px-Hollow_Knight_cover.jpg" alt="">
            </div>
        </div>

        <div class="pure-u-1 pure-u-md-1-3 game">
            <h3 class="subtitle"> Prince of persia: the two thrones</h3>
            <div class="text">
                <p >
                Prince of Persia: The Two Thrones is a role-playing video game developed by Ubisoft Montreal and published by Ubisoft. 
                It was released for Microsoft Windows, PlayStation 3, and Xbox 360 in August 2015. 
                The game was later ported to the Wii U. </p>
            </div>
            <div>
                <img class="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Prince_of_Persia_-_The_Two_Thrones_%28game_box_art%29.jpg/220px-Prince_of_Persia_-_The_Two_Thrones_%28game_box_art%29.jpg" alt="">
        
            </div>
        </div>
    </div>
```

as you can see this is looking too simple so lets give this a little bit of sass.

first we need some variables for colors and zise.


```scss
$blue-color: rgb(52,79,161) //blue , background
$green-color: rgba(17, 238, 91, 0.877) //green
$yellow-color: rgb(238, 186, 17) //yellow
$border-color: rgba(77, 57, 85, 0.767)
$font-size: 4em
$tenpx: 10px
$border-size: 1px
```

now we just need to add a mixin rule.


```scss
@mixin text-style($type)
    @if $type == "title"
        color: $blue-color
        font-weight: bold
        font-size: $font-size
        font-family: "Arial", sans-serif
        margin: $tenpx

    @else if $type == "subtitle"
        color: $green-color
        font-size: $font-size
        font-family: "cambria", sans-serif
        margin: $tenpx

    @else if $type == "text"
        color: $yellow-color
        font-size: $font-size
        font-family: "helvetica", sans-serif
        margin: $tenpx
        padding: $tenpx
        border: $border-size solid $green-color
        border-radius: $tenpx

```
here we use the if statement and the equality operator == to match the value of the $type variable to one of our conditions to style the title, subtitle and text we use throughout the page.

now lets apply it to our elements.

```scss

.title
    @include text-style(title)
.subtitle
    @include text-style(subtitle)
.text
    @include text-style(text)

```

As you can see, the page is not looking good. this is happening because the font-size variable am using is set to 4em, which is too big for subtitles or text. variables are great but if you cant reuse them whats the point?

here is where the numeric operators are useful. 

## Numeric operators

are just the standard set of mathematical operators for numbers. sass supports division, multiplication, addition, subtraction and modulus operators.

so lets see how we can use them to make this page look better.

lets add mixin rule

```scss
@mixin text-style($type)
    @if $type == "title"
        color: $blue-color
        font-weight: bold
        font-size: $font-size
        font-family: "Arial", sans-serif
        margin: $tenpx

    @else if $type == "subtitle"
        color: $green-color
        font-size: $font-size / 2
        font-family: "cambria", sans-serif
        margin: $tenpx * 2

    @else if $type == "text"
        color: $yellow-color
        font-size: $font-size / 3.5
        font-family: "helvetica", sans-serif
        margin: $tenpx * 2
        padding: $tenpx
        border: $border-size*1.5 solid $green-color
        border-radius: $tenpx
    
```
great! numeric operators do bring reusability to variables.

but the page is still not looking good. 

sass also supports boolean operators. so lets see how we can use them to make this page look better.

lets add a couple of mixin rules

```scss
@mixin div-background($type)
    @if $type
        border: $border-size*6 solid $border-color
        background-color: $blue-color
        margin: $tenpx
        border-radius: $tenpx * 3
        display: flex
    @else if not $type
        border: $border-size*6 solid $border-color
        margin: $tenpx
        border-radius: $tenpx * 3
        display: flex

@mixin img-style($rounded)
    @if not $rounded
        margin: $tenpx
    @else
        border-radius: $tenpx
        margin: $tenpx
```

the first rule uses boolean logic to determine if the div should have a background color of if it should have a border.

and the second rule uses boolean logic to determine if the img should have a border radius or not.

lets apply it to our elements.

```scss
.game
    @include div-background($type: true)
.img
    @include img-style($rounded: false)
```

Now the page looks much better

## string operators

lastly, we have the string operators. one cool thing about sass is that it let you easily concatenate string by using the + symbol.
how can we use this?

well, lets say you have this unordered list of urls names and you want to concatenate the ".com" and the end of each url.

```html
<div class="string" style="margin: 30px;">
        <ul>
            <li> google </li>
            <li> facebook </li>
            <li> twitter </li>
            <li> instagram </li>
            <li> youtube </li>
            <li> linkedin </li>
            <li> github </li>
            <li> codepen </li>
        </ul>
    </div>
```

now we can just write this in sass:

```scss
@mixin string-concat
    &:after
        content: ".com"

li
    @include string-concat
```
you can even style the list by adding this:

```scss
    @include text-style(title)
```

so these are the operators sass support and as you can see they are pretty useful and easy to use.