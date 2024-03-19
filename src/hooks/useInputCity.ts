import { useEffect, useState } from "react";
import { ALL_CITIES } from "../shared/cities";
import { Player } from "../store/game.slice";

type UseInputCity = (
  inputRef: React.RefObject<HTMLInputElement>,
  currentSymbol: string,
  cities: string[],
  handleAddCity: (city: string) => void,
  currentPlayer: Player
) => {
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  handleButtonSend: () => void,
  error: string,
};


export const useInputCity: UseInputCity = (inputRef, currentSymbol, cities, handleAddCity, currentPlayer) => {
  const [error, setError] = useState("");

  const handleButtonSend = () => {
    const city = inputRef.current?.value;

    if (city && city.length > 0) {
      inputRef.current.value = "";

      if (currentSymbol && city[0] !== currentSymbol) {
        return setError(`Нужно ввести город начинающийся с буквы ${currentSymbol}`);
      }

      if (cities.includes(city)) {
        return setError(`Город ${city[0]} уже назван`);
      }

      if (!ALL_CITIES.includes(city)) {
        return setError(`Город ${city} не найден`);
      }

      handleAddCity(city)
      setError("");
    }
  };

  useEffect(() => {
    if (currentPlayer === "player" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentPlayer, inputRef])

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonSend();
    }
  };

  return { handleAddCity, handleButtonSend, onEnter, error }
}