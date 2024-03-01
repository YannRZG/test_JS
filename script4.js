const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//Nés dans les années 70  
console.log("Entrepreneurs nés dans les années 70: ");

    let entrepreneurs70s = entrepreneurs.filter(function(entrepreneur) {
    return entrepreneur.year >= 1970 && entrepreneur.year < 1980;
    });
console.log(entrepreneurs70s);

//Nom des entrepreneurs
console.log("Noms des entrepreneurs :");

    let entname = entrepreneurs.map(function(entrepreneur) {
        return {'first':entrepreneur.first, 'last':entrepreneur.last};
    });
    console.log(entname);

//Quel âge aurait chaque entrepreneurs aujourd'hui
const currentYear = new Date().getFullYear();
entrepreneurs.forEach(entrepreneur => {
    entrepreneur.age = currentYear - entrepreneur.year;

})

console.log("Leurs âges aujourd'hui : ", entrepreneurs);

//Trie par ordre alphabétique du nom de famille
entrepreneurs.sort((a, b) => {
    return a.last.localeCompare(b.last);
  });
  
  console.log("Entrepreneurs triés par ordre alphabétique du nom de famille :", entrepreneurs);