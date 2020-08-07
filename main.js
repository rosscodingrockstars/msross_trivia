// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numberArray.length; i++) {
//   console.log(numberArray[i]);
// }

const favoriteFoods = {
  breakfast: "bacon and eggs",
  lunch: "pizza and salad",
  dinner: "lasagne",
  dessert: "ice cream",
};

const breakfastCard = `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${favoriteFoods.breakfast}</h5>
  <h6 class="card-subtitle mb-2 text-muted">Feed me now!</h6>
  <p class="card-text"></p>
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>
`;

const characters = [
  {
    name: "Leslie Knope",
    location: "Pawnee, Indiana",
    loves: "waffles",
  },
  {
    name: "Ron Swanson",
    location: "Pawnee, Indiana",
    loves: "silence",
  },
  {
    name: "April Ludgate",
    location: "Pawnee, Indiana",
    loves: "Halloween",
  },
  {
    name: "Tom Haverford",
    location: "Pawnee, Indiana",
    loves: "a lot of things",
  },
];

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i].name);
}

// $(".col").append(breakfastCard);

// $("#breakfast").text(favoriteFoods.breakfast);
// console.log(favoriteFoods.breakfast);
