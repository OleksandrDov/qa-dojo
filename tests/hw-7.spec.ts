import { test } from '@playwright/test';
import { Functions } from '../pom/functions-pom';

const FunctionsPOM = new Functions();

const testPair = [
  '1',
  '2',
  '100',
  '-5',
  '0',
  '',
  'qwerty',
]

const testTime = [
  '0',//?
  '1',
  '11',
  '12',
  '13',
  '17',
  '18',
  '19',
  '23',
  '24',// ?
  '-5',
  '25',// ?
  '',
  'qwerty',
]

const testGrade = [
  '49',
  '50',
  '51',
  '0',
  '-5',
  '',
  'qwerty',
]

const testAge = [
  '0',
  '-5',
  '',
  'qwerty',
]

const testCompare = [
  { num1st: '5', num2nd: '10' },
  { num1st: '24', num2nd: '12' },
  { num1st: '55', num2nd: '55' },
  { num1st: '55', num2nd: '-12' },
]

const testColor = [
  'зелений',
  'жовТИй',
  'Червоний',
  '',
]

const testType = [
  '0',
  '-5',
  '10',
  ''
]
/*
for (const number of testPair) {// Парне чи непарне число
  test(`Find type of number: ${number}`, async () => {
    FunctionsPOM.sortByPair(number);
  });
}

for (const time of testTime) {// Привітання за часом
  test(`Use function with the following hour: ${time}`, async () => {
    FunctionsPOM.sortByTime(time);
  });
}

for (const grade of testGrade) {// Перевірка оцінки
  test(`Use function with the following grade: ${grade}`, async () => {
    FunctionsPOM.sortByGrade(grade);
  });
}

for (const age of testAge) {// Голосування
  test(`Find permission to vote with age ${age}`, async () => {
    FunctionsPOM.sortByAge(age);
  });
}

for (const numbers of testCompare) {// Порівняння чисел
  test(`Compare ${numbers.num1st} and ${numbers.num2nd}`, async () => {
    FunctionsPOM.compareNumbers(numbers.num1st, numbers.num2nd);
  });
}

for (const color of testColor) {// Дорога і світлофор
  test(`Find way with color: ${color}`, async () => {
    FunctionsPOM.checkColor(color);
  });
}

for (const number of testType) {// Визначення типу числа
  test(`Find type of number ${number}`, async () => {
    FunctionsPOM.findTypeNumber(number);
  });
}
*/