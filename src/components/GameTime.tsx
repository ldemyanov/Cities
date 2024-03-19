import { useRef } from "react";
import TimerLine from "./ui/TimerLine";
import { SECONDS_BEFORE_GAME_OVER } from "../shared/constants";
import useTimerLine from "../hooks/useTimerLine";
import { useLoseGame } from "../store/game.hooks";
import { useAppSelector } from "../store";

const GameTime = () => {
  const player = useAppSelector((state) => state.game.currentPlayer);
  const timerLineRef = useRef<HTMLDivElement>(null);

  const handleLoseGame = useLoseGame();

  const { time } = useTimerLine({
    finishTime: SECONDS_BEFORE_GAME_OVER * 1000,
    onFinish: handleLoseGame,
    player,
    timerLineRef,
  });

  return (
    <div className="w-full">
      <div className="flex justify-between pt-5 px-4 h-16">
        <div className="font-bold">{player === "computer" ? "Сейчас очередь соперника" : "Сейчас ваша очередь"}</div>
        <div className="font-bold italic">{time}</div>
      </div>
      <TimerLine ref={timerLineRef} backgroundColor="bg-violet-300" />
    </div>
  );
};

export default GameTime;
