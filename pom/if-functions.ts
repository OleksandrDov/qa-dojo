import { Page } from '@playwright/test';

const currTime = '';

export class FunctionsIf {
  FunctionsIfPOM: Page;

  constructor(page: Page) {
    this.FunctionsIfPOM = page;
  }

  async noteForTime(currTime: string) {
    //const currHour = currTime.split(':')[0]; // parse 'currTime' if need
    const hour = Number(currTime);
    const messageMorning = 'Доброго ранку!';
    const messageDay = 'Доброго дня!';
    const messageEvening = 'Доброго вечора!';
    if (hour < 12) {
      console.log(messageMorning);
    }
    if (hour >= 12 && hour <= 18) {
      console.log(messageDay);
    }
    if (hour > 18) {
      console.log(messageEvening);
    }
  }
}

/*
const currTime = '12';

function noteForTime(currTime: string) {
    //const currHour = currTime.split(':')[0]; // parse 'currTime' if need
    const hour = Number(currTime);
    const messageMorning = 'Доброго ранку!';
    const messageDay = 'Доброго дня!';
    const messageEvening = 'Доброго вечора!';
    if (hour < 12) {
        console.log(messageMorning);
    }
    if (hour >= 12 && hour <= 18) {
        console.log(messageDay);
    }
    if (hour > 18) {
        console.log(messageEvening);
    }
}
*/