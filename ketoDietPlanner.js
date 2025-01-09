// object with arrays for keto acceptable foods
let foodItems = {
  proteins: ['chicken', 'ham', 'turkey', 'beef'],
  veggies: ['tomato', 'pepper', 'onion', 'avocado', 'broccoli', 'spinach', 'cauliflower'],
  fats: ['yellow cheese', 'olive oil', 'sour cream', 'greek yoghurt', 'butter'],
  nuts: ['almonds', 'walnuts', 'pumpkin seeds'],
  fruits: ['watermelon', 'strawberry', 'berries']
}

// generate a random food from each category for user
let foodGenerator = (foodType) => {
  let randInt = Math.random() * foodType.length;
  let roundedRand = Math.floor(randInt);
  return foodType[roundedRand];
}

// list out these randomly chosen food items as a meal plan 
proteinChoice = foodGenerator(foodItems.proteins);
console.log('Here is your meal!')
console.log('------------------')
console.log('Protein: ' + proteinChoice);
console.log('Fat source: ' + foodGenerator(foodItems.fats));
console.log('Veggies: ' + foodGenerator(foodItems.veggies));
console.log('Fruit (optional): ' + foodGenerator(foodItems.fruits));
console.log('Nuts for the crunch: ' + foodGenerator(foodItems.nuts));

// arrays in meals object for holding dishes to recommend to user for each protein type
let meals = {
  beef: {
    dishes: ['keto beef & broccoli', 'ground beef casserole', 'keto beef stroganoff'],
  },
  chicken: {
    dishes: ['garlic butter chicken', 'chicken parm', 'keto crack chicken'],
  },
  turkey: {
    dishes: ['turkey cheese taco', 'turkey skillet', 'egg and turkey mince'],
  },
  ham: {
    dishes: ['ham and cheese bites', 'ham and cauliflower casserole', 'ham soup'],
  }
}

// function for randomly generating dish recommendation
let mealChoice = (proteinChoice) => {
  let random = Math.floor(Math.random() * 3);
  return 'Your recommended dish is: ' + meals[proteinChoice].dishes[random];
}

// outputting recommendation to user
console.log(mealChoice(proteinChoice));


