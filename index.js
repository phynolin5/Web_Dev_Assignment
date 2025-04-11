var Name = "Michael Mgbedoro"
var Age = 30
var Nationality = "Nigerian"
console.log(`My name is ${Name} and I am ${Age} years old, I am a ${Nationality}`)


//The following line of code creates a variable containing a string, changes the string to upper and lower cases. 
var Quote = "Education is a powerful weapon which we can use to change the world - Nelson Mandela"
console.log(Quote.toUpperCase())
console.log(Quote.toLowerCase())

//The following line of code creates a variable and containing a word string and reverses it.
let word = "Jesus" 
let reversed = word.split('').reverse().join()
console.log(reversed)

//Store and calculate the total price of 3 items
let item1 = 10.99;
let item2 = 5.49;
let item3 = 8.75;
let totalPrice = item1 + item2 + item3;

console.log(`The total price of the items is ${totalPrice}.`);

//Find the average of 5 scores
let score1 = 85, score2 = 44, score3 =98, score4 = 83, score5 = 67
let AverageScore = (score1 + score2 + score3 + score4 + score5)/5

console.log(`The average test score is ${AverageScore}`)

//Create an array of favorite food and display first and last item
let FavoriteFood = ["Pizza", "Sushi", "Fried Rice", "Beans"]

console.log(`First Favorite Food is ${FavoriteFood[0]}`)
console.log(`Last Favorite Food is ${FavoriteFood[FavoriteFood.length -1]}`)

// Adding two items at the beginning and end

FavoriteFood.unshift('plantain')
FavoriteFood.push('Burger')

console.log(`Updated Favorite Food is " ${FavoriteFood}`)

//Create arrays for student names

let jssOne = ["Ada", "Bola", "Chika", "David", "Emma", "Fatima", "Grace", "Henry", "Ife", "James"]
let jssTwo = ["Kemi", "Leo", "Musa", "Nora", "Ovie", "Peter", "Queen", "Rita", "Samuel", "Tunde"]
let jssThree = ["Uche", "Victor", "Wale", "Xavier", "Yemi", "Zainab", "Amara", "Ben", "Cynthia", "Daniel"]

console.log(`JSS One Students:, ${jssOne}`)
console.log(`JSS Two Students:, ${jssTwo}`)
console.log(`JSS Three Students:, ${jssThree}`)