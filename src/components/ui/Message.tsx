import clsx from "clsx";
import { memo } from "react";

type MessageProps = {
  left?: boolean;
  text: string;
};

const Message = memo(({ left, text }: MessageProps) => (
  <div className="flex w-full">
    <div
      className={clsx("h-10", {
        "rounded-e-xl rounded-ss-xl bg-violet-50": left,
        "ms-auto rounded-s-xl rounded-se-xl bg-violet-500 text-white": !left,
      })}
    >
      <div
        className={clsx("px-3 py-2", {
          "ms-auto": !left,
        })}
      >
        {text}
      </div>
    </div>
  </div>
));

export default Message;
