/*
треба подумати, як зробити ці функції через true / false
і дописати експекти у тести на true / false (скоріш за все зробити це у об'єкт)
*/

export class Functions {
  isPairNumber(value: number) {
    const result = value % 2;
    if (result === 0) {
      console.log('Число парне.');
    } else {
      console.log('Число непарне.');
    }
  }

  isTimeOfDay(value: number) {
    if (value > 23) {
      throw Error(`Введено невалідне значення: ${value}`);
    }
    if (value < 12) {
      console.log('Доброго ранку!');
    }
    if (value >= 12 && value <= 18) {
      console.log('Доброго дня!');
    }
    if (value > 18 && value < 24 || value === 0) {
      console.log('Доброго вечора!');
    }
  }

  isCheckExam(value: number) {
    if (value >= 50 && value === 100) {
      console.log('Тест складено');
    }
    if (value >= 0 && value < 50) {
      console.log('Тест не складено');
    }
  }

  isAccessToVote(value: number) {
    if (value >= 18 && value <= 150) {
      console.log('Ви можете голосувати.');
    }
    if (value >= 0 && value < 18) {
      console.log('Ви ще не можете голосувати.');
    }
  }

  isNumbersCompare(value1: number, value2: number) {
    if (value1 > value2) {
      console.log('Перше число більше.');
    }
    if (value1 < value2) {
      console.log('Друге число більше.');
    }
    if (value1 === value2) {
      console.log('Числа рівні');
    }
  }

  isTrafficLights(value: string) {
    if (value === '') {// не потрібно юзати undefined для стрінги 
      throw Error(`Введено невалідне значення: ${value}`);
    } else {
      const color = value.toLowerCase();
      if (color === 'зелений') {
        console.log('Переходьте!');
      }
      if (color === 'жовтий') {
        console.log('Підготуйтеся!');
      }
      if (color === 'червоний') {
        console.log('Зачекайте!');
      }
    }
  }

  isNumbersType(value: number) {
    if (value > 0) {
      console.log('Число додатнє.');
    }
    if (value < 0) {
      console.log('Число від’ємне.');
    }
    if (value === 0) {
      console.log('Число дорівнює нулю.');
    }
  }
}