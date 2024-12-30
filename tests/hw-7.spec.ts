import { test, expect } from '@playwright/test';
import { Functions } from '../pom/hw-7-pom';

const FunctionsPOM = new Functions();

const testPair = [
  { value: 1, result: false },
  { value: 2, result: true },
  { value: 100, result: true },
  { value: -5, result: false },
  { value: 0, result: true },
]

const testTime = [
  0,//?
  1,
  11,
  12,
  13,
  17,
  18,
  19,
  23,
  24,// ?
  25,// ?
  -5,
]

const testExam = [
  { value: 49, result: false },
  { value: 50, result: true },
  { value: 51, result: true },
  { value: 0, result: false },
  { value: -5, result: false },
]

const testVote = [
  { value: 18, result: true },
  { value: 19, result: true },
  { value: 179, result: true },
  { value: 150, result: true },
  { value: 17, result: false },
  { value: 0, result: false },
  { value: 151, result: false },
  { value: -5, result: false },
]

const testCompare = [
  { num1st: 5, num2nd: 10 },
  { num1st: 24, num2nd: 12 },
  { num1st: 55, num2nd: 55 },
  { num1st: 55, num2nd: -12 },
]

const testColor = [
  'зелений',
  'жовТИй',
  'Червоний',
  
]

const testType = [
  0,
  -5,
  10,
]

// for (const number of testPair) {// Парне чи непарне число
//   test(`Find type of number: ${number.value}`, async () => {
//     const result = FunctionsPOM.isPairNumber(number.value);
//     expect(result).toBe(number.result);
//   });
// }

for (const time of testTime) {// Привітання за часом
// to do
  test(`Use function with the following hour: ${time}`, async () => {
    FunctionsPOM.isTimeOfDay(time);
  });
}

// for (const grade of testExam) {// Перевірка оцінки
//   test(`Use function with the following grade: ${grade.value}`, async () => {
//     const result = FunctionsPOM.isCheckExam(grade.value);
//     expect(result).toBe(grade.result);
//   });
// }

// for (const age of testVote) {// Голосування
//   test(`Find permission to vote with age ${age.value}`, async () => {
//     const result = FunctionsPOM.isAccessToVote(age.value);
//     expect(result).toBe(age.result);
//   });
// }
/*
for (const numbers of testCompare) {// Порівняння чисел
// to do
  test(`Compare ${numbers.num1st} and ${numbers.num2nd}`, async () => {
    FunctionsPOM.isNumbersCompare(numbers.num1st, numbers.num2nd);
  });
}

for (const color of testColor) {// Дорога і світлофор
// to do
  test(`Find way with color: ${color}`, async () => {
    FunctionsPOM.isTrafficLights(color);
  });
}

for (const number of testType) {// Визначення типу числа
// to do
  test(`Find type of number ${number}`, async () => {
    FunctionsPOM.isNumbersType(number);
  });
}
*/