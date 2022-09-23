import {characters} from "../heroes";
import setUpAttacks from "../setupattacks";

test("Атака cо Щитом", () => {
  const received = setUpAttacks(characters, true)[2](5);
  const expected = [
    { name: "Маг", health: 98 },
    { name: "Лучник", health: 78 },
    { name: "Мечник", health: 4 },
  ];

  expect(received).toEqual(expected);
});

test("Атака без Щита", () => {
   
  const received = setUpAttacks(characters, false)[2](5);
  const expected = [
    { name: 'Маг', health: 98 },
    { name: 'Лучник', health: 78 },
    { name: 'Мечник', health: 0 },
  ];
  expect(received).toEqual(expected);
});

// test("Атака при наличии бонуса на массив с выбывшим персонажем", () => {
  

//   const expected = [
//     { name: "Маг", health: 95 },
//     { name: "Лучник", health: 0 },
//     { name: "Мечник", health: 5 },
//   ];

//   const received = setUpAttacks(characters, true)[2](10);

//   expect(received).toEqual(expected);
// });

// test("Атака без бонуса на массив с выбывшим персонажем", () => {
  

//   const expected = [
//     { name: "Маг", health: 100 },
//     { name: "Лучник", health: 0 },
//     { name: "Мечник", health: 5 },
//   ];

//   const received = setUpAttacks(characters, false)[2](5);

//   expect(received).toEqual(expected);
// });

// test("Атака при наличии бонуса на выбывшего персонажа", () => {
  

//   const expected = [
//     { name: "Маг", health: 100 },
//     { name: "Лучник", health: 0 },
//     { name: "Мечник", health: 10 },
//   ];

//   const received = setUpAttacks(characters, true)[1](10);

//   expect(received).toEqual(expected);
// });

// test("Атака без бонусана на выбывшего персонажа", () => {
 

//   const expected = [
//     { name: "Маг", health: 100 },
//     { name: "Лучник", health: 0 },
//     { name: "Мечник", health: 10 },
//   ];

//   const received = setUpAttacks(characters, false)[1](10);

//   expect(received).toEqual(expected);
// });

// test("Атака при наличии бонуса с выбыванием атакуемого", () => {
  
//   const expected = [
//     { name: "Маг", health: 91 },
//     { name: "Лучник", health: 71 },
//     { name: "Мечник", health: 0 },
//   ];

//   const received = setUpAttacks(characters, true)[2](29);

//   expect(received).toEqual(expected);
// });
