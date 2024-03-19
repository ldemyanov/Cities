import { useAppDispatch } from ".";
import { addCity, finishGame, startGame } from "./game.slice";

export const useStartGame = () => {
  const dispatch = useAppDispatch();
  const handleStartGame = () => dispatch(startGame());
  return handleStartGame;
}

export const useLoseGame = () => {
  const dispatch = useAppDispatch();
  const handleLoseGame = () => dispatch(finishGame());
  return handleLoseGame;
}

export const useAddCity = () => {
  const dispatch = useAppDispatch();
  const handleAddCity = (city: string) => dispatch(addCity(city));
  return handleAddCity;
}