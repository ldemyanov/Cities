import { useEffect, useRef, useState } from "react";
import TimerLine from "./TimerLine";
import { finishGame } from "../app/store/game.slice";
import { useAppDispatch, useAppSelector } from "../app/store";
import { SECONDS_BEFORE_GAME_OVER } from "../shared/constants";
import { formatMsToPercent } from "../shared/functions/formatMsToPercent";
import { formatMsToString } from "../shared/functions/formatMsToString";

const GameTime = () => {
  const player = useAppSelector((state) => state.game.currentPlayer);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("00:00");
  const timerLineRef = useRef<HTMLDivElement>(null);
  const refPrevPlayer = useRef(player);
  const refProgress = useRef(0);
  const dispatch = useAppDispatch();
  const timeStep = 1000;

  useEffect(() => {
    if (refPrevPlayer.current !== player) {
      setProgress(0);
      refPrevPlayer.current = player;
      clearTimeout(refProgress.current);
      refProgress.current = 0;
    }

    refProgress.current = setTimeout(() => {
      setProgress((progress) => progress + timeStep);

      if (progress >= SECONDS_BEFORE_GAME_OVER * 1000) {
        dispatch(finishGame());
      }

      timerLineRef.current!.style.width = `${formatMsToPercent(progress)}%`;
      setTime(formatMsToString(progress));
    }, timeStep);

    return () => clearTimeout(refProgress.current);
  }, [progress, player, dispatch]);

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
