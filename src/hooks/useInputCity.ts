import { ALL_CITIES } from "../shared/cities";

type UseInputCity = (
  inputRef: React.RefObject<HTMLInputElement>,
  currentSymbol: string,
  cities: string[],
  handleAddCity: (city: string) => void,
) => {
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  handleButtonSend: () => void,
};


export const useInputCity: UseInputCity = (inputRef, currentSymbol, cities, handleAddCity) => {

  const handleButtonSend = () => {
    const city = inputRef.current?.value;

    if (city && city.length > 0) {
      const isCorrectFirstSymbol = !currentSymbol || city[0] === currentSymbol;
      const isCorrectCity = !cities.includes(city) && ALL_CITIES.includes(city);

      if (isCorrectFirstSymbol && isCorrectCity) {
        handleAddCity(city)
      } else {
        alert("Попробуйте ещё раз");
      }

      inputRef.current.value = "";
    }
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonSend();
    }
  };

  return { handleAddCity, handleButtonSend, onEnter }
}