import { useAppSelector } from "../store";
import { useRef } from "react";
import { useComputerInput } from "../hooks/useComputerInput";
import { useInputCity } from "../hooks/useInputCity";
import { getPlaceholder } from "../shared/functions/getPlaceholder";
import ButtonSend from "./ui/ButtonSend";
import clsx from "clsx";
import { useAddCity, useLoseGame } from "../store/game.hooks";

const GameInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentPlayer, currentSymbol, cities } = useAppSelector((state) => state.game);

  const handleAddCity = useAddCity();
  const handleLoseGame = useLoseGame();

  const { handleButtonSend, onEnter, error } = useInputCity(
    inputRef,
    currentSymbol,
    cities,
    handleAddCity,
    currentPlayer
  );

  useComputerInput(currentPlayer, currentSymbol, cities, handleAddCity, handleLoseGame);

  return (
    <div className="mt-auto p-4">
      {cities.length > 0 && (
        <div className="text-center text-gray-500 py-1 mb-2 text-sm">Всего перечислено городов: {cities.length}</div>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          id="default-search"
          className={clsx("block w-full p-4 ps-4 text-sm text-gray-900 border-0 rounded-lg bg-gray-100", {
            "placeholder:text-black": currentPlayer === "player",
            "placeholder:text-red-400": !!error,
          })}
          onKeyDown={onEnter}
          placeholder={error || getPlaceholder(currentPlayer, currentSymbol)}
          disabled={currentPlayer === "computer"}
          required
        />
        <ButtonSend
          className="absolute end-2.5 bottom-2.5"
          disabled={currentPlayer === "computer"}
          onClick={handleButtonSend}
        />
      </div>
    </div>
  );
};

export default GameInput;
