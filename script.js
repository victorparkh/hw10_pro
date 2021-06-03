sports = [
  ["skier", "⛷"],
  ["snowboarder", "🏂"],
  ["apple", "🍎"],
  ["hockey", "🏒"],
  ["ice skate", "⛸"],
  ["swimmer", "🏊"],
  ["surfer", "🏄‍"],
  ["watermelon", "🍉"],
  ["lemon", "🍋"],
  ["rowboat", "🚣"],
  ["bicyclist", "🚴‍"],
];

winter_sports = sports.slice(0, 5);
summer_sports = sports.slice(5, 11);

console.log(winter_sports);
console.log(summer_sports);

fruits = winter_sports.slice(2, 3).concat(summer_sports.slice(2, 4));
console.log(fruits);

winterArr = winter_sports.slice(0, 2).concat(winter_sports.slice(3, 5));
summerArr = summer_sports.slice(0, 2).concat(summer_sports.slice(4, 6));

for (i = 0, summerArrFinal = []; i < summerArr.length; i++) {
  summerArrFinal.push(`${summerArr[i].join(": ")}`);
}
for (i = 0, winterArrFinal = []; i < winterArr.length; i++) {
  winterArrFinal.push(`${winterArr[i].join(": ")}`);
}
for (i = 0, fruitsArr = []; i < fruits.length; i++) {
  fruitsArr.push(`${fruits[i].join(": ")}`);
}

console.log(`*** Winter sports ***`);
console.log(winterArrFinal);
console.log(`*** Summer sports ***`);
console.log(summerArrFinal);
console.log(`*** Fruits ***`);
console.log(fruitsArr);
