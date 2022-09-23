//import * as characters from "./heroes";
//console.log(characters);

//const items = characters;
//const arr = result

//console.log(setUpAttacks(characters));


//    const characters = [
//     { name: "Маг", health: 100 },
//     { name: "Лучник", health: 80 },
//     { name: "Мечник", health: 10 },
//   ];

//   const attacks = setUpAttacks(characters);
  
//    attacks[2](26);
  
 //console.log(characters);
  
 export default setUpAttacks;
 function setUpAttacks(items, shield = true) {
  const result = [];

  function funcWithShield(i) {
    return function (damage) {
      if (items[i].health > 0) {
        const allHeroes = items.filter((elem) => elem.health > 0).length;
        const remnantDamage = damage % allHeroes;
        const heroDamage = (damage - remnantDamage) / allHeroes;
        for (const element of items) {
          if (element.health > 0 && element.health > heroDamage) {
            element.health -= heroDamage;
          } else {
            element.health = 0;
          }
        }
        if (items[i].health > 0 && items[i].health > remnantDamage) {
          items[i].health = items[i].health - remnantDamage;
        } else {
          items[i].health = 0;
        }
      }
      return items;
    };
  }

  //  if (!shield) {
  //     for (let i = 0; i < items.length; i += 1) {
  //       result.push(funcNotShield(i));
  //     }
  //   } else {
  for (let i = 0; i < items.length; i += 1) {
    result.push(funcWithShield(i));
    //     }
    //   }

    //   function funcNotShield(i) {
    //     return function (damage) {
    //       if (items[i].health > 0 && items[i].health > damage) {
    //         items[i].health = items[i].health - damage;
    //       } else {
    //         items[i].health = 0;
    //       }
    //       return items;
    //  };
  }

  return result;
}
