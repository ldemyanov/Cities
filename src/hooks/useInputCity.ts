import { useState } from "react";
import { ALL_CITIES } from "../shared/cities";

type UseInputCity = (
  inputRef: React.RefObject<HTMLInputElement>,
  currentSymbol: string,
  cities: string[],
  handleAddCity: (city: string) => void,
) => {
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  handleButtonSend: () => void,
  error: string,
};


export const useInputCity: UseInputCity = (inputRef, currentSymbol, cities, handleAddCity) => {
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

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonSend();
    }
  };

  return { handleAddCity, handleButtonSend, onEnter, error }
}