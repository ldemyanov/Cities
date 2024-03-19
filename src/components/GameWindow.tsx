import clsx from "clsx";
import { useAppSelector } from "../app/store";
import GameContainer from "./GameContainer";
import GameDescription from "./GameDescription";
import Win from "./Win";

const GameWindow = () => {
  const isGame = useAppSelector((state) => state.game.isGame);
  const winner = useAppSelector((state) => state.game.winner);

  const Content = () => {
    if (!isGame && !winner) {
      return <GameDescription />;
    }

    if (isGame) {
      return <GameContainer />;
    }

    if (!!winner) {
      return <Win winner={winner} />;
    }

    return null;
  };

  return (
    <div className="grid place-items-center min-h-screen bg-gray-100">
      <div
        className={clsx("w-[576px] bg-white border rounded-2xl shadow-md", {
          "h-[385px]": !isGame && !winner,
          "h-[485px]": isGame || !!winner,
        })}
      >
        <Content />
      </div>
    </div>
  );
};

export default GameWindow;
