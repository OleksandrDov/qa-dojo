import { test, expect } from '@playwright/test';
import { Functions, texts } from '../pom/hw-7-pom';

const FunctionsPOM = new Functions();

const testPair = [
  { value: 1, result: false, text: texts.messagePairFalse },
  { value: 2, result: true, text: texts.messagePairTrue },
  { value: 100, result: true, text: texts.messagePairTrue },
  { value: -5, result: false, text: texts.messagePairFalse },
  { value: 0, result: true, text: texts.messagePairTrue },
]

const testTimePositive = [
  { value: 0, result: true, text: texts.messageEvening },
  { value: 1, result: true, text: texts.messageMorning },
  { value: 11, result: true, text: texts.messageMorning },
  { value: 12, result: true, text: texts.messageDay },
  { value: 13, result: true, text: texts.messageDay },
  { value: 17, result: true, text: texts.messageDay },
  { value: 18, result: true, text: texts.messageDay },
  { value: 19, result: true, text: texts.messageEvening },
  { value: 23, result: true, text: texts.messageEvening },
]

const testTimeInvalid = [
  { value: 24, result: false, text: texts.messageError },
  { value: 25, result: false, text: texts.messageError },
  { value: -5, result: false, text: texts.messageError },
]

const testExamPositive = [
  { value: 49, result: false, text: texts.messageFailed },
  { value: 50, result: true, text: texts.messagePassed },
  { value: 51, result: true, text: texts.messagePassed },
  { value: 0, result: false, text: texts.messageFailed },
]

const testVotePositive = [
  { value: 18, result: true, text: texts.messageVotingYes },
  { value: 19, result: true, text: texts.messageVotingYes },
  { value: 129, result: true, text: texts.messageVotingYes },
  { value: 130, result: true, text: texts.messageVotingYes },
  { value: 17, result: false, text: texts.messageVotingNo },
]

const testVoteInvalid = [
  { value: 0, result: false, text: texts.messageError },
  { value: 131, result: false, text: texts.messageError },
  { value: -5, result: false, text: texts.messageError },
]

const testCompare = [
  { num1st: 5, num2nd: 10, result: false, text: texts.message1stFewer },
  { num1st: 24, num2nd: 12, result: true, text: texts.message1stLarger },
  { num1st: 55, num2nd: 55, result: true, text: texts.messageBothEqual },
  { num1st: 55, num2nd: -12, result: true, text: texts.message1stLarger },
  { num1st: 1234567890123456789012345678901234567890n, num2nd: -1234567890123456789012345678901234567890n, result: true, text: texts.message1stLarger },
  { num1st: Infinity, num2nd: -12, result: false, text: texts.messageError },
  // + бескінечність та - бескінечність
  { num1st: 55, num2nd: Infinity, result: false, text: texts.messageError },
]

const testColor = [
  { value: 'зелений', result: true, text: texts.messageGo },
  { value: 'жовТИй', result: true, text: texts.messageReady },
  { value: 'Червоний', result: false, text: texts.messageStay },
  { value: '', result: false, text: texts.messageError },
]

const testType = [
  { value: 0, result: false, text: texts.messageEqualZero },
  { value: -5, result: true, text: texts.messageBelowZero },
  { value: 10, result: true, text: texts.messageAboveZero },
]

for (const number of testPair) {// Парне чи непарне число
  test(`Find type of number: ${number.value}`, async () => {
    const results = FunctionsPOM.isPairNumber(number.value);
    expect(results.booleanType).toBe(number.result);
    expect(results.message).toContain(number.text);
  });
}

for (const time of testTimePositive) {// Привітання за часом. Positive
  test(`Use function with the following hour: ${time.value}`, async () => {
    const results = FunctionsPOM.isTimeOfDay(time.value);
    expect(results.booleanType).toBe(time.result);
    expect(results.message).toContain(time.text);
  });
}

for (const time of testTimeInvalid) {// Привітання за часом. Invalid
  test(`Use function with the following hour: ${time.value}`, async () => {
    const error = time.text + time.value;
    const results = FunctionsPOM.isTimeOfDay(time.value);
    expect(results.booleanType).toBe(time.result);
    expect(results.message).toContain(error);
  });
}

for (const grade of testExamPositive) {// Перевірка оцінки. Positive
  test(`Use function with the following grade: ${grade.value}`, async () => {
    const results = FunctionsPOM.isCheckExam(grade.value);
    expect(results.booleanType).toBe(grade.result);
    expect(results.message).toContain(grade.text);
  });
}

test(`Use function with the following grade: -1`, async () => {// Перевірка оцінки. Invalid
  const value = -1;
  const error = texts.messageError + value;
  const results = FunctionsPOM.isCheckExam(value);
  expect(results.booleanType).toBe(false);
  expect(results.message).toContain(error);
});

for (const age of testVotePositive) {// Голосування. Positive
  test(`Find permission to vote with age ${age.value}`, async () => {
    const results = FunctionsPOM.isAccessToVote(age.value);
    expect(results.booleanType).toBe(age.result);
    expect(results.message).toContain(age.text);
  });
}

for (const age of testVoteInvalid) {// Голосування. Invalid
  test(`Find permission to vote with age ${age.value}`, async () => {
    const error = texts.messageError + age.value;
    const results = FunctionsPOM.isAccessToVote(age.value);
    expect(results.booleanType).toBe(age.result);
    expect(results.message).toContain(error);
  });
}

for (const numbers of testCompare) {// Порівняння чисел
  test(`Compare ${numbers.num1st} and ${numbers.num2nd}`, async () => {
    const results = FunctionsPOM.isNumbersCompare(numbers.num1st, numbers.num2nd);
    expect(results.booleanType).toBe(numbers.result);
    expect(results.message).toContain(numbers.text);
  });
}

for (const color of testColor) {// Дорога і світлофор. Positive
  test(`Find way with color: ${color.value}`, async () => {
    const results = FunctionsPOM.isTrafficLights(color.value);
    expect(results.booleanType).toBe(color.result);
    expect(results.message).toContain(color.text);
  });
}

test(`Find way with color: blank value`, async () => {// Дорога і світлофор. Invalid
  const value = '';
  const error = texts.messageError + value;
  const results = FunctionsPOM.isTrafficLights(value);
  expect(results.booleanType).toBe(false);
  expect(results.message).toContain(error);
});

for (const number of testType) {// Визначення типу числа
  test(`Find type of number ${number.value}`, async () => {
    const results = FunctionsPOM.isNumbersType(number.value);
    expect(results.booleanType).toBe(number.result);
    expect(results.message).toContain(number.text);
  });
}