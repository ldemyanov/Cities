import clsx from "clsx";
import { useAppSelector } from "../store";
import type { Winner } from "../store/game.slice";
import Button from "./ui/Button";
import { selectEndInfo } from "../store/game.selectors";
import { useStartGame } from "../store/game.hooks";

type WinProps = {
  winner: Winner;
};

const GameWin = ({ winner }: WinProps) => {
  const { countCities, duration, lastCity } = useAppSelector(selectEndInfo);
  const handleStartGame = useStartGame();

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
        className={clsx("text-3xl text-center font-bold", {
          "text-green-600": winner === "player",
          "text-red-600": winner === "computer",
        })}
      >
        {duration}
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
          <span className="inline-block text-2xl mt-2 font-bold">{lastCity}</span>
        </p>
      )}

      <Button className="mt-auto" text="Начать новую игру" onClick={handleStartGame} />
    </div>
  );
};

export default GameWin;
