import { useAppDispatch, useAppSelector } from "../store";
import { useCallback, useRef } from "react";
import { useComputerInput } from "../hooks/useComputerInput";
import { useInputCity } from "../hooks/useInputCity";
import { addCity, finishGame } from "../store/game.slice";
import { getPlaceholder } from "../shared/functions/getPlaceholder";
import ButtonSend from "./ButtonSend";
import clsx from "clsx";

const GameInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const currentSymbol = useAppSelector((state) => state.game.currentSymbol);
  const cities = useAppSelector((state) => state.game.cities);

  const dispatch = useAppDispatch();
  const handleAddCity = useCallback((city: string) => dispatch(addCity(city)), [dispatch]);
  const handleLoseGame = useCallback(() => dispatch(finishGame()), [dispatch]);

  const { handleButtonSend, onEnter } = useInputCity(inputRef, currentSymbol, cities, handleAddCity);
  useComputerInput(currentPlayer, currentSymbol, cities, handleAddCity, handleLoseGame);

  return (
    <div className="mt-auto p-4">
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          id="default-search"
          className={clsx("block w-full p-4 ps-4 text-sm text-gray-900 border-0 rounded-lg bg-gray-100", {
            "placeholder:text-black": currentPlayer === "player",
          })}
          onKeyDown={onEnter}
          placeholder={getPlaceholder(currentPlayer, currentSymbol)}
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
