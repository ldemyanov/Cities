import clsx from "clsx";

type MessageProps = {
  left?: boolean;
};

const Message = ({ left }: MessageProps) => {
  return (
    <div className="flex w-full">
      <div className={clsx("h-10", {
        "rounded-e-xl rounded-ss-xl bg-violet-50": left,
        "ms-auto rounded-s-xl rounded-se-xl bg-violet-500 text-white": !left,
      })}>
        <div className={clsx("px-3 py-2", {
            "ms-auto": !left,
        })}>Санкт-Петербург</div>
      </div>
    </div>
  );
};

export default Message;
