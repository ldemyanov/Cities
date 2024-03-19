import GameChat from "./GameChat";
import GameInput from "./GameInput";
import GameTime from "./GameTime";

const GameContainer = () => {
  return (
    <div className="flex flex-col h-full">
      <GameTime />
      <GameChat />
      <GameInput />
    </div>
  );
};

export default GameContainer;
