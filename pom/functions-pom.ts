const error = 'Введено невалідне значення:';

export class Functions {
  checkInvalidValue(num: number) {
    //console.log(num);
    if (num < 0 || Number.isNaN(num)) {
      console.log(error, num);
      return;
    }
  }

  sortByPair(value: string | number) {
    const number = Number(value);
    const messagePositive = 'Число парне.';
    const messageNegative = 'Число непарне.';
    this.checkInvalidValue(number);
    // Введено невалідне значення: -5
    // Число непарне.
    // Чому не припиняється виконання після checkInvalidValue?
    const result = number % 2;
    if (result === 0) {
      console.log(messagePositive);
    } else {
      console.log(messageNegative);
    }
  }

  sortByTime(value: string | number) {
    //const currHour = currTime.split(':')[0]; // parse 'currTime' if need
    const number = Number(value);
    const messageMorning = 'Доброго ранку!';
    const messageDay = 'Доброго дня!';
    const messageEvening = 'Доброго вечора!';
    this.checkInvalidValue(number);
    if (number > 24) {
      console.log(error, value);
      return;
    }
    if (number < 12) {
      console.log(messageMorning);
    }
    if (number >= 12 && number <= 18) {
      console.log(messageDay);
    }
    if (number > 18 && number <= 24) {
      console.log(messageEvening);
    }
  }

  sortByGrade(value: string | number) {
    const number = Number(value);
    const messagePositive = 'Тест складено';
    const messageNegative = 'Тест не складено';
    this.checkInvalidValue(number);
    if (number >= 50) {// яке максимальне значення?
      console.log(messagePositive);
    }
    if (number >= 0 && number < 50) {
      console.log(messageNegative);
    }
  }

  sortByAge(value: string | number) {
    const number = Number(value);
    const messagePositive = 'Ви можете голосувати.';
    const messageNegative = 'Ви ще не можете голосувати.';
    this.checkInvalidValue(number);
    if (number >= 18) {
      console.log(messagePositive);
    }
    if (number >= 0 && number < 18) {
      console.log(messageNegative);
    }
  }

  compareNumbers(value1: string | number, value2: string | number) {
    const number1 = Number(value1);
    const number2 = Number(value2);
    const message1st = 'Перше число більше.';
    const message2nd = 'Друге число більше.';
    const messageEqual = 'Числа рівні';
    this.checkInvalidValue(number1);
    this.checkInvalidValue(number2);
    if (number1 > number2) {
      console.log(message1st);
    }
    if (number1 < number2) {
      console.log(message2nd);
    }
    if (number1 === number2) {
      console.log(messageEqual);
    }
  }

  checkColor(value: string) {
    const messageGreen = 'Переходьте!';
    const messageYellow = 'Підготуйтеся!';
    const messageRed = 'Зачекайте!';
    if (value === '' || value === undefined) {
      console.log(error, value);
    } else {
      const color = value.toLowerCase();
      if (color === 'зелений') {
        console.log(messageGreen);
      }
      if (color === 'жовтий') {
        console.log(messageYellow);
      }
      if (color === 'червоний') {
        console.log(messageRed);
      }
    }
  }

  findTypeNumber(value: string) {
    const messagePros = 'Число додатнє.';
    const messageCons = 'Число від’ємне.';
    const messageZero = 'Число дорівнює нулю.';
    if (value === undefined || value === '') {
      console.log(error, value);
    } else {
      const number = Number(value);
      if (number > 0) {
        console.log(messagePros);
      }
      if (number < 0) {
        console.log(messageCons);
      }
      if (number === 0) {
        console.log(messageZero);
      }
    }
  }

  isPositive(number) {
    const messagePositive = 'number is positive';
    const messageNegative = 'number is negative';
    if (typeof number === "number") {
      if (number > 0) {
        console.log(messagePositive);
        return true;
      } else if (number === 0) {
        console.log(messageNegative);
        return false;
      } else {
        console.log(messageNegative);
        return false;
      }
    } else {
      throw Error("pls use number to check if it positive");
    }
  }
}