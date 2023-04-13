const movies = [
  {
    id: "a01",
    title:
      "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
    year: 1996,
    actors: ["Shawn Wayans", "Marlon Wayans", " Keenen Ivory Wayans"],
    description:
      "Ashtray, Tray for short, is sent to the inner city to live with his father. Tray gets an education about life on the streets from his psychotic, gun-toting cousin Loc Dog, pot-smoking foul-mouthed Grandma, underage Pops, and gang members Preach and Crazy Legs. At a picnic, Tray falls for the infamous Dashiki, who has seven kids, much to the distaste of ex-convict Toothpick, who happens to be her ex-boyfriend. When Ashtray and Loc Dog head out to buy some snacks, Toothpick and his crew, Al Dog and Sam, confront Ashtray and hold him at gunpoint until Loc Dog threatens them with a nuclear missile mounted in the back of his truck, whereupon Toothpick and his gang flee the scene.",
    details: {
      genre: "comedy",
      reviews: [
        { username: "bigBlackC", content: "Nice movie. LoL ", score: 9 },
      ],
    },
  },
  {
    id: "a02",
    title: "Harry Potter and the Philosopher's Stone ",
    year: 2001,
    actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    description:
      "Late one night, Albus Dumbledore and Minerva McGonagall, professors at Hogwarts School of Witchcraft and Wizardry, along with groundskeeper Rubeus Hagrid, deliver an orphaned infant wizard named Harry Potter to his Muggle aunt and uncle, Petunia and Vernon Dursley, his only living relatives.",
    details: {
      genre: "Fantasy",
      reviews: [
        {
          username: "Wizard007",
          content: "Where is my invite to Hogwarts?",
          score: 10,
        },
      ],
    },
  },
  {
    id: "a03",
    title: "The Platform",
    year: 2019,
    actors: ["Iván Massagué", "Antonia San Juan", "Zorion Eguileor"],
    description:
      "Goreng wakes in a concrete cell marked with the number 48. His cellmate, Trimagasi, explains that they are in (The Pit), a tower-style facility in which food is delivered via a platform that travels from the top-down, halting for a fixed period on each floor. People on lower levels can eat only what those above leave and are subjected to fatal temperatures if they keep the food. Prisoners are randomly reassigned to a new level each month. Trimagasi reveals that when assigned to level 132, he and his former cellmate cannibalized a resident who had fallen down the shaft. One day, a bloodied woman named Miharu rides down on the platform, whom Trimagasi explains descends the pit every month searching for her child.",
    details: {
      genre: "psychological thriller",
      reviews: [{ username: "alfa12", content: "I love Apples ", score: 8 },
    { username: "alfa12", content: "I love Apples ", score: 10 },
  { username: "alfa12", content: "I love Apples ", score: 3 }],
    },
  }
];

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  const score = 0;
  const totalScore = element.details.reviews.reduce((a,b) => a+b.score, score)/ element.details.reviews.length
  console.log(`The ${element.year} film ${element.title}, which tells the story of “${element.description}”This movie starred ${element.actors} and etc. It was rated by ${element.details.reviews.length} ${element.details.reviews.length <= 1 ? 'user': 'users'}, with a total rating of ${totalScore}. Register to watch this ${element.details.genre}.`);
}



function getMoviesByYear(movies, year) {
  let yearToNumber = Number(year)
  console.log(yearToNumber)
	const getMoviesByYears = movies.filter(element => element.year === yearToNumber   );
	console.log(getMoviesByYears)

}

getMoviesByYear(movies, 2001)


function getMoviesByName(movies, name) {
 let nameToLowerCase =  name.toLowerCase()
  console.log(nameToLowerCase)
	const getMoviesByNames = movies.filter(element => element.title.toLowerCase().includes(nameToLowerCase) )
	console.log(getMoviesByNames)
}

getMoviesByName(movies, "while")