// object with arrays containing keto acceptable foods
let foodItems = {
  proteins: ['chicken', 'ham', 'turkey', 'beef'],
  veggies: ['tomato', 'pepper', 'onion', 'avocado', 'broccoli', 'spinach', 'cauliflower'],
  fats: ['yellow cheese', 'olive oil', 'sour cream', 'greek yoghurt', 'butter'],
  nuts: ['almonds', 'walnuts', 'pumpkin seeds'],
  fruits: ['watermelon', 'strawberry', 'berries']
}

// function that randomly generates a food from the array 
let foodGenerator = (foodType) => {
  randInt = Math.random() * foodType.length;
  roundedRand = Math.floor(randInt);
  return foodType[roundedRand];
}

// output for user with randomly generated food items from each category
console.log('Here is your meal!')
console.log('------------------')
console.log('Protein: ' + foodGenerator(foodItems.proteins));
console.log('Fat source: ' + foodGenerator(foodItems.fats));
console.log('Veggies: ' + foodGenerator(foodItems.veggies));
console.log('Fruit (optional): ' + foodGenerator(foodItems.fruits));
console.log('Nuts for the crunch: ' + foodGenerator(foodItems.nuts));

