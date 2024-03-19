import { useRef } from "react";
import { useAppSelector } from "../store";
import Message from "./ui/Message";
import { useAutoScrollDown } from "../hooks/useAutoScrollDown";

const GameChat = () => {
  const cities = useAppSelector((state) => state.game.cities);
  const ref = useRef<HTMLDivElement>(null);
  useAutoScrollDown(ref, [cities]);

  return (
    <div ref={ref} className="p-6 grow overflow-y-auto h-full">
      {cities.map((city, index) => (
        <Message key={city} text={city} left={index % 2 === 1} />
      ))}

      {cities.length === 0 && (
        <div className="p-6 grid place-items-center text-center grow text-sm text-gray-400 h-full">
          Первый участник вспоминает города...
        </div>
      )}
    </div>
  );
};

export default GameChat;
