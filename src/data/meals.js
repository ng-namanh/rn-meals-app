export const meals = [
  {
    id: '01',
    name: 'Tuna Tartare',
    image: require('../assets/images/tuna.png'),
    rating: '4.2',
    ingredients: ['Fresh Tuna', 'Lime Juice', 'Red Onion', 'Avocado'],
    time: '40 mins',
    difficulty: 'Medium',
    calories: '420 cal',
    color: '#006A4E',
    description:
      'A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.',
    steps: [
      'Dice the fresh tuna into small cubes.',
      'Finely chop the red onion and avocado.',
      'Mix the tuna, red onion, and avocado in a bowl.',
      'Drizzle lime juice over the mixture and gently toss.',
      'Serve chilled and enjoy!'
    ],
    categoryIds: ['0', '1', '2', '7', '10']
  },
  {
    id: '02',
    name: 'Lasagna',
    image: require('../assets/images/lasgana.png'),
    rating: '3.6',
    ingredients: [
      'Lasagna Noodles',
      'Ground Beef',
      'Ricotta Cheese',
      'Tomato Sauce'
    ],
    time: '40 mins',
    difficulty: 'Medium',
    calories: '420 cal',
    color: '#f39c12',
    description:
      'A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.',
    steps: [
      'Cook the lasagna noodles according to package instructions.',
      'Brown the ground beef in a skillet and season with spices.',
      'Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.',
      'Repeat the layers and bake in the oven until bubbly and golden.',
      'Let it cool slightly before serving.'
    ],
    categoryIds: ['2', '4', '1', '0', '13']
  },
  {
    id: '03',
    name: 'Hot Dog',
    image: require('../assets/images/hotdog.png'),
    rating: '4.6',
    ingredients: ['Hot Dog Buns', 'Frankfurters', 'Ketchup', 'Mustard'],
    time: '40 mins',
    difficulty: 'Medium',
    calories: '420 cal',
    color: '#FF0000',
    // description, steps to prepare
    description:
      'A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.',
    steps: [
      "Grill or heat the frankfurters until they're cooked through.",
      'Place the frankfurters in hot dog buns.',
      'Squeeze ketchup and mustard over the frankfurters.',
      'Serve with your favorite sides and enjoy!'
    ],
    categoryIds: ['1', '5', '4', '7', '0']
  },
  {
    id: '04',
    name: 'Manchurian',
    image: require('../assets/images/manchurian.png'),
    rating: '3.6',
    ingredients: ['Cauliflower', 'Soy Sauce', 'Ginger', 'Garlic'],
    time: '30 mins',
    difficulty: 'Easy',
    calories: '350 cal',
    color: '#d35400',
    description:
      'A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.',
    steps: [
      'Cut the cauliflower into florets and blanch them.',
      'Prepare a sauce by mixing soy sauce, ginger, and garlic.',
      'Deep-fry or shallow-fry the cauliflower until crispy.',
      'Toss the fried cauliflower in the sauce until well coated.',
      'Garnish with chopped green onions and serve hot.'
    ],
    categoryIds: ['1', '2', '3', '4', '6']
  },
  {
    id: '05',
    name: 'Chicken',
    image: require('../assets/images/chicken.png'),
    rating: '2.2',
    ingredients: ['Chicken Breasts', 'Salt', 'Black Pepper', 'Olive Oil'],
    time: '45 mins',
    difficulty: 'Medium',
    calories: '450 cal',
    color: '#8d4004',
    description:
      'A succulent chicken dish seasoned with a blend of salt and black pepper, then cooked to perfection with a drizzle of olive oil.',
    steps: [
      'Preheat the oven to the specified temperature.',
      'Season the chicken breasts with salt and black pepper.',
      'Heat olive oil in a skillet over medium-high heat.',
      'Sear the chicken breasts on both sides until golden brown.',
      'Transfer the chicken to the oven and bake until cooked through.',
      'Serve hot and enjoy your flavorful chicken!'
    ],
    categoryIds: ['1', '9', '12', '6', '7']
  },
  {
    id: '06',
    name: 'Cupcakes',
    image: require('../assets/images/cupcakes.png'),
    rating: '5.0',
    ingredients: ['Flour', 'Sugar', 'Eggs', 'Butter'],
    time: '60 mins',
    difficulty: 'Medium',
    calories: '200 cal',
    description:
      'Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.',
    steps: [
      'Preheat the oven to the specified temperature.',
      'Prepare the cupcake batter by mixing the ingredients together.',
      'Line a muffin tin with cupcake liners.',
      'Fill each liner with batter and bake in the oven.',
      'Let the cupcakes cool, then frost and decorate as desired.',
      'Indulge in these sweet treats and savor the flavor!'
    ],
    categoryIds: ['5', '0', '11', '14', '8']
  },
  {
    id: '07',
    name: 'Curry',
    image: require('../assets/images/curry.png'),
    rating: '4.8',
    ingredients: ['Meat', 'Curry Powder', 'Coconut Milk', 'Spices'],
    time: '55 mins',
    difficulty: 'Hard',
    calories: '550 cal',
    color: '#d35400',

    description:
      'A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.',
    steps: [
      'Marinate the meat with spices and let it sit for a while.',
      'Heat oil in a large pot and sauté the marinated meat until browned.',
      'Add curry powder and stir to coat the meat.',
      'Pour in coconut milk and bring to a simmer.',
      'Cover and let the curry simmer until the meat is tender and the flavors meld.',
      'Serve the curry with rice or bread and enjoy the deliciousness!'
    ],
    categoryIds: ['2', '12', '13', '7', '3']
  },
  {
    id: '08',
    name: 'Ramen',
    image: require('../assets/images/ramen-org.png'),
    rating: '4.2',
    ingredients: ['Ramen Noodles', 'Soy Sauce', 'Eggs', 'Vegetables'],
    time: '35 mins',
    difficulty: 'Easy',
    calories: '400 cal',
    color: '#f96163',
    description:
      'A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.',
    steps: [
      'Boil the ramen noodles according to package instructions.',
      'In a pot, bring water to a simmer and add soy sauce for the broth.',
      'Add chopped vegetables and let them cook until tender.',
      'Boil eggs to your desired doneness, then peel and slice them.',
      'Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.',
      'Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!'
    ],
    categoryIds: ['11', '12', '3', '9', '0']
  },
  {
    id: '09',
    name: 'Smoothie',
    image: require('../assets/images/smoothie.png'),
    rating: '4.8',
    ingredients: ['Fruits', 'Yogurt', 'Milk', 'Honey'],
    time: '15 mins',
    difficulty: 'Easy',
    calories: '300 cal',
    color: '#ffeb3b',
    description:
      'A refreshing and nutritious blend of fruits, yogurt, milk, and honey, perfect for a quick breakfast or snack.',
    steps: [
      'Choose your favorite fruits and chop them into pieces.',
      'Combine the chopped fruits, yogurt, milk, and honey in a blender.',
      'Blend until smooth and creamy.',
      'Pour the smoothie into a glass and enjoy!'
    ],
    categoryIds: ['1', '5', '8', '11']
  },
  {
    id: '10',
    name: 'Tomato Soup',
    image: require('../assets/images/tomato-soup.png'),
    rating: '4.1',
    ingredients: ['Tomatoes', 'Vegetable Broth', 'Onions', 'Garlic'],
    time: '30 mins',
    difficulty: 'Easy',
    calories: '250 cal',
    color: '#d32f2f',
    description:
      'A warm and comforting tomato soup made with fresh tomatoes, vegetable broth, onions, and garlic. Perfect for a light lunch or dinner.',
    steps: [
      'Sauté chopped onions and garlic in olive oil until softened.',
      'Add chopped tomatoes and vegetable broth to the pot.',
      'Bring to a boil, then simmer for 20 minutes.',
      'Blend the soup until smooth and creamy.',
      'Season with salt and pepper to taste.',
      'Serve hot with your favorite bread or crackers.'
    ],
    categoryIds: ['1', '2', '9', '12', '14']
  },
  {
    id: '11',
    name: 'Caesar Salad',
    image: require('../assets/images/caesar-salad.png'),
    rating: '4.5',
    ingredients: [
      'Romaine Lettuce',
      'Caesar Dressing',
      'Parmesan Cheese',
      'Croutons'
    ],
    time: '10 mins',
    difficulty: 'Easy',
    calories: '350 cal',
    color: '#2ECC71',
    description:
      'A classic Caesar salad featuring romaine lettuce tossed in a creamy Caesar dressing, topped with Parmesan cheese and crunchy croutons.',
    steps: [
      'Wash and chop romaine lettuce into bite-sized pieces.',
      'Prepare Caesar dressing according to a recipe or use store-bought dressing.',
      'Grate Parmesan cheese.',
      'In a bowl, combine the romaine lettuce and Caesar dressing.',
      'Top with Parmesan cheese and croutons.',
      'Serve immediately and enjoy the freshness!'
    ],
    categoryIds: ['2', '6', '3', '1', '10']
  },
  {
    id: '12',
    name: 'Stir-Fry',
    image: require('../assets/images/stir-fry.png'),
    rating: '4.7',
    ingredients: ['Chicken/Tofu', 'Vegetables', 'Stir-Fry Sauce', 'Rice'],
    time: '20 mins',
    difficulty: 'Easy',
    calories: '400 cal',
    color: '#ffc107',
    description:
      'A quick and easy stir-fry featuring your choice of protein (chicken, tofu, etc.), a variety of vegetables, and a flavorful stir-fry sauce served over rice.',
    steps: [
      'Prepare your chosen protein by cutting it into thin strips or cubes.',
      'Cut your favorite vegetables into bite-sized pieces.',
      'Heat oil in a wok or large pan over medium-high heat.',
      'Stir-fry the protein until cooked through.',
      'Add the vegetables and stir-fry for a few minutes until tender-crisp.',
      'Pour in stir-fry sauce and coat the ingredients evenly.',
      'Serve the stir-fry over cooked rice and enjoy a delicious and healthy meal!'
    ],
    categoryIds: ['3', '2', '5', '9', '10', '4']
  },
  {
    id: '13',
    name: 'Pancakes',
    image: require('../assets/images/pancakes.png'),
    rating: '4.3',
    ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Butter'],
    time: '20 mins',
    difficulty: 'Easy',
    calories: '300 cal',
    color: '#ffff00',
    description:
      'A delightful breakfast favorite made with fluffy pancakes drizzled with maple syrup or your favorite toppings.',
    steps: [
      'Whisk together flour, sugar, and baking powder in a bowl.',
      'In a separate bowl, combine milk and eggs. Whisk until well combined.',
      'Melt butter in a pan over medium heat.',
      'Pour batter onto the pan to form pancakes of desired size.',
      'Cook for a few minutes until bubbles appear on the surface.',
      'Flip the pancakes and cook for another minute or two until golden brown.',
      'Serve hot with your favorite toppings like maple syrup, fresh fruits, or whipped cream.'
    ],
    categoryIds: ['1', '5', '11', '14', '0']
  },
  {
    id: '14',
    name: 'Chicken Breasts',
    image: require('../assets/images/chicken-roasted-vegetables.png'),
    rating: '4.9',
    ingredients: [
      'Chicken Breasts',
      'Vegetables (e.g., broccoli, carrots, potatoes)',
      'Olive Oil',
      'Spices'
    ],
    time: '40 mins',
    difficulty: 'Easy',
    calories: '450 cal',
    color: '#d95b43',
    description:
      'A healthy and flavorful dish with baked chicken breasts seasoned with spices and roasted alongside a variety of vegetables.',
    steps: [
      'Preheat the oven to the specified temperature.',
      'Season chicken breasts with salt, pepper, and your preferred spices.',
      'Cut vegetables into similar-sized pieces.',
      'Toss vegetables with olive oil and additional seasonings.',
      'Place chicken breasts and vegetables on a baking sheet.',
      'Roast in the oven until the chicken is cooked through and the vegetables are tender-crisp.',
      'Enjoy a complete and nutritious meal!'
    ],
    categoryIds: ['1', '2', '6', '14', '0']
  },
  {
    id: '15',
    name: 'Fruit Salad',
    image: require('../assets/images/fruit-salad.png'),
    rating: '4.2',
    ingredients: ['Seasonal Fruits', 'Honey', 'Lemon Juice', 'Mint Leaves'],
    time: '15 mins',
    difficulty: 'Easy',
    calories: '200 cal',
    color: '#ff7f00',
    description:
      'A refreshing and healthy mix of your favorite seasonal fruits, perfect for a light breakfast, dessert, or snack.',
    steps: [
      'Wash and chop your chosen fruits into bite-sized pieces.',
      'In a bowl, combine the fruits.',
      'For a dressing, mix honey, lemon juice, and a pinch of mint leaves.',
      'Pour the dressing over the fruit salad and toss gently to coat.',
      'Serve chilled and enjoy the burst of fresh flavors!'
    ],
    categoryIds: ['1', '5', '11', '12', '14']
  },
  {
    id: '16',
    name: 'Chicken Quesadillas',
    image: require('../assets/images/chicken-quesadillas.png'),
    rating: '4.4',
    ingredients: ['Tortillas', 'Chicken Breast', 'Cheese', 'Salsa'],
    time: '15 mins',
    difficulty: 'Easy',
    calories: '400 cal',
    color: '#ff9900',
    description:
      'A quick and satisfying meal featuring flour tortillas filled with seasoned chicken, cheese, and your favorite salsa.',
    steps: [
      'Cook chicken breast and shred it into pieces.',
      'Grate cheese.',
      'Heat a pan or griddle over medium heat.',
      'Place a tortilla on the pan.',
      'Sprinkle cheese over half of the tortilla.',
      'Top with shredded chicken.',
      'Fold the tortilla in half to create a half-moon shape.',
      'Cook for a few minutes per side until golden brown and cheese is melted.',
      'Cut into wedges and serve with your favorite salsa or toppings.'
    ],
    categoryIds: ['8', '3', '7', '11', '0']
  },
  {
    id: '17',
    name: 'Black Bean Burgers',
    image: require('../assets/images/black-bean-burgers.png'),
    rating: '4.7',
    ingredients: ['Black Beans', 'Breadcrumbs', 'Egg', 'Spices'],
    time: '30 mins',
    difficulty: 'Medium',
    calories: '350 cal',
    color: '#353b48',
    description:
      'A vegetarian twist on classic burgers featuring black beans, breadcrumbs, and spices, perfect for grilling or pan-frying.',
    steps: [
      'Mash black beans in a bowl.',
      'Mix in breadcrumbs, egg, and your favorite spices.',
      'Form the mixture into patties.',
      'Heat oil in a pan or grill pan over medium heat.',
      'Cook the black bean burgers for a few minutes per side until golden brown and cooked through.',
      'Serve on hamburger buns with your favorite toppings.'
    ],
    categoryIds: ['8', '12', '2', '10', '11']
  },
  {
    id: '18',
    name: 'Baked Salmon',
    image: require('../assets/images/baked-salmon.png'),
    rating: '4.8',
    ingredients: ['Salmon Fillet', 'Lemon', 'Fresh Herbs', 'Olive Oil'],
    time: '25 mins',
    difficulty: 'Easy',
    calories: '400 cal',
    color: '#e9967a',
    description:
      'A light and flavorful dish featuring baked salmon seasoned with lemon, fresh herbs, and olive oil.',
    steps: [
      'Preheat the oven to the specified temperature.',
      'Place salmon fillet on a baking sheet.',
      'Slice lemon and place on top of the salmon.',
      'Sprinkle chopped fresh herbs over the salmon and lemon.',
      'Drizzle olive oil over the salmon.',
      'Bake in the oven until the salmon is cooked through and flakes easily with a fork.',
      'Serve with your favorite sides like roasted vegetables or rice.'
    ],
    categoryIds: ['2', '7', '14']
  }
]
