// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numberArray.length; i++) {
//   console.log(numberArray[i]);
// }

// const favoriteFoods = {
//   breakfast: "bacon and eggs",
//   lunch: "pizza and salad",
//   dinner: "lasagne",
//   dessert: "ice cream",
// };

// const breakfastCard = `
// <div class="card" style="width: 18rem;">
// <div class="card-body">
//   <h5 class="card-title">${favoriteFoods.breakfast}</h5>
//   <h6 class="card-subtitle mb-2 text-muted">Feed me now!</h6>
//   <p class="card-text"></p>
//   <a href="#" class="card-link">Card link</a>
//   <a href="#" class="card-link">Another link</a>
// </div>
// </div>
// `;

// const questions = [
//   {
//     question: "What does Leslie like to eat?",
//     answerChoices: ["Waffles", "Ice Cream", "asparagus", "steak"],
//     answer: "Waffles",
//   },
//   {
//     name: "Ron Swanson",
//     location: "Pawnee, Indiana",
//     loves: "silence",
//   },
//   {
//     name: "April Ludgate",
//     location: "Pawnee, Indiana",
//     loves: "Halloween",
//   },
//   {
//     name: "Tom Haverford",
//     location: "Pawnee, Indiana",
//     loves: "a lot of things",
//   },
// ];

// for (let i = 0; i < characters.length; i++) {
//   const characterCard = `
//   <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${characters[i].name}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${characters[i].location}</h6>
//     <p class="card-text">I love ${characters[i].loves}.</p>

//   </div>
//   </div>
//   `;
//   $(".col").append(characterCard);
// }

// $(".col").append(breakfastCard);

// $("#breakfast").text(favoriteFoods.breakfast);
// console.log(favoriteFoods.breakfast);

let quiz = [
  {
    question: "Who was one of the co-creators of the show?",
    answers: ["Robert DeNiro", "Snoop Dogg", "Mike Schur", "Robert Plant"],
    correctAnswer: "Mike Schur",
    img: "assets/images/mike-schur.gif",
  },
  {
    question:
      "Which is NOT a complimentary phrase Leslie used to describe Ann?",
    answers: [
      "Beautiful, talented, brillant, powerful musk-ox",
      "Beautiful, naive, sophisticated newborn baby",
      "Cunning, pliable, chesnut-haired sunfish",
      "Beautiful, brilliant, sleek cheetah-warrior",
    ],
    correctAnswer: "Beautiful, brilliant, sleek cheetah-warrior",
    img: "assets/images/leslie-ann.gif",
  },
  {
    question:
      "How did Jean Ralphio say he made money the old-fashioned way? (sing it)",
    answers: [
      "I married a woman with a truuussst fuunnnd",
      "I got run over by a Lexxuuusss",
      "I sued my doctor for medical malprraaactice",
      "I spilled hot coffee in my laaappp",
    ],
    correctAnswer: "I got run over by a Lexxuuusss",
    img: "assets/images/jean-ralphio-lexus.jpeg",
  },
  {
    question:
      "How many times did Ben quit his job at the Tilton & Randomski Accounting firm?",
    answers: ["2", "3", "10", "5"],
    correctAnswer: "3",
    img: "assets/images/ben-accounting.gif",
  },
  {
    question: "Whose jersey was Andy wearing when he and April got married?",
    answers: ["Reggie Wayne", "Brett Favre", "Tom Brady", "Peyton Manning"],
    correctAnswer: "Reggie Wayne",
    img: "assets/images/april-andy-wedding.gif",
  },
  {
    question: "Who created “The Cones of Dunshire”?",
    answers: ["Leslie", "Ben", "Donna", "April"],
    correctAnswer: "Ben",
    img: "assets/images/ben-cones.gif",
  },
  {
    question: "Which celebrity is Donna Meagle's cousin?",
    answers: ["Ginuwine", "50 Cent", "Drake", "Future"],
    correctAnswer: "Ginuwine",
    img: "assets/images/ginuwine.gif",
  },
  {
    question: "What is the name of the song Andy wrote for Lil Sebastian?",
    answers: [
      "10,000 Tiny Dancers",
      "500 Rocket Men",
      "Bennie & the 6,000 Jets",
      "5,000 Candles in the Wind",
    ],
    correctAnswer: "5,000 Candles in the Wind",
    img: "assets/images/lil-sebastian.png",
  },
  {
    question: "What is Jerry Gergich’s real name?",
    answers: ["Larry", "Harry", "Garry", "Terry"],
    correctAnswer: "Garry",
    img: "assets/images/garry.gif",
  },
  {
    question: "What is Tom's nickname for forks?",
    answers: ["Dinglehopper", "Quad-scraper", "Food rakes", "Mini-pitchfork"],
    correctAnswer: "Food rakes",
    img: "assets/images/food-rakes.gif",
  },
  {
    question:
      "What drink causes Leslie and Ann to have their first major fight?",
    answers: ["Snake juice", "Turtle tonic", "Alligator ale", "Parrot punch"],
    correctAnswer: "Snake juice",
    img: "assets/images/snakejuice.gif",
  },
  {
    question: "How many toes does Ron have?",
    answers: ["10", "9", "8", "7"],
    correctAnswer: "9",
    img: "assets/images/ron-toes.gif",
  },
];

const Question = `
    <div class="qa-container">
        <h2>${quiz[0].question}</h2>
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                ${quiz[0].answers[0]}
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" >
                <label class="form-check-label" for="exampleRadios1">
                Default radio
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" >
                <label class="form-check-label" for="exampleRadios1">
                Default radio
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" >
                <label class="form-check-label" for="exampleRadios1">
                Default radio
                </label>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    `;
$(".col").append(Question);

console.log($("input:checked").val());

{
  /* <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div> */
}
