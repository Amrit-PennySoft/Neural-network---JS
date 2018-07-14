# Neural-network---JS
A Neural network that classifies text. Made with Brain.js

Source code for brain.js - https://raw.githubusercontent.com/harthur-org/brain.js/master/browser.js

Lately i've been interested in applications of machine learning that process text as input because you can pretty much find training data everywhere.

This application deals with classifying text.

It's an application that determines whether a tweet was made by Trump or Kim kardashian (pretty useless i digress).
The neural network will be able to look at the tweet that it has never seen before and be able to determine who it was written by.

Brain.JS is easy to use - instantiate it, train and run it. 
-input values have to be between 0 and 1 in order for Brain.js to work with them.

So to have the neural network accept tweets (strings) as an input you need to run them through a function called encode() that turns every character in a string into a value of 0-1 and storing it in an array, but JS has a native method for converting characters into ASCII code called charCodeAt() so i used that and divided the outcome by the max value for extended ASCII characters. 

Also training data is stored as plain text not as the encoded data that is ultimately being fed into our A.I and the function that does this is called processTrainingData() converting the text into encoded characters and returning an array of training data that works well with Brain.js

In line 20 of scripts.js - the train() function saves the trained neural network to a global variable called trainedNet. This prevents us from having to re-train the neural network everytime it's used. once the network is trained and saved to the variable you call it like a function and pass in our encoded input.

Finally Training Data - like i previously mentioned we're storing all of our tweets as text and enoding them into numeric values which makes life easier when you copy and paste your training data. You just have to add a new row and paste the text. Of course, your neural network’s accuracy will increase proportionally to the amount of training data that you give it.

--console.log(execute("  "));-- This is where you pass in a tweet from whatever author you want. - It has to be console.log as i havent gone about making a UI for it yet- which is something im going to work on. 

So just open up index.html and check the console.
