import clsx from "clsx";
import { forwardRef } from "react";

type TimerLineProps = {
  backgroundColor: string;
};

const TimerLine = forwardRef<HTMLDivElement, TimerLineProps>(({ backgroundColor }, ref) => (
  <div className="h-1.5 w-full bg-gray-100">
    <div ref={ref} className={clsx("h-full w-0", backgroundColor)}></div>
  </div>
));

export default TimerLine;
