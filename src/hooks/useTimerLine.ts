import { useEffect, useRef, useState } from "react";
import { Player } from "../store/game.slice";
import { formatMsToPercent } from "../shared/functions/formatMsToPercent";
import { formatMsToString } from "../shared/functions/formatMsToString";
import { SECONDS_BEFORE_GAME_OVER } from "../shared/constants";

type UseTimerLineProps = {
  player: Player,
  finishTime: number,
  onFinish: () => void,
  timerLineRef: React.RefObject<HTMLDivElement>,
}

const useTimerLine = ({ player, onFinish, timerLineRef, finishTime }: UseTimerLineProps) => {
  const [time, setTime] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const refPrevPlayer = useRef(player);
  const refProgress = useRef(0);
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

      if (progress >= finishTime) {
        onFinish()
      }

      timerLineRef.current!.style.width = `${formatMsToPercent(progress, SECONDS_BEFORE_GAME_OVER)}%`;
      setTime(formatMsToString(progress));
    }, timeStep);

    return () => clearTimeout(refProgress.current);
  }, [progress, player, finishTime, onFinish, timerLineRef]);

  return { time }
}

export default useTimerLine;