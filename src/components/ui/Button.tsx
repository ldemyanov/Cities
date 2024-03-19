import clsx from "clsx";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  text: string;
};

const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "text-base px-5 py-2.5 mx-auto text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
