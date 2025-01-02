export const texts = {
  messagePairTrue: 'Число парне.',
  messagePairFalse: 'Число непарне.',
  messageMorning: 'Доброго ранку!',
  messageDay: 'Доброго дня!',
  messageEvening: 'Доброго вечора!',
  messageError: 'Введено невалідне значення:',
  messagePassed: 'Тест складено',
  messageFailed: 'Тест не складено',
  messageVotingYes: 'Ви можете голосувати.',
  messageVotingNo: 'Ви ще не можете голосувати.',
  message1stLarger: 'Перше число більше.',
  message1stFewer: 'Друге число більше.',
  messageBothEqual: 'Числа рівні',
  messageGo:'Переходьте!',
  messageReady: 'Підготуйтеся!',
  messageStay:'Зачекайте!',
  messageAboveZero: 'Число додатнє.',
  messageBelowZero: 'Число від’ємне.',
  messageEqualZero: 'Число дорівнює нулю.',
}

interface Results {
  booleanType: boolean;
  message: string;
}

export class Functions {
  isPairNumber(value: number) {
    const pairNumber = value % 2;
    let results: Results;
    if (pairNumber === 0) {
      results = { booleanType: true, message: texts.messagePairTrue };
    } else {
      results = { booleanType: false, message: texts.messagePairFalse };
    }
    return results;
  }

  isTimeOfDay(value: number) {
    let results: Results;
    if (value > 23 || value < 0) {
      const error = texts.messageError + value;
      results = { booleanType: false, message: error };
      return results;
    }
    if (value >= 12 && value <= 18) {
      results = { booleanType: true, message: texts.messageDay };
    }
    else if (value > 18 && value <= 23 || value === 0) {
      results = { booleanType: true, message: texts.messageEvening };
    }
    else {// value < 12
      results = { booleanType: true, message: texts.messageMorning };
    }
    return results;
  }

  isCheckExam(value: number) {
    let results: Results;
    if (value >= 50 && value <= 100) {
      results = { booleanType: true, message: texts.messagePassed };
    } else if (value >= 0 && value < 50) {
      results = { booleanType: false, message: texts.messageFailed };
    } else {// value < 0
      const error = texts.messageError + value;
      results = { booleanType: false, message: error };
      return results;
    }
    return results;
  }

  isAccessToVote(value: number) {
    let results: Results;
    if (value >= 18 && value <= 130) {
      results = { booleanType: true, message: texts.messageVotingYes };
    } else if (value <= 0 || value > 130) {
      const error = texts.messageError + value;
      results = { booleanType: false, message: error };
      return results;
    } else {// value > 0 && value < 18
      results = { booleanType: false, message: texts.messageVotingNo };
    }
    return results;
  }

  isNumbersCompare(value1: number | BigInt, value2: number | BigInt) {
    let results: Results;
    if (!isFinite(Number(value1)) || !isFinite(Number(value2))) {
      const error = texts.messageError + `${value1} or ${value2}`;
      results = { booleanType: false, message: error };
      return results;
    } else if (value1 > value2) {
      results = { booleanType: true, message: texts.message1stLarger };
    } else if (value1 < value2) {
      results = { booleanType: false, message: texts.message1stFewer };
    } else {// value1 === value2
      results = { booleanType: true, message: texts.messageBothEqual };
    }
    return results;
  }

  isTrafficLights(value: string) {
    const color = value.toLowerCase();
    let results: Results;
    if (value === '') {
      // не потрібно юзати undefined для стрінги 
      const error = texts.messageError + value;
      results = { booleanType: false, message: error };
      return results;
    } else {
      if (color === 'зелений') {
        results = { booleanType: true, message: texts.messageGo };
      } else if (color === 'жовтий') {
        results = { booleanType: true, message: texts.messageReady };
      } else {// color === 'червоний'
        results = { booleanType: false, message: texts.messageStay };
      }
      return results;
    }
  }

  isNumbersType(value: number) {
    let results: Results;
    if (value > 0) {
      results = { booleanType: true, message: texts.messageAboveZero };
    } else if (value < 0) {
      results = { booleanType: true, message: texts.messageBelowZero };
    } else {// value === 0
      results = { booleanType: false, message: texts.messageEqualZero };
    }
    return results;
  }
}