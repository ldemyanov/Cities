import { SECONDS_BEFORE_GAME_OVER } from "../constants";
import { generateNumsArray } from "./generateNumsArray";
import { randomArrayItem } from "./randomArrayItem";

export const getAnswerTime = (step: number): number => {

  console.log(step);

  const probabilityArray = [
    { answers: generateNumsArray(15, SECONDS_BEFORE_GAME_OVER), int: 2 * step },
    { answers: generateNumsArray(SECONDS_BEFORE_GAME_OVER, SECONDS_BEFORE_GAME_OVER + 3), int: 1 * step },
    { answers: generateNumsArray(1, 15), int: step <= 10 ? 100 - step * 10 : 5 },
  ];

  let sum = 0;
  for (let i = 0; i < probabilityArray.length; i++) {
    sum += probabilityArray[i].int;
  }

  const rand = Math.floor(Math.random() * sum);

  console.log({ rand });

  let i = 0;
  for (let s = probabilityArray[0].int; s <= rand; s += probabilityArray[i].int) {
    i++;
  }

  return randomArrayItem(probabilityArray[i].answers) * 1000;
}