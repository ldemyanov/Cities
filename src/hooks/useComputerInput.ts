import { useEffect, useRef } from "react";
import { ALL_CITIES } from "../shared/cities";
import { Player } from "../store/game.slice";
import { randomArrayItem } from "../shared/functions/randomArrayItem";
import { getAnswerTime } from "../shared/functions/getAnswerTime";

type UseComputerInput = (
  currentPlayer: Player,
  currentSymbol: string,
  cities: string[],
  input: (city: string) => void,
  lose: () => void,
) => void

export const useComputerInput: UseComputerInput = (currentPlayer, currentSymbol, cities, input, lose) => {

  const timeoutRef = useRef(0);

  useEffect(() => {
    if (currentPlayer === "computer") {
      const answers = ALL_CITIES.filter((city) => city[0] === currentSymbol).filter((city) => !cities.includes(city));

      if (answers.length === 0) {
        timeoutRef.current = setTimeout(
          () => input(city),
          2 * 60 * 1000
        )
        return;
      }

      const city = randomArrayItem(answers);
      const time = getAnswerTime(cities.length);

      timeoutRef.current = setTimeout(
        () => input(city),
        time
      )
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentPlayer, input, cities, currentSymbol, lose]);
}