import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../app/store";
import { Winner, startGame } from "../app/store/game.slice";
import Button from "./Button";
import { selectCountCities, selectGameDuration, selectLastCity } from "../app/store/game.selectors";

type WinProps = {
  winner: Winner;
};

const Win = ({ winner }: WinProps) => {
  const dispatch = useAppDispatch();

  const lastCity = useAppSelector(selectLastCity);
  const countCities = useAppSelector(selectCountCities);
  const gameDuration = useAppSelector(selectGameDuration);

  const handleStartGame = () => dispatch(startGame());

  const TitleText = () => {
    if (winner === "player") {
      return (
        <>
          Поздравляем тебя с победой!
          <br />
          Твой противник не вспомнил нужный город!
        </>
      );
    }

    if (winner === "computer") {
      return (
        <>
          К сожалению твое время вышло!
          <br />
          Твой противник победил!
        </>
      );
    }
  };

  return (
    <div className="flex flex-col gap-8 p-10 h-full">
      <p className="text-xl text-center">
        <TitleText />
      </p>

      <p
        className={clsx("text-3xl text-center italic", {
          "text-green-600": winner === "player",
          "text-red-600": winner === "computer",
        })}
      >
        {gameDuration}
      </p>

      <p className="text-xl text-center">
        Всего было перечислено городов: {countCities}
        <br />
        Очень не плохой результат!
      </p>

      {lastCity && (
        <p className="text-xl text-center">
          Последний город названный победителем:
          <br />
          <span className="inline-block text-2xl italic mt-1.5">{lastCity}</span>
        </p>
      )}

      <Button className="mt-auto" text="Начать новую игру" onClick={handleStartGame} />
    </div>
  );
};

export default Win;
