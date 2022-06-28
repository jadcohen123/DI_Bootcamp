// // Store your favorite food into a variable.
// let favoriteFood = "tuna";
// // Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// let favoriteMeal = "dinner";
// // Console.log I eat <favorite food> at every <favorite meal>
// let mealDay = `i eat ${favoriteFood} at every ${favoriteMeal}`;
// console.log(mealDay)



// // Part I
// // Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// let myWatchedSeriesLength = myWatchedSeries.length;
// // Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// // Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// // For example : black mirror, money heist, and the big bang theory
// let myWatchedSeriesSentence = `I watched ${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

// // Console.log a sentence using both of the variables created above
// // For example : I watched 3 series : black mirror, money heist, and the big bang theory
// let sentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`;
// console.log(sentence);

// // Part II
// // Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// myWatchedSeries.splice(2, 1, "friends");
// // Add, at the end of the array, the name of another series you watched.
// myWatchedSeries.push("squid game");
// // Add, at the beginning of the array, the name of your favorite series.
// myWatchedSeries.splice(0, 0, "stranger things");
// // Delete the series “black mirror”.
// myWatchedSeries.splice(1, 1);
// // Console.log the third letter of the series “money heist”.
// console.log(myWatchedSeries[1][2]);
// // Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
// console.log(myWatchedSeries);


// //exercise III
// // Store a celsius temperature into a variable.
// let celsiusTemprature = 25
// // Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// let fahrenheitTemp= "77 degrees Fahrenheit";
// let sentence = `${celsiusTemprature} is ${fahrenheitTemp}`;
// console.log(sentence);
// // Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// // Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32



// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// let c;
//     let a = 34;
//     let b = 21;

//     console.log(34+21) //first expression
//     // Prediction: it will output 55, because 34 and 21 are numbers
//     // Actual:55

//     a = 2;

//     console.log(2+21) //second expression
//     // Prediction:it will output 23, because 2 and 21 are numbers
//     // Actual:23