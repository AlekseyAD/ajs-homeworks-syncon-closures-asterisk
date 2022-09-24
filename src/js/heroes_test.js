import setUpAttacks from './setupattacks';

const characters = [
  { name: 'Маг', health: 100 },
  { name: 'Лучник', health: 80 },
  { name: 'Мечник', health: 10 },
];

const attacks = setUpAttacks(characters, true);

attacks[2](5);

console.log(characters);