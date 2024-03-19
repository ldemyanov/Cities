import { useCallback, useRef } from "react";
import TimerLine from "./TimerLine";
import { finishGame } from "../app/store/game.slice";
import { useAppDispatch, useAppSelector } from "../app/store";
import { SECONDS_BEFORE_GAME_OVER } from "../shared/constants";
import useTimerLine from "../hooks/useTimerLine";

const GameTime = () => {
  const player = useAppSelector((state) => state.game.currentPlayer);
  const timerLineRef = useRef<HTMLDivElement>(null);
  
  const dispatch = useAppDispatch();
  const handleLoseGame = useCallback(() => dispatch(finishGame()), [dispatch]); 

  const { time } = useTimerLine({
    finishTime: SECONDS_BEFORE_GAME_OVER * 1000,
    onFinish: handleLoseGame,
    player,
    timerLineRef
  })

  return (
    <div className="w-full">
      <div className="flex justify-between pt-5 px-4 h-16">
        <div>{player === "computer" ? "Сейчас очередь соперника" : "Сейчас ваша очередь"}</div>
        <div>{time}</div>
      </div>
      <TimerLine ref={timerLineRef} backgroundColor="bg-violet-300" />
    </div>
  );
};

export default GameTime;
